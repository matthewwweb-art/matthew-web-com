"use client";

import { useEffect } from "react";

export default function MonetagInPagePush() {
  useEffect(() => {
    if (
      window.location.pathname !== "/blog"
    ) {
      return;
    }

    const existingScript =
      document.querySelector(
        'script[data-zone="11798258"]'
      );

    if (existingScript) {
      return;
    }

    const script =
      document.createElement("script");

    script.dataset.zone = "11798258";
    script.src =
      "https://nap5k.com/tag.min.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
}