import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Osmani Technologies — Software, commerce, and capital from Nigeria.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(50% 50% at 80% 25%, rgba(184,148,85,0.20), transparent 70%), radial-gradient(60% 60% at 10% 90%, rgba(140,110,51,0.18), transparent 70%), #181614",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "#F2EDE3",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width={48} height={48} viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="17" stroke="#F2EDE3" strokeWidth="1.4" />
              <path d="M 8.6 20 A 11.4 11.4 0 0 0 31.4 20 Z" fill="#B89455" />
              <circle cx="20" cy="12.6" r="1.4" fill="#B89455" />
            </svg>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: 6,
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              Osmani
            </div>
          </div>
          <svg width={32} height={32} viewBox="0 0 14 14" fill="none">
            <path
              d="M 7 1 L 12.5 5 L 9.5 13 L 4.5 13 L 1.5 5 Z"
              stroke="#B89455"
              strokeWidth="0.6"
              strokeLinejoin="round"
              fill="none"
            />
            <path d="M 1.5 5 L 7 5 L 12.5 5" stroke="#B89455" strokeWidth="0.4" />
            <path d="M 7 1 L 7 5" stroke="#B89455" strokeWidth="0.4" />
            <path d="M 1.5 5 L 7 13" stroke="#B89455" strokeWidth="0.4" opacity="0.7" />
            <path d="M 12.5 5 L 7 13" stroke="#B89455" strokeWidth="0.4" opacity="0.7" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 100,
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: -3,
            }}
          >
            Software, commerce,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 100,
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: -3,
            }}
          >
            and{" "}
            <span style={{ color: "#B89455", fontStyle: "italic", marginLeft: 18 }}>
              capital
            </span>
            .
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#9B958A",
              marginTop: 14,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Built in Ibadan · For the world
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
