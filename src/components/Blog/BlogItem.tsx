import React from "react";
import { BlogItem } from "@/types/blogItem";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: BlogItem }) => {
  return (
    <div className="shadow-1 bg-white border border-gray-2 rounded-xl px-4 sm:px-5 pt-5 pb-4">
      <Link href="/blogs/blog-details" className="rounded-md overflow-hidden">
        <Image
          src={blog.img}
          alt="blog"
          className="rounded-md w-full"
          width={330}
          height={210}
        />
      </Link>

      <div className="mt-5.5">
        <span className="flex items-center gap-3 mb-2.5">
          <a
            href="#"
            className="text-custom-sm ease-out duration-200 flex items-center gap-1 hover:text-[#E53E3E]"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 1.25V2H6.75V1.25C6.75 0.851562 7.07812 0.5 7.5 0.5C7.89844 0.5 8.25 0.851562 8.25 1.25V2H9.375C9.98438 2 10.5 2.51562 10.5 3.125V4.25H0V3.125C0 2.51562 0.492188 2 1.125 2H2.25V1.25C2.25 0.851562 2.57812 0.5 3 0.5C3.39844 0.5 3.75 0.851562 3.75 1.25ZM0 5H10.5V11.375C10.5 12.0078 9.98438 12.5 9.375 12.5H1.125C0.492188 12.5 0 12.0078 0 11.375V5ZM1.5 7.625C1.5 7.83594 1.66406 8 1.875 8H2.625C2.8125 8 3 7.83594 3 7.625V6.875C3 6.6875 2.8125 6.5 2.625 6.5H1.875C1.66406 6.5 1.5 6.6875 1.5 6.875V7.625ZM4.5 7.625C4.5 7.83594 4.66406 8 4.875 8H5.625C5.8125 8 6 7.83594 6 7.625V6.875C6 6.6875 5.8125 6.5 5.625 6.5H4.875C4.66406 6.5 4.5 6.6875 4.5 6.875V7.625ZM7.875 6.5C7.66406 6.5 7.5 6.6875 7.5 6.875V7.625C7.5 7.83594 7.66406 8 7.875 8H8.625C8.8125 8 9 7.83594 9 7.625V6.875C9 6.6875 8.8125 6.5 8.625 6.5H7.875ZM1.5 10.625C1.5 10.8359 1.66406 11 1.875 11H2.625C2.8125 11 3 10.8359 3 10.625V9.875C3 9.6875 2.8125 9.5 2.625 9.5H1.875C1.66406 9.5 1.5 9.6875 1.5 9.875V10.625ZM4.875 9.5C4.66406 9.5 4.5 9.6875 4.5 9.875V10.625C4.5 10.8359 4.66406 11 4.875 11H5.625C5.8125 11 6 10.8359 6 10.625V9.875C6 9.6875 5.8125 9.5 5.625 9.5H4.875ZM7.5 10.625C7.5 10.8359 7.66406 11 7.875 11H8.625C8.8125 11 9 10.8359 9 10.625V9.875C9 9.6875 8.8125 9.5 8.625 9.5H7.875C7.66406 9.5 7.5 9.6875 7.5 9.875V10.625Z"
                fill="#E53E3E"
              />
            </svg>

            {blog.date}
          </a>

          {/* <!-- divider --> */}
          <span className="block w-px h-4 bg-gray-4"></span>

          <a
            href="#"
            className="text-custom-sm ease-out flex items-center gap-1 duration-200 hover:text-[#E53E3E]"
          >
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0625 3.46094C12.3047 4.70312 12.3047 6.69531 11.0625 7.9375L8.4375 10.5859C8.22656 10.8203 7.875 10.8203 7.64062 10.6094C7.42969 10.375 7.42969 10.0234 7.64062 9.8125L10.2656 7.14062C11.0625 6.34375 11.0625 5.05469 10.2656 4.25781L7.26562 1.21094C7.05469 1 7.05469 0.648438 7.28906 0.414062C7.5 0.203125 7.85156 0.203125 8.0625 0.4375L11.0625 3.46094ZM0 4.89062V1.375C0 0.765625 0.492188 0.25 1.125 0.25H4.61719C5.01562 0.25 5.39062 0.414062 5.67188 0.695312L9.60938 4.63281C10.1953 5.21875 10.1953 6.17969 9.60938 6.76562L6.49219 9.88281C5.90625 10.4688 4.94531 10.4688 4.35938 9.88281L0.421875 5.94531C0.140625 5.66406 0 5.28906 0 4.89062ZM2.625 2.125C2.20312 2.125 1.875 2.47656 1.875 2.875C1.875 3.29688 2.20312 3.625 2.625 3.625C3.02344 3.625 3.375 3.29688 3.375 2.875C3.375 2.47656 3.02344 2.125 2.625 2.125Z"
                fill="#E53E3E"
              />
            </svg>

            {blog.views}
          </a>
        </span>

        <h2 className="font-medium text-dark text-lg sm:text-xl ease-out duration-200 mb-4 hover:text-[#E53E3E]">
          <Link href="/blogs/blog-details">{blog.title}</Link>
        </h2>

        <Link
          href="/blogs/blog-details"
          className="text-custom-sm inline-flex items-center gap-2 py-2 ease-out duration-200 text-[#E53E3E] hover:text-[#f84444]"
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

export default BlogItem;
