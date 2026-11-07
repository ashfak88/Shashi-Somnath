import React, { useId } from 'react';

/**
 * Royal Monogram Crest Logo for Shashi & Somnath (SS)
 * Completely isolated with unique gradient IDs per instance to prevent
 * SVG defs collision or vanishing on scroll/state change.
 */
export default function LogoSS({ className = '', size = 120, variant = 'gold' }) {
  const isDark = variant === 'dark';
  const rawId = useId();
  // Safe sanitized unique suffix for SVG IDs
  const uid = rawId ? rawId.replace(/[^a-zA-Z0-9_-]/g, '') : Math.random().toString(36).slice(2, 8);

  const goldMetallicId = `ss_gold_met_${uid}`;
  const goldDeepId = `ss_gold_deep_${uid}`;
  const innerGlowId = `ss_inner_glow_${uid}`;

  return (
    <div
      className={`ss-monogram-wrap ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        position: 'relative',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        filter: isDark
          ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.45))'
          : 'drop-shadow(0 4px 14px rgba(184,134,11,0.25))',
      }}
      aria-label="Shashi and Somnath SS Monogram Logo"
    >
      <svg
        viewBox="0 0 240 240"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <defs>
          {/* Metallic Gold Gradient with unique ID */}
          <linearGradient id={goldMetallicId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="22%" stopColor="#DFAD36" />
            <stop offset="48%" stopColor="#FFF8D6" />
            <stop offset="68%" stopColor="#C99320" />
            <stop offset="86%" stopColor="#F7DA76" />
            <stop offset="100%" stopColor="#8F5E06" />
          </linearGradient>

          {/* Deep Gold Gradient with unique ID */}
          <linearGradient id={goldDeepId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7A4E02" />
            <stop offset="50%" stopColor="#C99320" />
            <stop offset="100%" stopColor="#F5D061" />
          </linearGradient>

          {/* Inner Medallion Radial Gradient with unique ID */}
          <radialGradient id={innerGlowId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDF7" stopOpacity={isDark ? "0.08" : "0.96"} />
            <stop offset="70%" stopColor="#FFF9E6" stopOpacity={isDark ? "0.03" : "0.78"} />
            <stop offset="100%" stopColor="#F2DFC0" stopOpacity={isDark ? "0" : "0.45"} />
          </radialGradient>
        </defs>

        {/* Medallion Background */}
        <circle cx="120" cy="120" r="104" fill={`url(#${innerGlowId})`} />

        {/* Outer Ring */}
        <circle
          cx="120"
          cy="120"
          r="104"
          stroke={`url(#${goldMetallicId})`}
          strokeWidth="2.5"
          strokeOpacity="0.85"
        />

        {/* Beaded Pearls Ring */}
        <circle
          cx="120"
          cy="120"
          r="97"
          stroke={`url(#${goldMetallicId})`}
          strokeWidth="2"
          strokeDasharray="2 6.5"
          strokeLinecap="round"
        />

        {/* Fine Inner Ring */}
        <circle
          cx="120"
          cy="120"
          r="90"
          stroke={`url(#${goldDeepId})`}
          strokeWidth="1.2"
          strokeOpacity="0.75"
        />

        {/* Laurel Wreath Flanking Left & Right */}
        <g stroke={`url(#${goldMetallicId})`} fill={`url(#${goldMetallicId})`} strokeWidth="1" opacity="0.88">
          {/* Left Laurel Leaves */}
          <path d="M 46 130 C 44 118 48 106 54 96" fill="none" strokeWidth="1.5" />
          <path d="M 44 126 C 39 123 37 117 40 114 C 44 117 45 122 44 126 Z" />
          <path d="M 47 115 C 41 110 40 104 44 102 C 47 105 48 111 47 115 Z" />
          <path d="M 51 104 C 47 98 47 92 51 90 C 54 94 53 100 51 104 Z" />
          <path d="M 56 94 C 53 87 55 81 60 81 C 61 86 59 91 56 94 Z" />

          {/* Right Laurel Leaves */}
          <path d="M 194 130 C 196 118 192 106 186 96" fill="none" strokeWidth="1.5" />
          <path d="M 196 126 C 201 123 203 117 200 114 C 196 117 195 122 196 126 Z" />
          <path d="M 193 115 C 199 110 200 104 196 102 C 193 105 192 111 193 115 Z" />
          <path d="M 189 104 C 193 98 193 92 189 90 C 186 94 187 100 189 104 Z" />
          <path d="M 184 94 C 187 87 185 81 180 81 C 179 86 181 91 184 94 Z" />
        </g>

        {/* Top Royal Crown / Golden Jubilee Crest */}
        <g transform="translate(120, 48)">
          {/* Crown Base & Peaks */}
          <path
            d="M -16 6 L -20 -4 L -10 1 L 0 -10 L 10 1 L 20 -4 L 16 6 Z"
            fill={`url(#${goldMetallicId})`}
            stroke={`url(#${goldDeepId})`}
            strokeWidth="0.8"
          />
          {/* Jewels / Pearls on Peaks */}
          <circle cx="0" cy="-12" r="2.2" fill="#FFF8D6" stroke={`url(#${goldDeepId})`} strokeWidth="0.6" />
          <circle cx="-20" cy="-6" r="1.8" fill="#FFF8D6" stroke={`url(#${goldDeepId})`} strokeWidth="0.6" />
          <circle cx="20" cy="-6" r="1.8" fill="#FFF8D6" stroke={`url(#${goldDeepId})`} strokeWidth="0.6" />
          {/* 50 Years badge */}
          <text
            x="0"
            y="14"
            textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontSize="9"
            fontWeight="700"
            letterSpacing="0.18em"
            fill={`url(#${goldDeepId})`}
          >
            50 YEARS
          </text>
        </g>

        {/* ── Interlocking "SS" Initials with Pure Vector Shadow ── */}
        <g transform="translate(120, 126)">
          {/* First "S" Shadow */}
          <text
            x="-19"
            y="8.5"
            textAnchor="middle"
            fontFamily="'Playfair Display', 'Cormorant Garamond', 'Great Vibes', serif"
            fontSize="64"
            fontWeight="700"
            fontStyle="italic"
            fill="#6d4604"
            opacity="0.35"
          >
            S
          </text>
          {/* First "S" (Shashi) */}
          <text
            x="-20"
            y="7"
            textAnchor="middle"
            fontFamily="'Playfair Display', 'Cormorant Garamond', 'Great Vibes', serif"
            fontSize="64"
            fontWeight="700"
            fontStyle="italic"
            fill={`url(#${goldMetallicId})`}
            stroke={`url(#${goldDeepId})`}
            strokeWidth="1"
          >
            S
          </text>

          {/* Central Heart Connector */}
          <g transform="translate(0, -2)">
            <path
              d="M 0 5 C -1 1 -5 1 -5 -2 C -5 -5 -1 -6 0 -3 C 1 -6 5 -5 5 -2 C 5 1 1 1 0 5 Z"
              fill={`url(#${goldMetallicId})`}
              stroke={`url(#${goldDeepId})`}
              strokeWidth="0.5"
            />
          </g>

          {/* Second "S" Shadow */}
          <text
            x="21"
            y="18.5"
            textAnchor="middle"
            fontFamily="'Playfair Display', 'Cormorant Garamond', 'Great Vibes', serif"
            fontSize="64"
            fontWeight="700"
            fontStyle="italic"
            fill="#6d4604"
            opacity="0.35"
          >
            S
          </text>
          {/* Second "S" (Somnath) */}
          <text
            x="20"
            y="17"
            textAnchor="middle"
            fontFamily="'Playfair Display', 'Cormorant Garamond', 'Great Vibes', serif"
            fontSize="64"
            fontWeight="700"
            fontStyle="italic"
            fill={`url(#${goldMetallicId})`}
            stroke={`url(#${goldDeepId})`}
            strokeWidth="1"
          >
            S
          </text>
        </g>

        {/* Lower Banner / Text Ribbon */}
        <g transform="translate(120, 182)">
          {/* Decorative Divider */}
          <line x1="-48" y1="-12" x2="-14" y2="-12" stroke={`url(#${goldMetallicId})`} strokeWidth="1" strokeLinecap="round" />
          <circle cx="0" cy="-12" r="2" fill={`url(#${goldMetallicId})`} />
          <line x1="14" y1="-12" x2="48" y2="-12" stroke={`url(#${goldMetallicId})`} strokeWidth="1" strokeLinecap="round" />

          {/* Couple Names */}
          <text
            x="0"
            y="2"
            textAnchor="middle"
            fontFamily="'Lato', sans-serif"
            fontSize="8"
            fontWeight="700"
            letterSpacing="0.22em"
            fill={`url(#${goldDeepId})`}
          >
            SHASHI &amp; SOMNATH
          </text>

          {/* Subtitle */}
          <text
            x="0"
            y="13"
            textAnchor="middle"
            fontFamily="'Playfair Display', serif"
            fontSize="7"
            fontStyle="italic"
            letterSpacing="0.14em"
            fill={`url(#${goldMetallicId})`}
          >
            Golden Jubilee • 1976 - 2026
          </text>
        </g>

        {/* Subtle Star Accents */}
        <text x="120" y="222" textAnchor="middle" fontSize="8" fill={`url(#${goldMetallicId})`}>✦</text>
        <text x="120" y="24" textAnchor="middle" fontSize="8" fill={`url(#${goldMetallicId})`}>✦</text>
      </svg>
    </div>
  );
}
