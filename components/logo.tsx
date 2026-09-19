import * as React from "react";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="10" width="32" height="10" rx="3" fill="currentColor" />
      <rect x="19" y="24" width="10" height="14" rx="3" fill="currentColor" />
      <circle cx="34" cy="31" r="5" fill="#6366f1" />
    </svg>
  );
}
