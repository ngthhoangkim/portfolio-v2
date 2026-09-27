import { ImageResponse } from "next/og";
import content from "../data/content.json";

const { profile } = content;

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time and served as the Open Graph / Twitter card image,
// so there is no static asset to keep in sync with content.json.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#0F172A",
          backgroundImage:
            "radial-gradient(900px circle at 80% 0%, rgba(56,189,248,0.18), rgba(15,23,42,0) 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 44,
            color: "#e2e8f0",
          }}
        >
          {profile.role}
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 16,
            fontSize: 26,
            color: "#7dd3fc",
          }}
        >
          <span>React</span>
          <span style={{ color: "#475569" }}>·</span>
          <span>Next.js</span>
          <span style={{ color: "#475569" }}>·</span>
          <span>TypeScript</span>
          <span style={{ color: "#475569" }}>·</span>
          <span>TailwindCSS</span>
        </div>
      </div>
    ),
    size
  );
}
