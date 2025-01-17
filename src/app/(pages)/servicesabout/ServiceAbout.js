import React from "react";
import "./style.scss";
import TwoCol from "@/app/components/twocol/TwoCol";
import img1 from "../../../../public/assets/services/img1.webp";
import img22 from '../../../../public/assets/services/img22.jpg'
import img2 from "../../../../public/assets/services/img2.webp";
import img3 from "../../../../public/assets/services/img3.webp";
const ServiceAbout = () => {
  const data = [
    {
      title: "Reliable Procurement of Quality Raw Materials ",
      content:
        "At Onkar World, we take pride in sourcing only the highest quality raw materials from reputable and trusted suppliers. Our focus on maintaining strict quality control ensures that every product we deliver meets international standards, giving our clients access to the best resources available. By prioritising quality, we provide materials that align perfectly with your business needs.",
      img: img1,
    },
    {
      title: "Bulk Availability and Largest Stock in Asia and Africa ",
      content:
        "Onkar World holds the largest stock of essential commodities across Asia and Africa, allowing us to meet the demands of a global market. Our vast supply network ensures bulk availability and timely fulfilment of even the largest orders, making us a reliable partner for businesses worldwide. We are dedicated to consistency, ensuring that our clients never face shortages or delays.",
      img: img22,
    },
    {
      title: "Tailored Solutions for Your Business Needs ",
      content:
        "We understand that every business has unique requirements, which is why we offer customised solutions to meet a variety of demands. Whether you're in need of specific raw materials or bulk quantities, Onkar World is equipped to provide exactly what you need. Our commitment to both quality and quantity ensures that your procurement process is seamless, efficient, and tailored to your success.",
      img: img3,
    },
  ];

  return (
    <div className="service-parent-main">
      <div className="service-container-main">
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
  );
};

export default ServiceAbout;
