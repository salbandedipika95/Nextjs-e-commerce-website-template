import Link from "next/link";
import React from "react";
import bgImage from "./bg.png";

const Breadcrumb = ({ title, pages }) => {
  return (
    <div className="overflow-hidden shadow-breadcrumb pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[225px]">
      <div
        className=" "
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-10 xl:py-17">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2">
              {title}
            </h1>

            <ul className="flex items-center gap-2">
              <li className="text-custom-lg hover:text-[#E53E3E]">
                <Link href="/">Home &nbsp; &gt;</Link>
              </li>

              {pages.length > 0 &&
                pages.map((page, key) => (
                  <li
                    className="text-custom-lg last:text-dark font-medium capitalize"
                    key={key}
                  >
                    {page}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
