"use client";

import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getintouch/GetInTouch";
import HomeHeader from "./components/homeheader/HomeHeader";
import "./globals.scss";

export default function RootLayout({ children }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        left: e.clientX + 10,
        top: e.clientY + 10,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const target = e.target;
      gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });

      if (target.classList.contains("cursor-dark")) {
        cursorRef.current.style.backgroundImage = "url(/assets/Icon/Arrow_1.png)";
      } else if (target.classList.contains("hand-dark")) {
        cursorRef.current.style.backgroundImage = "url(/assets/Icon/Hand_1.png)";
      } else if (target.classList.contains("hand-light")) {
        cursorRef.current.style.backgroundImage = "url(/assets/Icon/Hand_2.png)";
      } else if (target.tagName === "A") {
        cursorRef.current.style.backgroundImage = "url(/assets/Icon/Hand_2.png)";
      } else {
        cursorRef.current.style.backgroundImage = "url(/assets/Icon/Arrow_2.png)";
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 });
      cursorRef.current.style.backgroundImage = "url(/assets/Icon/Arrow_1.png)";
    };

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const pathname = usePathname();
  const noLayoutPaths = ["/404"];
  const shouldHideLayout = pathname && noLayoutPaths.includes(pathname);

  return (
    <html lang="en">
      <body>
        <div className="custom-cursor" ref={cursorRef}></div>
        {!shouldHideLayout && pathname !== "/" && <HomeHeader />}
        {children}
        <GetInTouch />
        <Footer />

        <style jsx global>{`
          body,
          * {
            cursor: none !important;
          }
          .custom-cursor {
            width: 24px;
            height: 24px;
            background-image: url("/assets/Icon/Arrow_1.png");
            background-size: cover;
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
          }
          @media (max-width: 700px) {
            .custom-cursor {
              display: none !important;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
