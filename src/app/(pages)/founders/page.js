"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.scss";
import img11 from "../../../../public/assets/founders/prajakta.webp";
import img12 from "../../../../public/assets/founders/rajveer.webp";
import img13 from "../../../../public/assets/founders/baburao.webp";
import img14 from "../../../../public/assets/founders/rekhatai.webp";
import img5 from "../../../../public/assets/founders/omar.png";

import Founderscard from "@/app/components/founderCard/Founderscard";
import Head from "next/head";
import { Helmet, HelmetProvider } from "react-helmet-async";  

function Founders() {
  const foundersRef = useRef([]);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  const founderData = [
    {
      backgroundimg: img13,
      founderName: "Baburao Botrepatil",
      designation: "Chairman",
      founderText:
        "His decades of experience have been crucial in shaping the company's strategic direction and driving growth.",
    },
    {
      backgroundimg: img14,
      founderName: "Rekhatai Botrepatil",
      designation: "Director",
      founderText:
        "She  provides invaluable support and guidance, ensuring the company’s commitment to excellence and integrity.",
    },
    {
      backgroundimg: img11,
      founderName: "Prajakta Marwaha",
      designation: "Managing Director",
      founderText:
        "A strategic visionary with profound business acumen, she drives the company's mission with her extensive experience.",
    },
    {
      backgroundimg: img12,
      founderName: "Rajveer Patil",
      designation: "Director",
      founderText:
        "His dynamic leadership and deep market knowledge are key to building excellence and driving growth at Onkar World.",
    },
    // {
    //   backgroundimg: img5,
    //   founderName: "Omar Mugal",
    //   designation: "Company Secretary",
    //        founderText:
    //     "A highly intelligent professional known for meticulous attention to detail, ensuring exceptional governance standards.",
    // },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate the heading
          gsap.fromTo(
            heading,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );

          // Animate the paragraph with a delay
          gsap.fromTo(
            paragraph,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.3 }
          );

          // Animate the founder cards with stagger
          gsap.fromTo(
            foundersRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power1.out",
              stagger: 0.2, // Stagger each card animation by 0.2 seconds
              delay: 0.6, // Additional delay before the cards start animating
            }
          );

          // Unobserve once animated
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>

<HelmetProvider>
       <Helmet>
        <meta charSet="utf-8" />
        <title>Founders - Onkar World | Visionary Leadership in Global Trade</title>
        <meta name="description" content="Meet the visionary founder of Onkar World, leading the way in global trade. Our founder's deep commitment to quality, sustainability, and customer success has established us as a top global trading company." />
        <meta name="keywords" content="Onkar World founder, global trade leadership, visionary leadership, Onkar World leadership, Dubai trade company, international trade expertise, sustainable trade, quality procurement" />
      </Helmet>
      </HelmetProvider>

      <div className="founders-parent parent" ref={sectionRef}>
        <div className="founders-container container">
          <div className="founders-heading-section">
            <h3 className="section-title title2" ref={headingRef}>
              Our <div className="gap"></div>
              <span>Founders</span> <span className="scection-line"></span>
              <span className="underline"></span>
            </h3>
            <p className="founders-p desc" ref={paragraphRef}>
              At the heart of Onkar World Trading Company are our visionary
              founders. With their combined expertise in business strategy and
              market management, they lead with a commitment to excellence.
            </p>
          </div>
          <div className="founders-card-box">
            {founderData.map((data, key) => (
              <div
                className="founder-card-wrapper"
                key={key}
                ref={(el) => (foundersRef.current[key] = el)}
              >
                <Founderscard
                  index={key}
                  background={data.backgroundimg}
                  founderName={data.founderName}
                  designation={data.designation}
                  founderText={data.founderText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Founders;
