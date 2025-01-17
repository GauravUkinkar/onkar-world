import Head from "next/head";
import Faq from "./components/faqcomponent/Faq";
import HomeHeader from "./components/homeheader/HomeHeader";
import HomeSlider from "./components/homeslider/HomeSlider";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import WhyChoose from "./components/whychoose/WhyChoose";


export const metadata = {
  title: "Onkar World - Premier Global Trading Solutions",
  description:
    "Onkar World, a global leader in trade, offers sustainable and reliable procurement solutions for agricultural and raw materials across Asia and Africa. Discover our tailored business solutions today.",
  keywords:
    "Onkar World, global trading, agricultural trade, bulk procurement, international trade, Asia, Africa, sustainable trade solutions, quality raw materials",
  viewport: "width=device-width, initial-scale=1",
  icon: "/favicon.ico",
};
export default function Home() {
  return (
    <>


      {/* Your Components */}
    
          <HomeSlider />
          <HomeHeader />
          <Services />
          <WhyChoose />
          <Faq />
          <Testimonial />
     
    </>
  );
}
