import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-6 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Promo Banner */}
        <div
          className="relative z-1 overflow-hidden rounded-lg py-10 px-6 md:px-8 lg:py-14 xl:py-16 w-full lg:w-2/3"
          style={{
            backgroundImage: `url(/images/promo/bgimg-1.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-md">
            <button className="inline-flex font-medium cursor-default text-xs text-red-600 bg-white py-1 px-3 rounded-md mb-4">
              1500+ PRODUCTS
            </button>
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl text-dark mb-3">
              WOMEN COLLECTIONS
            </h2>
            <span className="block text-sm md:text-base mb-4">
              This is genuinely the first theme I bought for which I did not have to write one line of code.
            </span>
            <ul className="grid grid-cols-2 gap-2 text-sm text-dark">
              <li>Blazer</li>
              <li>Blouse & Shirts</li>
              <li>Dresses</li>
              <li>Jeans</li>
              <li>Knits</li>
              <li>Pants</li>
              <li>Skirts</li>
              <li>Suits</li>
              <li>Sweatshirts & Hoodies</li>
              <li>T-shirts</li>
              <li>Tops & Bodysuits</li>
            </ul>
          </div>
        </div>

        {/* Small Promo Banners */}
        <div className="grid gap-6 w-full lg:w-1/3">
          {/* Men's Collection */}
          <div
            className="relative z-1 w-full overflow-hidden rounded-lg py-8 px-6 md:px-8"
            style={{
              backgroundImage: `url(/images/promo/bgimg-2.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <button className="inline-flex cursor-default font-medium text-xs text-red-600 bg-white py-1 px-3 rounded-md mb-4">
              1500+ PRODUCTS
            </button>
            <h2 className="font-bold text-lg md:text-xl text-dark mb-3">MEN COLLECTIONS</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-dark">
              <li>Blazer</li>
              <li>Blouse & Shirts</li>
              <li>Dresses</li>
              <li>Jeans</li>
            </ul>
          </div>

          {/* Accessories Collection */}
          <div
            className="relative z-1 w-full overflow-hidden rounded-lg py-8 px-6 md:px-8"
            style={{
              backgroundImage: `url(/images/promo/bgimg-3.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <button className="inline-flex font-medium cursor-default text-xs text-red-600 bg-white py-1 px-3 rounded-md mb-4">
              1500+ PRODUCTS
            </button>
            <h2 className="font-bold uppercase text-lg md:text-xl text-dark mb-3">
              Top Accessories
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-dark">
              <li>Blazer</li>
              <li>Blouse & Shirts</li>
              <li>Dresses</li>
              <li>Jeans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;