"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SingleItem from "../BestSeller/SingleItem";
// import SingleItem from "./SingleItem";

import Link from "next/link";
import shopData from "@/components/Shop/shopData";

const CounDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    // @ts-ignore
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden pb-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div
          className="relative overflow-hidden flex justify-between lg:flex-row flex-col z-1 rounded-lg bg-[#D0E9F3] p-4 sm:p-7.5 lg:p-10 xl:p-15 "
          style={{
            backgroundImage: `url(/images/countdown/bgimg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[422px] lg:mb-0 mb-16 w-full mt-10">
            <h2 className="font-semibold  mb-3.5 uppercase text-xl xl:text-heading-4 text-dark">
              Deal Of the days
            </h2>

            <p className="mb-10 text-sm">
              Elegant pink origami design three type of dimensional view and
              decoration co Great for adding a decorative...
            </p>

            <div className="flex gap-4">
              <div className="bg-[#E53E3E] flex items-center px-3.5 py-3 rounded-full">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.625 7C5.625 6.40234 6.11719 5.875 6.75 5.875C7.34766 5.875 7.875 6.40234 7.875 7C7.875 7.63281 7.34766 8.125 6.75 8.125C6.11719 8.125 5.625 7.63281 5.625 7ZM12.375 11.5C12.375 12.1328 11.8477 12.625 11.25 12.625C10.6172 12.625 10.125 12.1328 10.125 11.5C10.125 10.9023 10.6172 10.375 11.25 10.375C11.8477 10.375 12.375 10.9023 12.375 11.5ZM7.3125 12.0977C6.99609 12.4492 6.46875 12.4492 6.15234 12.0977C5.80078 11.7812 5.80078 11.2539 6.15234 10.9023L10.6523 6.40234C10.9688 6.08594 11.4961 6.08594 11.8125 6.40234C12.1641 6.75391 12.1641 7.28125 11.8125 7.59766L7.3125 12.0977ZM12.0938 1.79688C13.2539 1.65625 14.4492 2.00781 15.3633 2.88672C16.2422 3.80078 16.5938 4.99609 16.4531 6.15625C17.3672 6.89453 18 8.01953 18 9.25C18 10.5156 17.3672 11.6406 16.4531 12.3789C16.5938 13.5039 16.2422 14.7344 15.3633 15.6133C14.4492 16.5273 13.2539 16.8789 12.0938 16.7383C11.3555 17.6523 10.2305 18.25 9 18.25C7.73438 18.25 6.60938 17.6523 5.87109 16.7383C4.71094 16.8789 3.51562 16.5273 2.60156 15.6133C1.72266 14.7344 1.37109 13.5039 1.51172 12.3789C0.597656 11.6406 0 10.5156 0 9.25C0 8.01953 0.597656 6.89453 1.51172 6.15625C1.37109 4.99609 1.72266 3.80078 2.60156 2.88672C3.51562 2.00781 4.71094 1.65625 5.87109 1.79688C6.60938 0.882812 7.73438 0.25 9 0.25C10.2305 0.25 11.3555 0.882812 12.0938 1.79688ZM6.67969 3.76562L6.04688 3.55469C5.27344 3.30859 4.39453 3.48438 3.79688 4.08203C3.19922 4.67969 3.02344 5.55859 3.26953 6.29688L3.48047 6.96484L2.84766 7.31641C2.14453 7.66797 1.6875 8.40625 1.6875 9.25C1.6875 10.1289 2.14453 10.8672 2.84766 11.2188L3.48047 11.5352L3.26953 12.2031C3.02344 12.9766 3.19922 13.8203 3.79688 14.4531C4.39453 15.0508 5.27344 15.2266 6.04688 14.9805L6.67969 14.7695L7.03125 15.4023C7.38281 16.1055 8.12109 16.5625 9 16.5625C9.84375 16.5625 10.582 16.1055 10.9336 15.4023L11.2852 14.7695L11.918 14.9805C12.6914 15.2266 13.5703 15.0508 14.168 14.4531C14.7656 13.8203 14.9414 12.9766 14.6953 12.2031L14.4844 11.5352L15.1172 11.2188C15.8203 10.8672 16.3125 10.1289 16.3125 9.25C16.3125 8.40625 15.8203 7.66797 15.1172 7.31641L14.4844 6.96484L14.6953 6.29688C14.9414 5.55859 14.7656 4.67969 14.168 4.08203C13.5703 3.48438 12.6914 3.30859 11.918 3.55469L11.2852 3.76562L10.9336 3.13281C10.582 2.42969 9.84375 1.9375 9 1.9375C8.12109 1.9375 7.38281 2.42969 7.03125 3.13281L6.67969 3.76562Z"
                    fill="white"
                  />
                </svg>
              </div>

              <p className="text-dark ">
                Limited Time offer. THe Deal will expire one august 18, 2024
              </p>
            </div>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-[#E53E3E] border border-gray-1 hover:text-white bg-white py-2.5 px-7 rounded-md ease-out duration-200 hover:bg-[#E53E3E] mt-12 "
            >
              View All Collections
            </a>
          </div>

          <div className="flex gap-2.5">
            {/* <!-- Best Sellers item --> */}
            {shopData.slice(1, 3).map((item, key) => (
              <SingleItem item={item} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounDown;
