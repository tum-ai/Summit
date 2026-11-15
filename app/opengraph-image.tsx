import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "TUM.ai SF Summit 2027";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Placeholder OG image. Replace with a still from the hero film once footage is final.
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0E0E0C", color: "#F4F1EA" }}>
        <div style={{ fontSize: 120, letterSpacing: 12, fontWeight: 500 }}>DEUTSCHLAND</div>
        <div style={{ fontSize: 22, letterSpacing: 8, marginTop: 40, color: "#8A857B" }}>TUM.AI SF SUMMIT 2027</div>
      </div>
    ),
    size,
  );
}
