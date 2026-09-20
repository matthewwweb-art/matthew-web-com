"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MONETAG_SESSION_KEY =
  "mw-monetag-blog-active";

export default function MonetagRouteIsolation() {
  const pathname = usePathname();

  /*
    Watch every Next.js route change.

    When /blog becomes active, remember that Monetag has
    been allowed to start.

    When the visitor leaves /blog, force ONE full reload
    of the destination page. That completely destroys
    Monetag's injected DOM, timers, scripts, and runtime.
  */
  useEffect(() => {
    if (pathname === "/blog") {
      sessionStorage.setItem(
        MONETAG_SESSION_KEY,
        "1"
      );

      return;
    }

    const monetagWasActive =
      sessionStorage.getItem(
        MONETAG_SESSION_KEY
      ) === "1";

    if (!monetagWasActive) {
      return;
    }

    /*
      Clear first so the destination reload does not loop.
    */
    sessionStorage.removeItem(
      MONETAG_SESSION_KEY
    );

    window.location.reload();
  }, [pathname]);

  /*
    Back/Forward cache can sometimes restore a previous
    document including injected third-party DOM.

    If that happens on a non-blog page after Monetag was
    active, force a fresh document.
  */
  useEffect(() => {
    function handlePageShow(event) {
      if (!event.persisted) {
        return;
      }

      if (
        window.location.pathname ===
        "/blog"
      ) {
        return;
      }

      const monetagWasActive =
        sessionStorage.getItem(
          MONETAG_SESSION_KEY
        ) === "1";

      if (!monetagWasActive) {
        return;
      }

      sessionStorage.removeItem(
        MONETAG_SESSION_KEY
      );

      window.location.reload();
    }

    window.addEventListener(
      "pageshow",
      handlePageShow
    );

    return () => {
      window.removeEventListener(
        "pageshow",
        handlePageShow
      );
    };
  }, []);

  return null;
}