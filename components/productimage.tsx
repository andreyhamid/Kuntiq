"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImage({ src, name }: { src: string; name: string }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  return (
    <div className="product-image">
      {failedSrc === src ? (
        <div className="image-placeholder" role="img" aria-label={`Fotografía de ${name} no disponible`}>
          <span aria-hidden="true">K</span>
          <strong>{name}</strong>
          <small>Fotografía próximamente</small>
        </div>
      ) : (
        <Image src={src} alt={name} fill sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 560px" style={{ objectFit: "contain" }} onError={() => setFailedSrc(src)} />
      )}
    </div>
  );
}
