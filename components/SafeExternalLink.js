"use client";

import { safeExternalUrl } from "@/lib/safeExternalUrl";

export default function SafeExternalLink({
  href,
  children,
  ...props
}) {
  const safeHref = safeExternalUrl(href);

  if (!safeHref) {
    return null;
  }

  return (
    <a
      {...props}
      href={safeHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}