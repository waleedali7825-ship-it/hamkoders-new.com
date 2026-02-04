"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TawkChat() {
  const pathname = usePathname();

  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    function onTawkReady(fn) {
      if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
        fn();
      } else {
        const prev = window.Tawk_API.onLoad;
        window.Tawk_API.onLoad = function () {
          if (typeof prev === "function") prev();
          fn();
        };
      }
    }

    const triggers = document.querySelectorAll(".open-chat");

    const handleClick = (e) => {
      e.preventDefault();
      onTawkReady(() => window.Tawk_API.maximize());
    };

    triggers.forEach((trigger) =>
      trigger.addEventListener("click", handleClick)
    );

    return () => {
      triggers.forEach((trigger) =>
        trigger.removeEventListener("click", handleClick)
      );
    };
  }, [pathname]);

  return (
    <>
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6823d04936f29c190d212904/1ir5ub8ia';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `,
        }}
      />
    </>
  );
}
