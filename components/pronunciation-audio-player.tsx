"use client";

import { useId, useRef, useState } from "react";

import type { PlayablePronunciationAudio } from "@/lib/pronunciation-audio";

type PlayerState =
  "idle" | "loading" | "playing" | "paused" | "ended" | "error";

export function PronunciationAudioPlayer({
  audio,
  label,
  unavailableMessage = "Pronunciation audio is unavailable.",
}: {
  audio: PlayablePronunciationAudio | null;
  label: string;
  unavailableMessage?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const titleId = useId();
  const [state, setState] = useState<PlayerState>("idle");
  const unavailable = audio === null;

  async function playAudio() {
    if (!audioRef.current) return;
    setState("loading");
    try {
      await audioRef.current.play();
    } catch {
      setState("error");
    }
  }

  function pauseAudio() {
    audioRef.current?.pause();
    setState("paused");
  }

  async function replayAudio() {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    await playAudio();
  }

  const statusMessage = unavailable
    ? unavailableMessage
    : state === "loading"
      ? "Loading pronunciation audio."
      : state === "playing"
        ? "Pronunciation audio is playing."
        : state === "paused"
          ? "Pronunciation audio is paused."
          : state === "ended"
            ? "Pronunciation audio finished."
            : state === "error"
              ? "Pronunciation audio could not be played. Try again."
              : "Pronunciation audio is ready.";

  return (
    <section className="audio-player" aria-labelledby={titleId}>
      <div className="audio-player-copy">
        <h2 id={titleId}>Pronunciation audio</h2>
        <p>{label}</p>
      </div>
      {audio ? (
        <audio
          ref={audioRef}
          src={audio.src}
          preload="none"
          onCanPlay={() =>
            setState((current) => (current === "loading" ? "idle" : current))
          }
          onPlaying={() => setState("playing")}
          onPause={() =>
            setState((current) => (current === "ended" ? current : "paused"))
          }
          onEnded={() => setState("ended")}
          onError={() => setState("error")}
        />
      ) : null}
      <div
        className="audio-player-controls"
        aria-label="Pronunciation audio controls"
      >
        {state === "playing" ? (
          <button
            className="button button-secondary"
            type="button"
            onClick={pauseAudio}
          >
            Pause audio
          </button>
        ) : (
          <button
            className="button button-secondary"
            type="button"
            onClick={playAudio}
            disabled={unavailable || state === "loading"}
          >
            {state === "error"
              ? "Retry audio"
              : state === "loading"
                ? "Loading audio"
                : "Play audio"}
          </button>
        )}
        <button
          className="button button-quiet"
          type="button"
          onClick={replayAudio}
          disabled={unavailable || state === "loading"}
        >
          Replay audio
        </button>
      </div>
      <p
        className={
          state === "error"
            ? "audio-player-status is-error"
            : "audio-player-status"
        }
        role={state === "error" ? "alert" : "status"}
        aria-live={state === "error" ? "assertive" : "polite"}
      >
        {statusMessage}
      </p>
    </section>
  );
}
