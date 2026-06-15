import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Deep tech gradients matching the premium aesthetic */}
        <linearGradient id="hopes-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--indigo-400)" />
          <stop offset="100%" stopColor="var(--indigo-700)" />
        </linearGradient>
        <linearGradient id="hopes-right" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--cyan-400)" />
          <stop offset="100%" stopColor="var(--indigo-600)" />
        </linearGradient>
        <linearGradient id="hopes-glow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--indigo-500)" />
          <stop offset="100%" stopColor="var(--cyan-300)" />
        </linearGradient>
      </defs>

      {/* Left wing / pillar of 'H' */}
      <polygon
        points="22,25 38,32 38,78 22,70"
        fill="url(#hopes-left)"
        rx="2"
      />

      {/* Right wing / pillar of 'H' */}
      <polygon
        points="62,32 78,25 78,70 62,78"
        fill="url(#hopes-right)"
        rx="2"
      />

      {/* Upward soaring central chevron 1 (Hope / Growth) */}
      <polygon
        points="50,15 62,35 50,29 38,35"
        fill="url(#hopes-glow)"
      />

      {/* Connecting middle chevron 2 */}
      <polygon
        points="50,38 62,53 50,47 38,53"
        fill="url(#hopes-glow)"
        opacity="0.8"
      />

      {/* Lower connecting chevron 3 */}
      <polygon
        points="50,60 62,72 50,67 38,72"
        fill="url(#hopes-left)"
        opacity="0.6"
      />
    </svg>
  );
}

