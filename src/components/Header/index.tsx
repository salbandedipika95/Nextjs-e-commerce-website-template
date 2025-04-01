"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRef } from "react";

import CustomSelect from "./CustomSelect";
import { menuData } from "./menuData";
import { topMenuData } from "./menuData";
import { subTopMenuData } from "./menuData";
import Dropdown from "./Dropdown";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import Image from "next/image";

import { usePathname } from "next/navigation";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { openCartModal } = useCartModalContext();
  const sidebarRef = useRef(null);
  const dropdownRef = useRef(null);

  const product = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleOpenCartModal = () => {
    openCartModal();
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  const options = [
    { label: "All Categories", value: "0" },
    { label: "Desktop", value: "1" },
    { label: "Laptop", value: "2" },
    { label: "Monitor", value: "3" },
    { label: "Phone", value: "4" },
    { label: "Watch", value: "5" },
    { label: "Mouse", value: "6" },
    { label: "Tablet", value: "7" },
  ];

  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();

  const handleClickOutside = (event) => {
    if (
      (sidebarRef.current && sidebarRef.current.contains(event.target)) ||
      (dropdownRef.current && dropdownRef.current.contains(event.target))
    ) {
      return; // Prevent closing when clicking inside sidebar or dropdown
    }

    setNavigationOpen(false); // Close sidebar when clicking outside
  };
  const handleMenuItemClick = () => {
    setNavigationOpen(false); // Close sidebar on menu item click
  };

  return (
    <header
      className={`fixed left-0 top-0 w-full z-[9999] bg-white transition-all ease-in-out duration-300 ${
        stickyMenu && "shadow"
      }`}
    >
      <div className="bg-[#E53E3E]">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="flex items-center justify-between">
            {/* Navigation for small screens */}
            <div
              className={`w-[288px] absolute right-4 top-full xl:static xl:w-auto h-0 xl:h-auto invisible xl:visible xl:flex items-center justify-between ${
                navigationOpen &&
                `!visible bg-white shadow-lg border border-gray-3 !h-auto max-h-[100px] overflow-y-scroll rounded-md p-3`
              }`}
            >
              <nav>
                <ul className="flex xl:items-center flex-col xl:flex-row gap-5 xl:gap-6">
                  {topMenuData.map((menuItem, i) => (
                    <li
                      key={i}
                      className="group relative before:w-0 before:h-[3px] before:bg-[#E53E3E] before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full "
                    >
                      <Link
                        href={menuItem.path}
                        className={`hover:text-blue capitalize text-custom-sm font-medium lg:text-white text-dark flex ${
                          stickyMenu ? "xl:py-4" : "xl:py-3"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="block mx-auto">
              <span className="text-white  text-custom-sm">
                Free shipping for all orders of 150$
              </span>
            </div>

            {/* Submenu for small screens */}
            <div
              ref={sidebarRef}
              className={`w-[288px] absolute right-4 top-full xl:static xl:w-auto h-0 xl:h-auto invisible xl:visible xl:flex items-center justify-between ${
                navigationOpen &&
                `!visible bg-transparent shadow-lg border border-gray-3 !h-auto max-h-[400px] overflow-y-scroll rounded-md p-5`
              }`}
            >
              <nav>
                <ul
                  ref={dropdownRef}
                  className="flex xl:items-center flex-col text-custom-xs xl:flex-row gap-5 xl:gap-8"
                >
                  {subTopMenuData.map((menuItem, i) =>
                    menuItem.submenu ? (
                      <Dropdown
                        key={i}
                        menuItem={menuItem}
                        stickyMenu={stickyMenu}
                      />
                    ) : (
                      <li
                        key={i}
                        onClick={handleMenuItemClick}
                        className="group relative before:w-0 before:h-[3px] before:bg-[#E53E3E] before:absolute before:left-0 before:top-0 before:rounded-b-[3px]  before:ease-out before:duration-200 hover:before:w-full "
                      >
                        <Link
                          href={menuItem.path}
                          className={`hover:text-dark uppercase text-custom-xs font-medium text-white flex ${
                            stickyMenu ? "xl:py-4" : "xl:py-6"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main header content */}
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div
          className={`flex flex-col lg:flex-row gap-5 items-end lg:items-center xl:justify-between ease-out duration-200 ${
            stickyMenu ? "py-3" : "py-3"
          }`}
        >
          <div className="xl:w-auto flex-col sm:flex-row w-full flex sm:justify-between sm:items-center gap-5 sm:gap-10">
            <Link className="flex-shrink-0" href="/">
              <Image
                src="/images/logo/logo.svg"
                alt="Logo"
                width={149}
                height={36}
              />
            </Link>

            <div className="max-w-[475px] w-full">
              <form>
                <div className="flex items-center">
                  <CustomSelect options={options} />

                  <div className="relative max-w-[333px] sm:min-w-[333px] w-full">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 inline-block w-px h-5.5 bg-gray-4"></span>
                    <input
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      type="search"
                      name="search"
                      id="search"
                      placeholder="I am shopping for..."
                      autoComplete="off"
                      className="custom-search w-full rounded-r-[5px] bg-gray-1 !border-l-0 border border-gray-3 py-2.5 pl-4 pr-10 outline-none ease-in duration-200"
                    />

                    <button
                      id="search-btn"
                      aria-label="Search"
                      className="flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 ease-in duration-200 hover:text-blue"
                    >
                      <Image
                        src="/images/svgs/search.svg"
                        alt="Logo"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex w-full lg:w-auto items-center gap-5">
            <div className="hidden xl:flex items-center gap-3.5">
              <div className="flex flex-col justify-start items-end">
                <span className="block text-2xs text-dark-4 uppercase">
                  Call Us Now:
                </span>
                <p className="font-medium text-custom-sm text-dark">
                  +(258) 2159-2159
                </p>
              </div>
              <div className="bg-gray-2 p-2 rounded-full">
                <Image
                  src="/images/svgs/img-1.svg"
                  alt="call-logo"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <span className="hidden xl:block w-px h-7.5 bg-gray-4"></span>
            <div className="py-4">
              <Link
                href="/wishlist"
                className="flex bg-gray-2 p-2 rounded-full items-center gap-1.5 font-medium text-custom-sm text-dark hover:text-blue"
              >
                <Image
                  src="/images/svgs/wishlist.svg"
                  alt="wishlist-img"
                  width={18}
                  height={18}
                />
              </Link>
            </div>

            <span className="hidden xl:block w-px h-7.5 bg-gray-4"></span>

            <div className="flex w-full lg:w-auto justify-between items-center gap-5">
              <div className="flex items-center gap-5">
                <button
                  onClick={handleOpenCartModal}
                  className="flex items-center gap-2.5"
                >
                  <span className="inline-block relative">
                    <Image
                      src="/images/svgs/product.svg"
                      alt="product-img"
                      width={26}
                      height={26}
                    />

                    <span className="flex items-center justify-center font-medium text-2xs absolute -right-2 -top-2.5 bg-[#E53E3E] w-4 h-4 rounded-full text-white">
                      {product.length}
                    </span>
                  </span>

                  <div>
                    <span className="block text-2xs text-dark-4 uppercase">
                      Your cart
                    </span>
                    <p className="font-medium text-custom-sm text-dark">
                      ${totalPrice}
                    </p>
                  </div>
                </button>
              </div>

              <button
                id="Toggle"
                aria-label="Toggler"
                className="xl:hidden block"
                onClick={() => setNavigationOpen(!navigationOpen)}
              >
                <span className="block relative cursor-pointer w-5.5 h-5.5">
                  <span className="du-block absolute right-0 w-full h-full">
                    <span
                      className={`block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                        !navigationOpen && "!w-full delay-300"
                      }`}
                    ></span>
                    <span
                      className={`block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                        !navigationOpen && "!w-full delay-400"
                      }`}
                    ></span>
                    <span
                      className={`block relative top-0 left-0 bg-dark rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                        !navigationOpen && "!w-full delay-500"
                      }`}
                    ></span>
                  </span>
                  <span className="block absolute right-0 w-full h-full rotate-45">
                    <span
                      className={`block bg-dark rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full ${
                        !navigationOpen && "!h-0 delay-[0] "
                      }`}
                    ></span>
                    <span
                      className={`block bg-dark rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 ${
                        !navigationOpen && "!h-0 dealy-200"
                      }`}
                    ></span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sale banner */}
      <div className="max-w-[1170px] mx-auto pl-4 sm:pl-7.5 xl:pl-6 bg-dark border rounded-md">
        <div className="flex items-center justify-between">
          <div
            className={`w-[288px] absolute right-4 top-full xl:static xl:w-auto h-0 xl:h-auto invisible xl:visible xl:flex items-center justify-between ${
              navigationOpen &&
              `!visible bg-dark min-h-screen shadow-lg border border-gray-3 !h-auto max-h-[400px] overflow-y-scroll  p-5`
            }`}
          >
            <nav>
              <ul className="flex xl:items-center flex-col xl:flex-row gap-5 xl:gap-8">
                {menuData.map((menuItem, i) =>
                  menuItem.submenu ? (
                    <Dropdown
                      key={i}
                      menuItem={menuItem}
                      stickyMenu={stickyMenu}
                    />
                  ) : (
                    <li
                      key={i}
                      className="group relative before:w-0 before:h-[3px] before:bg-[#E53E3E] before:absolute before:left-0 before:top-0 before:rounded-b-[3px]  before:ease-out before:duration-200 hover:before:w-full "
                    >
                      <Link
                        href={menuItem.path}
                        className={`hover:text-[#E53E3E] uppercase text-custom-sm font-medium text-white flex ${
                          stickyMenu ? "xl:py-4" : "xl:py-6"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="hidden xl:block bg-red px-4 rounded-e-md py-5 h-full">
            <span className="text-white">Get 30% Discount Now</span>

            <button className="bg-white py-1 ml-3 text-[#E53E3E] px-4.5 rounded-3xl">
              Sale
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
