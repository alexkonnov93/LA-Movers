export default function Chevron({
  size = 14,
  direction = "down",
  className = "",
}: {
  size?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const rotation = {
    down: 0,
    up: 180,
    right: -90,
    left: 90,
  }[direction];

  return (
    <svg
      width={size}
      height={Math.round(size * 0.57)}
      viewBox="0 0 14 8"
      fill="none"
      className={className}
      style={rotation ? { transform: `rotate(${rotation}deg)` } : undefined}
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
