import { axiomtechTheme } from "../theme/axiomtech-theme";

export function ChatBubble({ message, isUser }: { message: string; isUser: boolean }) {
  return (
    <div
      style={{
        backgroundColor: isUser
          ? axiomtechTheme.colors.primary
          : axiomtechTheme.colors.secondary,
        color: axiomtechTheme.colors.text,
        borderRadius: axiomtechTheme.ui.borderRadius,
        boxShadow: axiomtechTheme.ui.shadow,
        padding: "0.75rem 1rem",
        marginBottom: "0.5rem",
        maxWidth: "70%",
        alignSelf: isUser ? "flex-end" : "flex-start",
      }}
    >
      {message}
    </div>
  );
}
