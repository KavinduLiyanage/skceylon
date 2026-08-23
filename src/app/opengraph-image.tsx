import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "SK Ceylon — lab-tested coco peat and coir exports from Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const specs = [
  ["EC, washed", "< 0.5 mS/cm"],
  ["pH", "5.5 – 6.8"],
  ["Moisture", "< 18 %"],
  ["Compression", "5 : 1"],
];

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
          backgroundColor: "#f3f8f0",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.2em",
              color: "#8a5a14",
              textTransform: "uppercase",
            }}
          >
            SK Ceylon (Pvt) Ltd · Colombo, Sri Lanka
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 68,
              lineHeight: 1.1,
              color: "#17251a",
              maxWidth: 900,
            }}
          >
            Lab-tested coco peat, shipped from the source.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: "2px solid #b0c9ad",
            borderBottom: "2px solid #b0c9ad",
          }}
        >
          {specs.map(([label, value], i) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 0",
                borderTop: i === 0 ? "none" : "1px dashed #b0c9ad",
                fontSize: 28,
              }}
            >
              <span style={{ color: "#47604e" }}>{label}</span>
              <span style={{ color: "#17251a", fontWeight: 600 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
