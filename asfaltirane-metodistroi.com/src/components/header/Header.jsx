import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { navItems, menuIcon } from "../../constants";
import { useState } from "react";

const NAV_ITEM =
  "py-4 px-6 inline-block rounded hover:text-white hover:bg-yellow-500 focus:text-white focus:bg-yellow-500 focus:outline-none transition-colors";
const MOBILE_CONTAINER =
  "lg:hidden fixed right-0 h-screen px-5 pt-5 bg-white top-0 shadow-lg flex flex-col text-yellow-500 font-bold text-lg transition-all";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full shadow-lg">
      <div className="container mx-auto">
        <div className="py-3 flex w-full h-full justify-between items-center pr-5 pl-3">
          <a href="/" className="w-full max-w-[200px]">
            <img src={logo} alt="Асфалтиране Методи Строй" />
          </a>
          <nav>
            <ul className="lg:flex hidden items-center text-yellow-500 font-bold text-lg">
              {navItems.map((item, index) => (
                <li className="relative" key={index}>
                  <Link className={NAV_ITEM} to={item.link}>
                    {item.name}
                    {item.children && (
                      <ul className="list-children">
                        {item.children.map((child, index) => (
                          <li key={index}>
                            <Link
                              className="list-children-item"
                              to={child.link}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="py-4 px-6 text-white bg-yellow-500 rounded hover:bg-yellow-600 transition-colors"
                  to={"/contacts"}
                >
                  ЗАПИТВАНЕ СЕГА
                </Link>
              </li>
            </ul>
            <ul
              className={`${
                nav ? "translate-x-0" : "translate-x-full"
              } ${MOBILE_CONTAINER}`}
            >
              {navItems.map((item, index) => (
                <li key={index} className="w-full">
                  <Link
                    className="px-5 py-4 inline-block rounded w-full hover:text-white hover:bg-yellow-500 transition-colors"
                    to={item.link}
                    onClick={handleClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-5 w-full">
                <Link
                  className="py-4 px-6 text-white bg-yellow-500 rounded hover:bg-yellow-600 transition-colors"
                  to={"/contacts"}
                  onClick={handleClick}
                >
                  ЗАПИТВАНЕ СЕГА
                </Link>
              </li>
            </ul>
            <div
              className="lg:hidden block cursor-pointer"
              onClick={handleClick}
              dangerouslySetInnerHTML={{ __html: menuIcon }}
            ></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
