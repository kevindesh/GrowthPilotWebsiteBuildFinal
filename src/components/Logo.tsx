export function Logo({ className = "w-10 h-10 md:w-12 md:h-12" }: { className?: string }) {
  return (
    <img
      src="/logo - Edited.png"
      alt="GrowthPilot Logo"
      className={`object-contain ${className}`}
    />
  );
}
