import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}, ${siteConfig.role}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const portraitPath = join(process.cwd(), "public/images/arpit-singhal.jpg");

const palette = {
  accent: "#c8471c",
  background: "#f0eee6",
  ink: "#141310",
  muted: "#6b6659",
  surface: "#f7f5ee",
} as const;

async function getPortraitSource() {
  try {
    const portrait = await readFile(portraitPath, "base64");
    return `data:image/jpeg;base64,${portrait}`;
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const portraitSource = await getPortraitSource();

  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: palette.background,
        color: palette.ink,
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "48px 56px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          background: palette.surface,
          border: `2px solid ${palette.ink}`,
          borderRadius: 36,
          display: "flex",
          height: "100%",
          overflow: "hidden",
          padding: "68px 72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: palette.accent,
            display: "flex",
            height: 12,
            left: 0,
            position: "absolute",
            right: 0,
            top: 0,
          }}
        />

        <div
          style={{
            alignItems: "center",
            background: palette.ink,
            border: `5px solid ${palette.accent}`,
            borderRadius: 999,
            display: "flex",
            flexShrink: 0,
            height: 280,
            justifyContent: "center",
            overflow: "hidden",
            width: 280,
          }}
        >
          {portraitSource ? (
            // ImageResponse supports data URLs for local image assets.
            // biome-ignore lint/performance/noImgElement: next/image is not supported by ImageResponse.
            <img
              alt=""
              height="280"
              src={portraitSource}
              style={{
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                width: "100%",
              }}
              width="280"
            />
          ) : (
            <span
              style={{
                color: palette.background,
                fontSize: 104,
                letterSpacing: "-0.07em",
              }}
            >
              AS
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginLeft: 58,
          }}
        >
          <span
            style={{
              fontSize: 72,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {siteConfig.name}
          </span>

          <span
            style={{
              color: palette.accent,
              fontSize: 29,
              lineHeight: 1.2,
              marginTop: 22,
            }}
          >
            {siteConfig.role} · Backend &amp; AI Systems
          </span>

          <span
            style={{
              color: palette.muted,
              fontSize: 24,
              lineHeight: 1.35,
              marginTop: 24,
              maxWidth: 620,
            }}
          >
            {siteConfig.description}
          </span>

          <div
            style={{
              alignItems: "center",
              color: palette.ink,
              display: "flex",
              fontSize: 21,
              marginTop: 30,
            }}
          >
            <span
              style={{
                background: palette.accent,
                borderRadius: 999,
                display: "flex",
                height: 15,
                marginRight: 14,
                width: 15,
              }}
            />
            <span>
              {siteConfig.availability} · {siteConfig.location}
            </span>
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
