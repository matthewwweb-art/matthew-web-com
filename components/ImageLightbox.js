"use client";

import { useEffect, useState } from "react";

export default function ImageLightbox() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    function handleClick(event) {
      const img = event.target.closest("img");

      if (!img) return;

      const shouldIgnore =
        img.classList.contains("mw-logo") ||
        img.classList.contains("site-logo") ||
        img.classList.contains("blog-article-hero") ||
        img.classList.contains("no-lightbox") ||
        img.closest("header") ||
        img.closest("footer") ||
        img.closest(".mw-header") ||
        img.closest(".site-footer");

      if (shouldIgnore) return;

      setImage({
        src: img.currentSrc || img.src,
        alt: img.alt || "Expanded website image",
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!image) return null;

  return (
    <div className="image-lightbox" onClick={() => setImage(null)}>
      <button
        type="button"
        className="image-lightbox-close"
        onClick={() => setImage(null)}
        aria-label="Close image"
      >
        ×
      </button>

      <img
        src={image.src}
        alt={image.alt}
        className="image-lightbox-img"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}