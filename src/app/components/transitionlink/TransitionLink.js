import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TransitionLink = ({ children, href, onClick,...props }) => {
  const router = useRouter();
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleTransition = async (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(250);
    router.push(href);
    await sleep(250);
    body?.classList.remove("page-transition");
  };
  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export default TransitionLink;
