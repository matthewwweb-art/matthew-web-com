import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function FreeGameHubProjectLayout({ children }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://matthew-web.com",
          },
          {
            name: "Free Game Hub Project",
            url: "https://matthew-web.com/free-game-hub-project",
          },
        ]}
      />

      {children}
    </>
  );
}