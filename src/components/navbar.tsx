import Link from "next/link";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import cn from "classnames";

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const NAVLINKS = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "All Articles",
      path: "/posts",
    },
  ];

  return (
    <nav className="bg-white shadow-sm mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center text-4xl font-bold">
          Blog
        </Link>
        <button
          type="button"
          className="md:hidden block"
          onClick={() => setShowSideMenu(!showSideMenu)}
        >
          <IoMdMenu className="text-2xl" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex space-x-8 font-medium mt-4 bg-white">
            {NAVLINKS.map((each) => (
              <li key={each.path}>
                <Link href={each.path} className="hover:text-blue-500">
                  {each.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside
        className={cn(
          "fixed top-0  w-full h-full overflow-y-auto md:max-w-[300px] z-20 transition-all bg-white px-3 py-4",
          {
            "left-0": showSideMenu,
            "left-[-100%]": !showSideMenu,
          }
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-4xl font-bold">
            Blog
          </Link>
          <button
            type="button"
            className="md:hidden block"
            onClick={() => setShowSideMenu(false)}
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <hr className="mt-6 mb-5" />
        <ul className="font-medium mt-4 ">
          {NAVLINKS.map((each) => (
            <li className="mb-5" onClick={() => setShowSideMenu(false)} key={each.path}>
              <Link href={each.path} className="hover:text-blue-500">
                {each.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
