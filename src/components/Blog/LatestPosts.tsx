import Link from "next/link";
import React from "react";
import Image from "next/image";

const LatestPosts = ({ blogs }) => {
  return (
    <div className="border border-gray-3 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">Latest Posts</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          {/* <!-- post item --> */}

          {blogs.slice(0, 3).map((blog, key) => (
            <div className="flex items-center gap-4" key={key}>
              <Link
                href="/blogs/blog-details-with-sidebar"
                className="max-w-[110px] w-full rounded-[10px] overflow-hidden"
              >
                <Image
                  src={blog.img}
                  alt="blog"
                  className="rounded-[10px] w-full"
                  width={110}
                  height={80}
                />
              </Link>

              <div>
                <h3 className="text-dark leading-[22px] ease-out duration-200 mb-1.5 hover:text-blue">
                  <Link href="/blogs/blog-details-with-sidebar">
                    {blog.title}
                  </Link>
                </h3>

                <span className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-custom-xs flex items-center gap-2 ease-out duration-200 hover:text-blue"
                  >
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.34375 4.03125C6.34375 3.67578 6.61719 3.375 7 3.375C7.35547 3.375 7.65625 3.67578 7.65625 4.03125V7.42188L9.98047 8.95312C10.2812 9.17188 10.3633 9.58203 10.1445 9.88281C9.95312 10.1836 9.54297 10.2656 9.24219 10.0469L6.61719 8.29688C6.45312 8.1875 6.34375 7.96875 6.34375 7.75V4.03125ZM7 0.75C10.8555 0.75 14 3.89453 14 7.75C14 11.6328 10.8555 14.75 7 14.75C3.11719 14.75 0 11.6328 0 7.75C0 3.89453 3.11719 0.75 7 0.75ZM1.3125 7.75C1.3125 10.8945 3.85547 13.4375 7 13.4375C10.1172 13.4375 12.6875 10.8945 12.6875 7.75C12.6875 4.63281 10.1172 2.0625 7 2.0625C3.85547 2.0625 1.3125 4.63281 1.3125 7.75Z"
                        fill="#74787C"
                      />
                    </svg>

                    {blog.date}
                  </a>

                  {/* <!-- divider --> */}
                  {/* <span className="block w-px h-4 bg-gray-4"></span> */}

                  {/* <a
                    href="#"
                    className="text-custom-xs ease-out duration-200 hover:text-blue"
                  >
                    {blog.views}k Views
                  </a> */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
