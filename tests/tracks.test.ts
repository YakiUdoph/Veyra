import { describe, expect, it } from "vitest";

import { learningTracks } from "../lib/tracks";

describe("planned learning tracks", () => {
  it("keeps exactly eight planned English-to-target tracks", () => {
    expect(learningTracks).toHaveLength(8);
    expect(new Set(learningTracks.map((track) => track.id)).size).toBe(8);
  });

  it("models Brazilian and European Portuguese separately", () => {
    expect(
      learningTracks.filter((track) => track.id.startsWith("pt-")),
    ).toEqual([
      { id: "pt-br", name: "Brazilian Portuguese", locale: "pt-BR" },
      { id: "pt-pt", name: "European Portuguese", locale: "pt-PT" },
    ]);
  });
});
