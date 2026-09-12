export function safeExternalUrl(value) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  // Reject control characters.
  if (/[\u0000-\u001F\u007F]/.test(trimmed)) {
    return null;
  }

  let candidate = trimmed;

  // Allow normal bare domains such as example.com.
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(candidate)) {
    if (candidate.startsWith("//")) {
      candidate = `https:${candidate}`;
    } else {
      candidate = `https://${candidate}`;
    }
  }

  try {
    const url = new URL(candidate);

    // External CRM links may only use normal web protocols.
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    // Reject URLs containing embedded credentials.
    if (url.username || url.password) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}