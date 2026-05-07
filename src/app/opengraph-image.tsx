import { ImageResponse } from "next/og";

export const alt = "Doppel — Send your double. Skip the meeting.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background:
            "linear-gradient(135deg, #FFFFFF 0%, #F4F8FC 60%, #DCE7F2 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#5BA8E6",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#5BA8E6",
            }}
          />
          DOPPEL · 2026
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 116,
              color: "#0B1B2B",
              lineHeight: 0.98,
              letterSpacing: -3,
              fontFamily: "serif",
            }}
          >
            Send your double.
          </div>
          <div
            style={{
              fontSize: 116,
              color: "#5BA8E6",
              lineHeight: 0.98,
              letterSpacing: -3,
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            Skip the meeting.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#3A536B",
            fontSize: 22,
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ maxWidth: 720, lineHeight: 1.4 }}>
            A humanoid version of you that joins meetings on your behalf — with
            your context, your voice, and a complete recap.
          </div>
          <div
            style={{
              color: "#5BA8E6",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            doppel.ai
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
