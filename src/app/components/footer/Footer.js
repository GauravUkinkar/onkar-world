import React from "react";
import "./footer.scss";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import img from "../../../../public/assets/logo/logo2.png"
function Footer() {
  return (
    <div className="footer-parent parent">
      <div className="footer-container container">
        <div className="footer-box">
          <div className=" f-col f-col1">
            <Link href="/" className="logo-box-footer bg-cover">
              <image src={img.src} alt="" className="footer-logo"/>
            </Link>
            <h3 className="title3">About Us</h3>
            <p className="left-align">
            At Onkar World, our commitment to both quality and availability ensures that we deliver exactly what you require, every time.
            </p>
          </div>
          <div className=" f-col f-col2">
            <h3 className="title3">Links</h3>
            <div className="pages-link hand-light" >
              <Link href="/" className="hand-light"><p className="hand-light">Home</p></Link>
              <Link href="/about" className="hand-light">
                <p className="hand-light">About</p>
              </Link>
              <Link href="/agroproducts" className="hand-light"><p className="hand-light">Agro Products</p></Link>
              <Link href="/generaltrading" className="hand-light"><p className="hand-light">General Trading</p></Link>
              <Link href="/founders" className="hand-light"><p className="hand-light">Founders</p></Link>
              <Link href="/contact" className="hand-light"><p className="hand-light">Contact</p></Link>
            </div>
          </div>

          <div className=" f-col f-col3">
            <h3 className="title3">Legals</h3>
            <div className="pages-link">
              <Link href="/privacypolicy" className="hand-light"><p className="hand-light">Privacy & Policy</p></Link>
              <Link href="/termsconditions" className="hand-light"><p className="hand-light">Terms & Conditions</p></Link>
            </div>
          </div>

          <div className=" f-col f-col4">
            <a className="icon-box" href="tel:+971 50 806 0418">
              <span className="f-icon hand-light">
                <LuPhoneCall className="hand-light" />
              </span>
              <p className="hand-light">+971 50 806 0418</p>
            </a>
            <a className="icon-box  " href="mailto:contact@onkarworld.com">
              <span className="f-icon hand-light">
                <LuMail className="hand-light" />
              </span>
              <p className="hand-light">contact@onkarworld.com</p>
            </a>
            <a className="icon-box icon-location">
              <span className="f-icon hand-light">
                <IoLocationOutline className="hand-light" />
              </span>
              <p>Office no. 1304 | Building no. LB19 | JAZFA View 18-19, Jebel Ali Free Zone, PO Box 262746 Downtown Jabel Ali - Dubai - United Arab Emirates
              </p>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright Onkar 2024. All right reserved.</p>
          <a href="https://diwise.in/">Designed by <span className="c-name hand-dark">DIwise</span></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
