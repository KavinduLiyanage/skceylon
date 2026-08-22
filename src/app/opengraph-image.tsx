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
          backgroundColor: "#f5efe4",
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
              color: "#2a1f16",
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
            borderTop: "2px solid #c3b291",
            borderBottom: "2px solid #c3b291",
          }}
        >
          {specs.map(([label, value], i) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 0",
                borderTop: i === 0 ? "none" : "1px dashed #c3b291",
                fontSize: 28,
              }}
            >
              <span style={{ color: "#5e5040" }}>{label}</span>
              <span style={{ color: "#2a1f16", fontWeight: 600 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
