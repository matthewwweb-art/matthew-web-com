import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import MonetagInPagePush from "@/components/MonetagInPagePush";

export default function BlogLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Blog",
            url: "https://matthew-web.com/blog",
          },
        ]}
      />

      {/*
        MONETAG SERVER BOOTSTRAP:
        Keep Monetag's official zone bootstrap in the initial /blog HTML
        so its installation verifier can detect the integration.
        MonetagInPagePush remains below as the client-navigation fallback.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(s){s.dataset.zone='11798258',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))",
        }}
      />

      <MonetagInPagePush />

      {children}
    </>
  );
}