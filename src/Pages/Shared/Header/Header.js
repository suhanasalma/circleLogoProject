import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menus = (
    <>
      <Link>
        <li>Features</li>
      </Link>
      <Link>
        <li>Screenshots</li>
      </Link>
      <Link>
        <li>Partners</li>
      </Link>
      <Link>
        <li>About</li>
      </Link>
    </>
  );
  return (
    <section className="mt-5">
      <div className="flex justify-between items-center mx-20 p-5 gap-5">
         <div className="border-black border-4 w-8 h-8 rounded-full logo"></div>
       
        <ul className="flex justify-between items-center gap-5 text-darkgray">{menus}</ul>
      </div>
    </section>
  );
};

export default Header;
