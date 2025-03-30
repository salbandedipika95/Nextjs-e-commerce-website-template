import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogItem from "../Blog/BlogItem";
import blogData from "../BlogGrid/blogData";
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import Categories from "../Blog/Categories";
import shopData from "../Shop/shopData";
import BlogItemm from "./BlogItemm";

const BlogGridWithSidebar = () => {
  const categories = [
    {
      name: "Latest News",
      products: 10,
    },
    {
      name: "Laptop",
      products: 12,
    },
    {
      name: "Monitor",
      products: 30,
    },
    {
      name: "UPS",
      products: 23,
    },
    {
      name: "Phone",
      products: 10,
    },
    {
      name: "Watch",
      products: 13,
    },
  ];

  return (
    <>
      <Breadcrumb title={"Blog Lists"} pages={["Blog Lists"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5">
            {/* <!-- blog grid --> */}
            <div className="lg:max-w-[770px] w-full">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-10 gap-x-7.5">
                {blogData.map((blog, key) => (
                  <BlogItemm blog={blog} key={key} />
                ))}
              </div>

              {/* <!-- Blog Pagination Start --> */}
              <div className="flex justify-start mt-15">
                <div className="rounded-md p-2">
                  <ul className="flex items-center gap-1.5">
                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] bg-[#E53E3E] text-white hover:text-white hover:bg-[#E53E3E]"
                      >
                        1
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] bg-gray-2 hover:text-white hover:bg-[#E53E3E]"
                      >
                        2
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] bg-gray-2 hover:text-white hover:bg-[#E53E3E]"
                      >
                        3
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] bg-gray-2 hover:text-white hover:bg-[#E53E3E]"
                      >
                        4
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex py-1.5 px-3.5 duration-200 rounded-[3px] bg-gray-2 hover:text-white hover:bg-[#E53E3E]"
                      >
                        5
                      </a>
                    </li>

                    <li>
                      <button
                        id="paginationLeft"
                        aria-label="button for pagination left"
                        type="button"
                        className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] hover:text-white hover:bg-[#E53E3E] disabled:text-gray-4"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.82197 16.1156C5.65322 16.1156 5.5126 16.0594 5.37197 15.9469C5.11885 15.6937 5.11885 15.3 5.37197 15.0469L11.2782 9L5.37197 2.98125C5.11885 2.72812 5.11885 2.33437 5.37197 2.08125C5.6251 1.82812 6.01885 1.82812 6.27197 2.08125L12.6282 8.55C12.8813 8.80312 12.8813 9.19687 12.6282 9.45L6.27197 15.9187C6.15947 16.0312 5.99072 16.1156 5.82197 16.1156Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Blog Pagination End --> */}
            </div>

            {/* <!-- blog sidebar --> */}
            <div className="lg:max-w-[370px] w-full">
              {/* <!-- search box --> */}
              <SearchForm />

              {/* <!-- Popular Category box --> */}
              <div className="shadow-1 bg-white border border-gray-3 rounded-xl mt-7.5">
                <div className="px-4 sm:px-6 py-4.5 border-b rounded-t-md border-gray-3">
                  <h2 className="font-medium text-lg text-dark">Categories</h2>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col gap-3">
                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Latest News
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        12
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Today Best Posts
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        25
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Design Trend
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        23
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      UI/UX Tips
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        09
                      </span>
                    </button>

                    <button className="group flex items-center justify-between ease-out duration-200 text-dark hover:text-blue">
                      Brand Design
                      <span className="inline-flex rounded-[30px] bg-gray-2 text-custom-xs px-1.5 ease-out duration-200 group-hover:text-white group-hover:bg-blue">
                        54
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Recent Posts box --> */}
              <LatestPosts blogs={blogData} />

              {/* <!-- Tags box --> */}
              <div className="border border-gray-3 bg-white rounded-xl mt-7.5">
                <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
                  <h2 className="font-medium text-lg text-dark">Tags</h2>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="inline-flex text-dark text-sm items-center hover:text-white border border-gray-3 py-1.5 px-4 rounded-md ease-out duration-200 hover:bg-[#E53E3E] hover:border-[#E53E3E]"
                      href="#"
                    >
                      DREAM
                    </a>

                    <a
                      className="inline-flex text-dark text-sm items-center hover:text-white border border-gray-3 py-1.5 px-4 rounded-md ease-out duration-200 hover:bg-[#E53E3E] hover:border-[#E53E3E]"
                      href="#"
                    >
                      RINGS
                    </a>

                    <a
                      className="inline-flex text-dark text-sm items-center hover:text-white border border-gray-3 py-1.5 px-4 rounded-md ease-out duration-200 hover:bg-[#E53E3E] hover:border-[#E53E3E]"
                      href="#"
                    >
                      BIRTHDAY
                    </a>

                    <a
                      className="inline-flex text-dark text-sm items-center hover:text-white border border-gray-3 py-1.5 px-4 rounded-md ease-out duration-200 hover:bg-[#E53E3E] hover:border-[#E53E3E]"
                      href="#"
                    >
                      GIFTS
                    </a>

                    <a
                      className="inline-flex text-dark text-sm items-center hover:text-white border border-gray-3 py-1.5 px-4 rounded-md ease-out duration-200 hover:bg-[#E53E3E] hover:border-[#E53E3E]"
                      href="#"
                    >
                      NEAKLACE
                    </a>

                    <a
                      className="inline-flex text-dark text-sm items-center hover:text-white border border-gray-3 py-1.5 px-4 rounded-md ease-out duration-200 hover:bg-[#E53E3E] hover:border-[#E53E3E]"
                      href="#"
                    >
                      CHAIN
                    </a>

                    <a
                      className="inline-flex text-dark text-sm items-center hover:text-white border border-gray-3 py-1.5 px-4 rounded-md ease-out duration-200 hover:bg-[#E53E3E] hover:border-[#E53E3E]"
                      href="#"
                    >
                      BRACLET
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Latest Products box --> */}
              <LatestProducts products={shopData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridWithSidebar;
