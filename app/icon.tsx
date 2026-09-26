import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon(): ImageResponse {
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
            alignItems: "center",
            justifyContent: "center",
            color: "#F1F0EC",
            fontSize: 22,
            fontWeight: 900,
            fontFamily: "Impact, Arial Black, sans-serif",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginRight: 2,
          }}
        >
          C
        </div>
        <div
          style={{
            position: "absolute",
            right: 5,
            bottom: 5,
            width: 5,
            height: 5,
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
