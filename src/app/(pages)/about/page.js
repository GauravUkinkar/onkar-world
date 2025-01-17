"use client";
import Experties from "@/app/components/experticeData/Experties";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import ServiceAbout from "../servicesabout/ServiceAbout";
import "./about.scss";
// import serviceAbout from '../services/p';

function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            left,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );
          gsap.fromTo(
            right,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.5 }
          );
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - Onkar World | Global Trade Excellence</title>
        <meta name="description" content="Onkar World, based in Dubai, is committed to providing top-notch global trading services by sourcing high-quality agricultural products from trusted suppliers across Asia and Africa. Learn more about our mission and expertise." />
        <meta name="keywords" content="Onkar World, about Onkar World, global trade, Dubai trading company, agricultural sourcing, sustainable trade, bulk procurement, international trade solutions" />
      </Helmet>
      <div className="parent about-parent" ref={sectionRef}>
        <div className="container about-cont">
          <div className="left" ref={leftRef}>
            <div className="main-box">
              <div className="textbox">
                <span style={{ color: "white" }}>Our Vision</span>
                <h3 className="title3" style={{ color: "white" }}>
                  Global Trade, Local Impact
                </h3>
              </div>
              <div className="box1 bg-cover"></div>
              <div className="box2 bg-cover"></div>
              <div className="box3 bg-cover"></div>
            </div>
          </div>
          <div className="right" ref={rightRef}>
            <div className="text-section">
              <h2 className=" title2">
                Premier Choice for <div className="gap"></div>
                <span> Global Trade</span>
                <span className="underline"></span>
              </h2>
              <p className="about-p">
                Onkar World, a Dubai-based global trading powerhouse, is
                dedicated to connecting rich agricultural landscapes with
                markets worldwide. With a deep-rooted commitment to quality,
                sustainability, and customer satisfaction, we have established
                ourselves as a leading player in the international trade
                industry. We strive to build long-term partnerships with
                producers, customers, and communities, fostering economic growth
                and development.
              </p>
            </div>
            <Link href="/contact" className="cta-btn">
              <p>Know More</p>
            </Link>
          </div>
        </div>
      </div>


      {/* Sister Company Section */}
      {/* <div className="sis-company-parent parent bg-cover ">
        <div className="sis-overlay"></div>
        <div className="sis-company-container container">
          <h3 className="siscompany-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p className="siscompany-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae esse voluptatum odio animi quibusdam temporibus itaque vel ratione fuga.
          </p>
          <div className="cta-div">
          <Link href="https://onkarsugars.com/" target="_blank" className="cta-btn">
            <p>Onkar Sugars</p>
          </Link>
          </div>
        </div>
      </div> */}





      {/* expertice  */}
      <Experties />
      <div className="service-about-parent">
        <ServiceAbout />
      </div>
    </>
  );
}

export default About;
