import React from "react";
import "./notfound.scss";
import Link from "next/link";
import logo from "../../public/assets/logo2.svg"
import Image from "next/image";
function page() {
  return (
    <>
      <div className="parent fourOfour-parent bg-img">
        <div className="fourOfour-cont">
          <div className="contain">
            <span className="number">404</span>
            <p className="text">Page not found!</p>
          </div>
          <Link href="/" className="button cta-btn">
            <p>Back To Home</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default page;
