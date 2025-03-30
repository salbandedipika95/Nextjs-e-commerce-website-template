import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full flex justify-between mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div
          className="relative z-1 overflow-hidden rounded-lg  py-12.5 lg:py-17.5 xl:py-10 px-4 sm:px-6 lg:px-6 xl:pl-8 xl:pr-27"
          style={{
            backgroundImage: `url(/images/promo/bgimg-1.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[550px] w-full">
            <button className="inline-flex font-medium cursor-default text-custom-xs text-[#E53E3E]  bg-white py-[6px] px-5 rounded-md ease-out duration-200  mb-4">
              1500+ PRODUCTS
            </button>

            <h2 className="font-bold text-lg lg:text-heading-6 xl:text-heading-6 text-dark mb-3">
              WOMEN COLLECTIONS
            </h2>
            <span className="block  text-base  mb-4">
              This is genuinely the first theme i bought for which i did not had{" "}
              <br />
              to write one line of code.
            </span>
            <ul className="flex flex-col gap-2.5">
              <li className="text-dark">Blazer</li>
              <li className="text-dark">Blouse & Shirts</li>
              <li className="text-dark">Dresser</li>
              <li className="text-dark">Jeans</li>
              <li className="text-dark">Knits</li>
              <li className="text-dark">Pants</li>
              <li className="text-dark">Skirts</li>
              <li className="text-dark">Suits</li>
              <li className="text-dark">SweatShirts & Hoodie</li>
              <li className="text-dark">T-shirts</li>
              <li className="text-dark">Tops & Bodysuits</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 grid-rows-1 g:grid-rows-2">
          {/* <!-- promo banner small --> */}
          <div
            className="relative z-1 w-full overflow-hidden rounded-lg  py-8 xl:py-12 pr-16 pl-10 sm:pr-20 xl:pr-67"
            style={{
              backgroundImage: `url(/images/promo/bgimg-2.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="">
              <button className="inline-flex cursor-default font-medium text-custom-xs text-[#E53E3E]  bg-white py-[6px] px-5 rounded-md ease-out duration-200  mb-4">
                1500+ PRODUCTS
              </button>

              <h2 className="font-bold text-lg lg:text-heading-6 xl:text-heading-6 text-dark mb-3">
                MEN COLLECTIONS
              </h2>

              <ul className="flex flex-col gap-2.5">
                <li className="text-dark">Blazer</li>
                <li className="text-dark">Blouse & Shirts</li>
                <li className="text-dark">Dresser</li>
                <li className="text-dark">Jeans</li>
              </ul>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div
            className="relative z-1 w-full overflow-hidden rounded-lg  py-8 xl:py-12 pr-16 pl-10 sm:pr-20 xl:pr-56 "
            style={{
              backgroundImage: `url(/images/promo/bgimg-3.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="">
              <button className="inline-flex font-medium cursor-default text-custom-xs text-[#E53E3E]  bg-white py-[6px] px-5 rounded-md ease-out duration-200  mb-4">
                1500+ PRODUCTS
              </button>

              <h2 className="font-bold uppercase text-lg lg:text-heading-6 xl:text-heading-6 text-dark mb-3">
                Top Accessories
              </h2>

              <ul className="flex flex-col gap-2.5">
                <li className="text-dark">Blazer</li>
                <li className="text-dark">Blouse & Shirts</li>
                <li className="text-dark">Dresser</li>
                <li className="text-dark">Jeans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
