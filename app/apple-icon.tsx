import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080909",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#F1F0EC",
            fontSize: 118,
            fontWeight: 900,
            fontFamily: "Impact, Arial Black, sans-serif",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          C
        </div>
        <div
          style={{
            position: "absolute",
            right: 28,
            bottom: 32,
            width: 22,
            height: 22,
            borderRadius: 999,
            background: "#E21D25",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
