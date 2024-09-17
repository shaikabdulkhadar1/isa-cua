import { Link } from "react-router-dom";
import logo from "../assets/isa_logo.png";

const Navbar = () => {
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
    <nav className="bg-stone-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 backdrop-blur">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8 m-1" alt="ISA Logo" />
          <span className="self-center font-bold whitespace-nowrap font-outfit">
            Indian Students' Association
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden items-center w-full md:block md:w-auto bg-stone-50"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-stone-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-outfit">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
