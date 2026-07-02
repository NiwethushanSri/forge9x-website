"use client";

import { useState } from "react";

export default function TeamPhoto({ src, alt, initials, color }: { src: string; alt: string; initials: string; color: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: color }}>
        <span style={{ fontSize: "5rem", fontWeight: 900, color: "white" }}>{initials}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top"
      onError={() => setError(true)}
    />
  );
}
