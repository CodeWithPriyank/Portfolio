import { useNavigate } from "react-router-dom";

const FigmaDesigns = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#f5f5dc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2>Figma Designs</h2>
      <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "1rem" }}>Coming soon...</p>
      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "2rem", padding: "0.6rem 1.2rem", background: "transparent", color: "#f5f5dc", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", cursor: "pointer" }}
      >
        &larr; Back
      </button>
    </div>
  );
};

export default FigmaDesigns;
