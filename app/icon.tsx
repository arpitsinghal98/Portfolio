import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#100f0c",
        borderRadius: 14,
        color: "#ff7a4d",
        display: "flex",
        fontSize: 25,
        height: "100%",
        justifyContent: "center",
        letterSpacing: "-0.04em",
        width: "100%",
      }}
    >
      AS
    </div>,
    size,
  );
}
