import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";
import bgImage from "./hero-bg.png";

const Hero = () => {
  return (
    <section
      className="overflow-hidden max-h-screen pt-44 sm:pt-44 mb-14 xl:mb-0 lg:pt-33 xl:pt-59"
      style={{
        backgroundImage: `url(/images/hero/bg-img.png)`,
        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1170px] mt-24  h-[650px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap justify-end items-center gap-5">
          <div className="max-w-[500px]  w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px]  p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <div className="flex gap-2 items-baseline">
                      <span className="flex items-center gap-3">
                        <span className="font-medium mb-2 text-xs text-red">
                          UMMER 22 WOMEN'S COLLECTION
                        </span>
                      </span>
                    </div>

                    <h2 className=" font-semibold text-dark text-xl mb-4">
                      <p className="text-dark uppercase text-heading-3">
                        {" "}
                        Super Collection For Women{" "}
                      </p>
                    </h2>

                    <div className="flex gap-2 items-baseline mb-4">
                      <p className="font-medium capitalize text-dark-4 text-custom-sm mb-1.5">
                        from
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-6 text-red">
                          $320.00
                        </span>
                        {/* <span className="font-medium text-2xl text-dark-4 line-through">
                          $999
                        </span> */}
                      </span>
                    </div>
                    <div>
                      <button className="py-2 px-6 hover:border-gray-3 hover:border bg-[#E53E3E] text-white hover:bg-white hover:text-[#E53E3E]">
                        <a href="#" className="text-sm">
                          {" "}
                          View Collections
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
