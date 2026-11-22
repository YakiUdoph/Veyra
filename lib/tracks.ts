export const learningTracks = [
  { id: "de", name: "German", locale: "de-DE" },
  { id: "fr", name: "French", locale: "fr" },
  { id: "es", name: "Spanish", locale: "es" },
  { id: "it", name: "Italian", locale: "it" },
  { id: "zh-hans", name: "Mandarin Chinese", locale: "zh-Hans" },
  { id: "ko", name: "Korean", locale: "ko" },
  { id: "pt-br", name: "Brazilian Portuguese", locale: "pt-BR" },
  { id: "pt-pt", name: "European Portuguese", locale: "pt-PT" },
] as const;

export type LearningTrack = (typeof learningTracks)[number];
