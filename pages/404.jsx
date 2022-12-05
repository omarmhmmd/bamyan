export default function Custom404() {
  return (
    <div class="errorPage">
      <div
        style={{
          position: "absolute",
          top: "50%",
          overflow:"hidden",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          fontFamily: "Arial",
          fontWeight: "bold",
          fontSize: "50vw",
          color: "var(--brown)",
          paddingTop: "12.5vw"
        }}
      >
        404
      </div>
      <div
        style={{
          position: "absolute",
          overflow:"hidden",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "0",
          fontFamily: "Bamyan",
          fontWeight: "bold",
          color:"var(--tan)",
          fontSize: "75vw",
        }}
      >
        ۴٠۴
      </div>
    </div>
  );
}
