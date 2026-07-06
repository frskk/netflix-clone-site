// Netflix-style wordmark. Rendered as styled text so it always displays
// (no external asset) while closely matching the brand look: heavy weight,
// tight tracking, brand red, subtle top-down shadow.
export default function NetflixLogo({ className = "", size = "text-2xl md:text-3xl" }) {
  return (
    <span
      className={`select-none font-sans font-extrabold uppercase tracking-tighter text-netflix-red ${size} ${className}`}
      style={{
        letterSpacing: "-0.06em",
        textShadow: "0 2px 4px rgba(0,0,0,0.45)",
        transform: "scaleY(1.05)",
      }}
    >
      NETFLIX
    </span>
  );
}
