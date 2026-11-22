import { spawn } from "node:child_process";
import { resolve } from "node:path";

const host = "127.0.0.1";
const port = "3107";
const baseUrl = `http://${host}:${port}`;
const nextCli = resolve("node_modules/next/dist/bin/next");
const playwrightCli = resolve("node_modules/@playwright/test/cli.js");

function startNode(args, env = process.env) {
  return spawn(process.execPath, args, {
    cwd: process.cwd(),
    env,
    stdio: "inherit",
    windowsHide: true,
  });
}

async function stopServer(server) {
  if (server.exitCode !== null) return;

  const exited = new Promise((resolveExit) => server.once("exit", resolveExit));
  server.kill();
  await Promise.race([
    exited,
    new Promise((resolveDelay) => setTimeout(resolveDelay, 2_000)),
  ]);
}

async function waitForServer(server) {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(
        `Next.js exited before becoming ready (${server.exitCode}).`,
      );
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The local server is still starting.
    }

    await new Promise((resolveDelay) => setTimeout(resolveDelay, 250));
  }

  throw new Error(`Timed out waiting for ${baseUrl}.`);
}

const server = startNode([
  nextCli,
  "start",
  "--hostname",
  host,
  "--port",
  port,
]);

let exitCode = 1;

try {
  await waitForServer(server);

  const tests = startNode([playwrightCli, "test", ...process.argv.slice(2)], {
    ...process.env,
    PLAYWRIGHT_BASE_URL: baseUrl,
  });
  exitCode = await new Promise((resolveExit) => {
    tests.on("exit", (code) => resolveExit(code ?? 1));
  });
} finally {
  await stopServer(server);
}

process.exitCode = exitCode;
