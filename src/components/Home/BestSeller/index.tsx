import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import Link from "next/link";
import shopData from "@/components/Shop/shopData";
import blogData from "@/components/BlogGrid/blogData";
import BlogItem from "@/components/Blog/BlogItem";

const BestSeller = () => {
  return (
    <section className="overflow-hidden pb-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- section title --> */}
        <div className="mb-10 flex items-center text-center justify-center">
          <div>
            <h2 className="font-semibold  text-center uppercase text-xl xl:text-heading-5 text-dark">
              Our Latest News Insight
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7.5">
          {/* <!-- blog item --> */}
          {blogData.slice(1, 4).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
