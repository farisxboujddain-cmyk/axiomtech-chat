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
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={axiomtechTheme.brand.logo}
          alt={axiomtechTheme.brand.name}
          style={{ height: 32 }}
        />
        <span
          style={{
            color: axiomtechTheme.colors.primary,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {axiomtechTheme.brand.name}
        </span>
      </div>

      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <a
          href="/"
          style={{
            color: "rgba(255,255,255,0.9)",
            textDecoration: "none",
            fontSize: 14,
          }}
        >
          Home
        </a>

        <button
          style={{
            backgroundColor: axiomtechTheme.colors.primary,
            color: axiomtechTheme.colors.text,
            padding: "0.5rem 1rem",
            borderRadius: axiomtechTheme.ui.borderRadius,
            boxShadow: axiomtechTheme.ui.shadow,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
