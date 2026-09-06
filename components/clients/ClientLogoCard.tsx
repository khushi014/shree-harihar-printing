"use client";

import React, { useState } from "react";
import { ClientItem } from "../../data/clientsData";

interface ClientLogoCardProps {
  client: ClientItem;
  compact?: boolean;
}

export default function ClientLogoCard({ client, compact = false }: ClientLogoCardProps) {
  const [imgError, setImgError] = useState(false);

  const hasValidLogo = Boolean(client.logo && !imgError);

  return (
    <div
      title={client.name}
      className={`group relative bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden select-none flex items-center justify-center cursor-default ${
        compact
          ? "w-[170px] sm:w-[200px] h-[80px] sm:h-[88px] p-3.5 shrink-0 mx-2"
          : "w-full h-[88px] sm:h-[98px] p-4"
      }`}
    >
      {/* Subtle Top Accent on Hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-dark transition-all duration-300" />

      {hasValidLogo ? (
        <img
          src={client.logo}
          alt={client.name}
          onError={() => setImgError(true)}
          className="max-h-full max-w-full object-contain transition-all duration-300 transform group-hover:scale-105"
        />
      ) : (
        <span className="font-heading font-bold text-xs sm:text-sm text-slate-800 tracking-wide text-center group-hover:text-primary transition-colors line-clamp-2 px-2">
          {client.name}
        </span>
      )}
    </div>
  );
}
