"use client"
import React from "react";
import "./generaltrading.scss";
import trading from "../../../../public/assets/trading/trading.webp";
import TwoCol from "@/app/components/twocol/TwoCol";
import eng from "../../../../public/assets/products/generaltrading/engineering.webp";
import chemical from "../../../../public/assets/products/generaltrading/chemical.webp";
import cotton from "../../../../public/assets/products/generaltrading/cotton.webp";
import hardware from "../../../../public/assets/products/generaltrading/hardware.webp";
import steel from "../../../../public/assets/products/generaltrading/steel.webp";
import Head from "next/head";
import { Helmet } from "react-helmet";
function page() {
  // --------------Trading Solutions-------------
  // const tradingData = [

  // ];

  const data = [
    {
      title: "General Trading ",
      content:
        "At Onkar World, our General Trading services span a diverse range of products and industries, enabling us to meet the varied needs of our global clientele. We specialize in sourcing, procuring, and delivering high-quality goods from trusted suppliers, ensuring that each product adheres to the strictest standards of quality and reliability. Whether it's consumer goods, industrial products, or specialized materials, our extensive network and deep market insights allow us to provide tailored solutions that drive value and efficiency in every transaction. With a focus on building long-term partnerships, we offer comprehensive support from product selection to final delivery, making global trade seamless and successful for our clients.",
      img: trading,
    },
    {
      title: "Engineering and Manufacturing Products",
      content:
        "Onkar World delivers a comprehensive range of precision-engineered products and solutions catering to industries such as automotive, aerospace, and heavy machinery. The product range includes components like gears, bearings, valves, pumps, and customised machinery parts. Onkar ensures high standards in manufacturing processes, focusing on quality, innovation, and performance to meet diverse industrial needs.",
      img: eng,
    },
    {
      title: "Technology and Hardware Products",
      content:
        "Onkar offers advanced technology solutions and hardware products that empower businesses to achieve digital transformation. This category includes  networking devices, computing hardware, data storage solutions, and automation equipment. Onkar's hardware products are designed to enhance operational efficiency and are compatible with the latest technological advancements.",
      img: hardware,
    },
    {
      title: "Steel",
      content:
        "Onkar supplies various types of steel products essential for construction, infrastructure, and manufacturing projects. These include carbon steel, alloy steel, stainless steel, and galvanised steel. Onkar’s steel products are known for their strength, durability, and adaptability, making them ideal for use in industries like construction, automotive, and heavy machinery.",
      img: steel,
    },
    {
      title: "Chemicals",
      content:
        "Onkar offers a diverse portfolio of industrial chemicals used in agriculture, pharmaceuticals, manufacturing, and chemical processing. The chemical range includes fertilisers, solvents, acids, alkalis, and specialty chemicals that play a crucial role in production processes. Onkar focuses on providing high-quality and safe chemicals, adhering to global standards.",
      img: chemical,
    },
    {
      title: "Cotton",
      content:
        "Onkar sources and supplies premium-grade cotton, serving textile industries with a reliable supply of raw cotton, cotton yarn, and cotton fabric. The cotton provided by Onkar is available in different varieties such as organic cotton, long-staple cotton, and conventional cotton, ensuring high quality for clothing, home textiles, and industrial applications. Sustainability and ethical sourcing are central to Onkar’s cotton supply chain.",
      img: cotton,
    },
  ];
  return (
    <>
     <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>General Trading - Onkar World | Global Trading Excellence</title>
        <meta
          name="description"
          content="Onkar World is a trusted name in general trading, offering a wide range of products across different industries. From procurement to logistics, we ensure seamless trading solutions to meet international market demands."
        />
        <meta
          name="keywords"
          content="Onkar World, general trading, global trading, international trading, product sourcing, logistics, trade solutions, procurement, global markets, trade industry"
        />
      </Helmet>
      </HelmetProvider>

      {/* // ----------------------------General Trading-------------------- */}

      <div className="trading-parent-page trading">
        <h3 className="section-title-prod title2">
          Comprehensive Global <div className="gap"></div>
          <span>Trading Solutions</span> <span className="scection-line"></span>
          <span className="underline"></span>
        </h3>

        {/* <div className="trading-container container">
          <div className="trading-heading-section">
            
            <p className="trading-p desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corrupti provident, blanditiis amet sit harum nulla nisi id perferendis iure?
            </p>
          </div>
        </div> */}
        {/* <div className="trading-container-main">
          {tradingData.map((item, index) => {
            const backgroundColor = index % 2 === 0 ? "#000000" : "#808080";
            return (
              <TwoCol
                key={index}
                title={item.title}
                content={item.content}
                background={item.img}
                backgroundColor={backgroundColor}
                direction="row-reverse !important"
              />
            );
          })}
        </div> */}
        <div className="trading-products">
          {data.map((item, index) => {
            return (
              <TwoCol
                key={index}
                title={item.title}
                content={item.content}
                background={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default page;
