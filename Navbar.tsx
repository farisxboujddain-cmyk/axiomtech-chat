import { axiomtechTheme } from "../theme/axiomtech-theme";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: axiomtechTheme.colors.secondary,
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo + Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={axiomtechTheme.brand.logo}
          alt={axiomtechTheme.brand.name}
          style={{ height: "32px" }}
        />
        <span
          style={{
            color: axiomtechTheme.colors.primary,
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {axiomtechTheme.brand.name}
        </span>
      </div>

      {/* Button */}
      <button
        style={{
          backgroundColor: axiomtechTheme.colors.primary,
          color: axiomtechTheme.colors.text,
          padding: "0.5rem 1rem",
          borderRadius: axiomtechTheme.ui.borderRadius,
          boxShadow: axiomtechTheme.ui.shadow,
          border: "none",
          cursor: "pointer",
        }}
      >
        دخول
      </button>
    </nav>
  );
}
