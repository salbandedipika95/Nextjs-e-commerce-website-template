import React from "react";
import { BlogItem } from "@/types/blogItem";
import Image from "next/image";
import Link from "next/link";

const BlogItemm = ({ blog }: { blog: BlogItem }) => {
  return (
    <div className="border border-gray-3 bg-white rounded-xl px-4 flex  gap-6 sm:px-3 py-3">
      <Link href="/blogs/blog-details" className="rounded-md overflow-hidden">
        <Image
          src="https://placehold.co/337x280/png"
          alt="blog"
          className="rounded-md w-[637px] h-full "
        />
      </Link>
      <div className=" flex flex-col justify-center">
        <span className="flex items-center gap-3 mb-2.5">
          <a
            href="#"
            className="ease-out flex items-center gap-2 duration-200 hover:text-[#E53E3E]"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14.75C3.11719 14.75 0 11.6328 0 7.75C0 3.89453 3.11719 0.75 7 0.75C10.8555 0.75 14 3.89453 14 7.75C14 11.6328 10.8555 14.75 7 14.75ZM6.34375 7.75C6.34375 7.96875 6.45312 8.1875 6.61719 8.29688L9.24219 10.0469C9.54297 10.2656 9.95312 10.1836 10.1445 9.88281C10.3633 9.58203 10.2812 9.17188 9.98047 8.95312L7.65625 7.42188V4.03125C7.65625 3.67578 7.35547 3.375 6.97266 3.375C6.61719 3.375 6.31641 3.67578 6.31641 4.03125L6.34375 7.75Z"
                fill="#74787C"
              />
            </svg>
            Mar 27, 2022
          </a>

          {/* <!-- divider --> */}
          <span className="block w-px h-4 bg-gray-4"></span>

          <a
            href="#"
            className="ease-out flex items-center gap-2 duration-200 hover:text-[#E53E3E]"
          >
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 3.6875V11.5625C14 12.3008 13.3984 12.875 12.6875 12.875H1.3125C0.574219 12.875 0 12.3008 0 11.5625V1.9375C0 1.22656 0.574219 0.625 1.3125 0.625H5.6875L7.4375 2.375H12.6875C13.3984 2.375 14 2.97656 14 3.6875Z"
                fill="#74787C"
              />
            </svg>
            Modern Fashion
          </a>
        </span>

        <h2 className="font-medium text-dark text-lg sm:text-xl ease-out duration-200 mb-4 hover:text-[#E53E3E]">
          <Link href="/blogs/blog-details">Exploring the World of Fashion</Link>
        </h2>
        <p className="text-sm mb-2.5">
          Potenti feugiat aenean class risus aptent tempus nu, facilisi
          facilisis lacus non at nibh conubia, inceptos malesuada curae leo
          felis ante. Facilisis lobortis suscipit vel cras integer cursus tortor
        </p>
        <Link
          href="/blogs/blog-details"
          className="text-custom-sm inline-flex items-center gap-2 py-2 ease-out duration-200 text-dark font-medium hover:text-[#f84444]"
        >
          Read More
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1023 4.10225C10.3219 3.88258 10.6781 3.88258 10.8977 4.10225L15.3977 8.60225C15.6174 8.82192 15.6174 9.17808 15.3977 9.39775L10.8977 13.8977C10.6781 14.1174 10.3219 14.1174 10.1023 13.8977C9.88258 13.6781 9.88258 13.3219 10.1023 13.1023L13.642 9.5625H3C2.68934 9.5625 2.4375 9.31066 2.4375 9C2.4375 8.68934 2.68934 8.4375 3 8.4375H13.642L10.1023 4.89775C9.88258 4.67808 9.88258 4.32192 10.1023 4.10225Z"
              fill=""
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogItemm;
