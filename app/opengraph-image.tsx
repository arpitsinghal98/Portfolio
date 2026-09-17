import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#f0eee6",
        color: "#141310",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 72px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 18,
          justifyContent: "space-between",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        <span>{siteConfig.name}</span>
        <span style={{ color: "#c8471c" }}>Open to work</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: "serif",
            fontSize: 112,
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            maxWidth: 900,
          }}
        >
          I build the parts underneath the feature.
        </div>
        <div
          style={{
            borderTop: "2px solid #d5d0c1",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            marginTop: 52,
            paddingTop: 24,
          }}
        >
          <span>{siteConfig.role}</span>
          <span style={{ color: "#6b6659" }}>{siteConfig.location}</span>
        </div>
      </div>
    </div>,
    size,
  );
}
