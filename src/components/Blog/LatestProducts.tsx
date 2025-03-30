import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestProducts = ({ products }) => {
  return (
    <div className="border border-gray-3 bg-white rounded-xl mt-7.5">
      <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
        <h2 className="font-medium text-lg text-dark">Instagram Posts</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-3">
          {/* <!-- product item --> */}
          {products.slice(0, 2).map((product, key) => (
            <div className="flex items-center gap-3" key={key}>
              <div className="flex items-center justify-center  bg-gray-3  w-full h-17.5">
                {/* <Image src={product.imgs?.thumbnails?.[0]} alt="product" width={74} height={74} /> */}
              </div>

              <div className="flex items-center justify-center  bg-gray-3  w-full h-17.5">
                {/* <h3 className="font-medium text-dark mb-1 ease-out duration-200 hover:text-blue">
                  <Link href="/shop-details"> {product.title} </Link>
                </h3>
                <p className="text-custom-sm">Price: ${product.price}</p> */}
              </div>
              <div className="flex items-center justify-center  bg-gray-3  w-full h-17.5"></div>
              <div className="flex items-center justify-center  bg-gray-3  w-full h-17.5"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
