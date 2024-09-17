import { Link } from "react-router-dom";
import cua_logo from "../assets/cua_logo.png";
import isa_logo from "../assets/isa_logo.png";

const Footer = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Events", to: "/events" },
    { label: "Gallery", to: "/gallery" },
    { label: "Resources", to: "/resources" },
    { label: "Our Team", to: "/ourteam" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="bg-stone-50 p-4 max-w-screen-xl mx-auto flex flex-col">
      <div className="border-t-2 border-gray-400 ml-10 mr-10 mb-4"></div>
      <ul className="font-light text-sm flex flex-col mx-auto p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-stone-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-outfit">
        {navItems.map((item, i) => (
          <li key={i}>
            <Link className="relative w-fit block" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="m-3 p-3 flex flex-row mx-auto justify-center">
        <img className="w-52 m-auto mr-14" src={cua_logo} />
        <img className="w-44 m-auto" src={isa_logo} />
      </div>
      <div className="mx-auto">
        <span className="font-poppins text-xs font-light">
          ┬® 2024 | Indian Student Association @ CUA |{" "}
          <a href="https://www.campusgroups.com/terms?view=privacy">
            Privacy Policy
          </a>{" "}
          | Developed by{" "}
          <a href="https://www.linkedin.com/in/shaik-abdul-khadar-8001b81a4/">
            Shaik Abdul Khadar
          </a>
        </span>{" "}
      </div>
    </div>
  );
};

export default Footer;
