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
        {/* Modern high-tech gradients driven by CSS variables */}
        <linearGradient id="lion-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--indigo-300)" />
          <stop offset="50%" stopColor="var(--indigo-500)" />
          <stop offset="100%" stopColor="var(--indigo-600)" />
        </linearGradient>
        <linearGradient id="mane-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--indigo-400)" />
          <stop offset="100%" stopColor="var(--indigo-800)" />
        </linearGradient>
        <linearGradient id="mane-right" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--indigo-400)" />
          <stop offset="100%" stopColor="var(--indigo-800)" />
        </linearGradient>
      </defs>

      {/* Outer Mane / Crown - Left */}
      <polygon points="50,10 20,25 32,55 50,42" fill="url(#mane-left)" />
      {/* Outer Mane / Crown - Right */}
      <polygon points="50,10 80,25 68,55 50,42" fill="url(#mane-right)" />

      {/* Side Cheeks - Left */}
      <polygon points="20,25 10,55 35,70 32,55" fill="url(#mane-left)" opacity="0.8" />
      {/* Side Cheeks - Right */}
      <polygon points="80,25 90,55 65,70 68,55" fill="url(#mane-right)" opacity="0.8" />

      {/* Central Face Bridge - Left */}
      <polygon points="50,42 32,55 35,70 50,88" fill="url(#lion-glow)" />
      {/* Central Face Bridge - Right */}
      <polygon points="50,42 68,55 65,70 50,88" fill="url(#lion-glow)" opacity="0.9" />

      {/* Tech Eyes (Slanted, minimalist & sharp) */}
      <polygon points="38,53 47,56 45,58 38,55" fill="#FFFFFF" />
      <polygon points="62,53 53,56 55,58 62,55" fill="#FFFFFF" />

      {/* Code Brackets Integrated into lower face/muzzle structure */}
      {/* Left Code Bracket "<" */}
      <path
        d="M 30,62 L 25,66 L 30,70"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Right Code Bracket ">" */}
      <path
        d="M 70,62 L 75,66 L 70,70"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Nose/Mouth area (Geometric) */}
      <polygon points="50,70 44,76 56,76" fill="#FFFFFF" opacity="0.95" />
      <polygon points="50,88 44,76 56,76" fill="var(--indigo-950)" />
    </svg>
  );
}
