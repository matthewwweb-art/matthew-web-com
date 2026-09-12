export default function BreadcrumbSchema({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const safeItems = items
    .filter(
      (item) =>
        item &&
        typeof item.name === "string" &&
        typeof item.url === "string"
    )
    .map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name.trim(),
      item: item.url.trim(),
    }));

  if (safeItems.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: safeItems,
  };

  /*
    Escape HTML-significant characters before inserting JSON
    into the script element.

    This prevents values such as </script> from terminating
    the JSON-LD script element if untrusted data is ever passed
    into this component in the future.
  */
  const jsonLd = JSON.stringify(schema)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd,
      }}
    />
  );
}