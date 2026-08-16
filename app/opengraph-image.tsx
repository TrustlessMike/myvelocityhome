import { ImageResponse } from "next/og"

export const alt = "Velocity Home Loans — Michigan and Florida mortgage broker"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1F3A",
          color: "#F6F1E8",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", opacity: 0.7 }}>
          Velocity Home Loans
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 600, maxWidth: 900 }}>
            Fast-track your home loan
          </div>
          <div style={{ fontSize: 32, opacity: 0.85, maxWidth: 820 }}>
            Licensed mortgage broker in Michigan and Florida. Brighton-based. Wholesale rates.
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.7 }}>NMLS #2706011 · myvelocitymortgage.com</div>
      </div>
    ),
    { ...size },
  )
}
