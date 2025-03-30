import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import blogData from "../BlogGrid/blogData";
import Image from "next/image";
import shopData from "../Shop/shopData";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title={"Blog Details"} pages={["blog details"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-12.5">
            {/* <!-- blog details --> */}
            <div className="lg:max-w-[750px] w-full">
              <div className="rounded-[10px] overflow-hidden mb-7.5">
                <Image
                  className="rounded-[10px]"
                  src="/images/blog/blog-details-01.jpg"
                  alt="details"
                  width={750}
                  height={477}
                />
              </div>

              <div>
                <span className="flex items-center gap-3 mb-4">
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

                  {/* <!-- divider -`-> */}
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

                <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
                  Fueling Your Passion for All Things Stylish
                </h2>

                <p className="mb-6">
                  Donec rutrum congue leo eget malesuada. Curabitur aliquet quam
                  posuere blandit. Vivamus suscipit tortor eget felis porttitor
                  volutpa estibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae Donec velit neque, auctor sit
                  amet aliquam vel, ullamcorper sit amet ligula.
                </p>

                <p className="mb-6">
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                  Vivamus suscipit tortor eget felis porttitor volutpat. Quisque
                  velit nisi, pretium ut lacinia in, elementum id enim. Donec
                  rutrum congue leo eget malesuada. Curabitur non nulla sit amet
                  nisl tempus convallis quis ac lectus. Pellentesque in ipsum id
                  orci porta dapibus Vestibulum ante ipsum primis in faucibus
                  orci luctus ultrices posuere cubilia Curae; Donec velit neque,
                  auctor sit amet aliquam ullamcorper sit amet ligula.
                </p>

                <div className="mt-7.5">
                  <h4 className="font-medium text-dark text-base xl:text-[22px] xl:leading-[34px] mb-6">
                    “Cras ultricies ligula sed magna dictum porta aesent sapien
                    massa pellentesque nec egestas vamus magna justo”
                  </h4>

                  <p className="mb-6">
                    Aptent vestibulum sodales porttitor hac torquent commodo
                    magnis cum molestie donec, egestas ultrices ultricies eget
                    sapien tortor odio condimentum dictum eu, lacus phasellus
                    velit elementum maecenas fringilla placerat suscipit libero.
                    Suscipit fermentum rutrum nisl lacinia varius duis euismod a
                    praesent feugiat inceptos leo, senectus ac facilisis
                    placerat mi posuere lobortis aliquam litora eget dictumst
                    semper, vestibulum morbi aenean volutpat accumsan.
                  </p>
                </div>
                <div className="mt-7.5">
                  <div className=" flex justify-between gap-3">
                    <Image
                      src="/images/blog/img-1.png"
                      alt="user"
                      width={426}
                      height={350}
                    />
                    <Image
                      src="/images/blog/img-1.png"
                      alt="user"
                      width={426}
                      height={350}
                    />
                  </div>
                  <p className="mb-6 mt-7.5">
                    Vestibulum ante ipsum primis in faucibus orci luctus
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam ullamcorper sit amet ligula. Quisque velit
                    , pretium ut lacinia in, elementum id enim. Vivamus suscipit
                    tortor eget felis porttitor volutpat. Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-4">
                    <p className="text-dark font-medium  uppercase">Tags </p>

                    <ul className="flex flex-wrap items-center gap-2">
                      <li>
                        <a
                          className="inline-flex text-dark text-sm items-center bg-white hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-dark hover:border-dark"
                          href="#"
                        >
                          DREAM
                        </a>
                      </li>

                      <li>
                        <a
                          className="inline-flex text-dark text-sm items-center bg-white hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-dark hover:border-dark"
                          href="#"
                        >
                          RINGS
                        </a>
                      </li>

                      <li>
                        <a
                          className="inline-flex text-dark text-sm items-center bg-white hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-dark hover:border-dark"
                          href="#"
                        >
                          BIRTHDAY
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] ease-in duration-200 hover:bg-opacity-95"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 2H8C4.69 2 2 4.69 2 8V16C2 19.31 4.69 22 8 22H16C19.31 22 22 19.31 22 16V8C22 4.69 19.31 2 16 2ZM20 16C20 18.21 18.21 20 16 20H8C5.79 20 4 18.21 4 16V8C4 5.79 5.79 4 8 4H16C18.21 4 20 5.79 20 8V16ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM18.5 6.5C18.5 7.33 17.83 8 17 8C16.17 8 15.5 7.33 15.5 6.5C15.5 5.67 16.17 5 17 5C17.83 5 18.5 5.67 18.5 6.5Z" />
                      </svg>
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#0376A8] ease-in duration-200 hover:bg-opacity-95"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#00ACEE] ease-in duration-200 hover:bg-opacity-95"
                    >
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5524 2.26027L16.625 1.0274C16.9355 0.693493 17.0202 0.436644 17.0484 0.308219C16.2016 0.770548 15.4113 0.924658 14.9032 0.924658H14.7056L14.5927 0.821918C13.9153 0.282534 13.0685 0 12.1653 0C10.1895 0 8.6371 1.48973 8.6371 3.21062C8.6371 3.31336 8.6371 3.46747 8.66532 3.57021L8.75 4.0839L8.15726 4.05822C4.54435 3.95548 1.58065 1.13014 1.10081 0.642123C0.310484 1.92637 0.762097 3.15925 1.24194 3.92979L2.20161 5.36815L0.677419 4.5976C0.705645 5.67637 1.15726 6.52397 2.03226 7.14041L2.79435 7.65411L2.03226 7.93665C2.5121 9.24658 3.58468 9.78596 4.375 9.99144L5.41935 10.2483L4.43145 10.8647C2.85081 11.8921 0.875 11.8151 0 11.738C1.77823 12.8682 3.89516 13.125 5.3629 13.125C6.46371 13.125 7.28226 13.0223 7.47984 12.9452C15.3831 11.25 15.75 4.82877 15.75 3.54452V3.36473L15.9194 3.26199C16.879 2.44007 17.2742 2.00342 17.5 1.74658C17.4153 1.77226 17.3024 1.82363 17.1895 1.84932L15.5524 2.26027Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#1877F2] ease-in duration-200 hover:bg-opacity-95"
                    >
                      <svg
                        width="9"
                        height="18"
                        viewBox="0 0 9 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="rounded-xl bg-white pt-7.5 pb-6 px-4 sm:px-7.5 my-7.5">
                  <a
                    href="#"
                    className="flex items-center justify-start gap-3 mb-5.5"
                  >
                    <div className="flex w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/users/user-04.jpg"
                        alt="user"
                        width={48}
                        height={48}
                      />
                    </div>

                    <div>
                      <h4 className="text-dark text-custom-sm">David Walton</h4>
                      <p className="text-custom-xs">Entroprenor</p>
                    </div>
                  </a>
                  <p className="italic text-dark text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod incididunt utionals labore et dolore magna aliqua
                    quis fermentum
                  </p>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sit amet eros ac ipsum egestas dapibus. Vivamus
                  gravida, ex non placerat tincidunt, lorem felis facilisis
                  tellus, vitae bibendum purus felis eget tellus. In non rutrum
                  ipsum. Morbi ut dui ante.
                </p>
              </div>
              <div className="post-footer mt-7.5 pt-7.5 border-t border-gray-4">
                <div className="comments-template pt-0">
                  <div className="comment-form border-top-0 pt-0">
                    <h4 className="font-medium text-2xl text-dark pb-1.5">
                      Add a Review
                    </h4>
                    <p className="pb-6">
                      Your email address will not be published. Required fields
                      are marked*
                    </p>
                    <form action="#">
                      <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                        <div className="w-full">
                          <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Your Name"
                            className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                          />
                        </div>

                        <div className="w-full">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                          />
                        </div>
                      </div>

                      <div className="mb-7.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          placeholder="Your Reviews"
                          className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex font-medium uppercase text-white bg-[#E53E3E] py-3 px-7 rounded-md ease-out duration-200 hover:bg-[#f84444]"
                      >
                        Submit Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- blog sidebar --> */}
            <div className="lg:max-w-[370px] w-full">
              {/* <!-- search box --> */}
              <SearchForm />
              {/* <!-- Popular Category box --> */}
              <div className="shadow-1 bg-white rounded-xl mt-7.5">
                <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
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
              <div className="shadow-1 bg-white rounded-xl mt-7.5">
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

export default BlogDetails;
