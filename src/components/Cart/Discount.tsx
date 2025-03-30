import React from "react";

const Discount = () => {
  return (
    <div className=" border-t border-gray-3 w-full">
      <form>
        {/* <!-- coupon box --> */}
        <div className=" shadow-1  ">
          {/* <div className="border-b border-gray-3 py-5 px-4 sm:px-5.5">
            <h3 className="">Have any discount code?</h3>
          </div> */}

          <div className="py-8 px-4 sm:px-8.5 flex justify-between ">
            <div className="flex flex-grow gap-3 xl:gap-3">
              <div className="max-w-[326px] w-full">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Coupon Code"
                  className="rounded-md border border-gray-3 bg-white placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent  focus:ring-2 focus:ring-dark-5"
                />
              </div>

              <button
                type="submit"
                className="inline-flex  text-xs items-center uppercase font-semibold text-dark bg-white border border-dark-3 hover:text-white hover:border-none py-2.5 px-8 rounded-md ease-out duration-200 hover:bg-[#E53E3E]"
              >
                APPLY COUPON
              </button>
            </div>
            <div className="">
              <button
                type="submit"
                className="inline-flex uppercase font-medium text-white bg-[#E53E3E] py-2.5 px-8 rounded-md ease-out duration-200 hover:bg-[#f44242]"
              >
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discount;
