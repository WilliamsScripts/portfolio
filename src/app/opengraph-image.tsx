import { ImageResponse } from "next/og";

export const alt = "Williams Williams - Senior Fullstack & AI Engineer";
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
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(99,102,241,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(139,92,246,0.3), transparent 45%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: 24,
          }}
        >
          Senior Fullstack & AI Engineer
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          Williams Williams
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#94a3b8",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          Building fintech &amp; SaaS products that handle real money, real
          scale, real users.
        </div>
      </div>
    ),
    { ...size }
  );
}
