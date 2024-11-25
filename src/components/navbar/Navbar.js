import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      </div>

      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        <div
          className={`fixed inset-0 bg-gray-900 transition-transform duration-500 ${
            showMenu ? "translate-y-0" : "-translate-y-full"
          } flex flex-col justify-center items-center`}
        >
          <div className="flex flex-col gap-8 p-4 relative w-full max-w-md">
            {/* Logo */}
            <div className="flex justify-center">
              <img className="w-32" src={logo} alt="logo" />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-4 text-center">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-base uppercase font-titleFont mb-4 text-center">
                Find me in
              </h2>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/${+23059182520}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/kavish.mk?igsh=bHdyeG51dmt3aHpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/kavish-mojhoa-b8a05023b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Close Button */}
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
