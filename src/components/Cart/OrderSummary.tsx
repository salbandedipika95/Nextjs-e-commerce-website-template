import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  // Shipping state
  const [shipping, setShipping] = useState(0);

  return (
    <div className="lg:max-w-[455px] w-full">
      {/* Order Summary Box */}
      <div className="bg-gray-2 shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">Cart Totals</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* Subtotal Section */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <p className="font-medium text-dark">Subtotal</p>
            <p className="font-medium text-dark">${totalPrice.toFixed(2)}</p>
          </div>

          {/* Shipping Options */}
          <div className="py-5 border-b border-gray-3 flex justify-between">
            <p className="font-medium text-dark">Shipping</p>
            <div>
              <div className="flex flex-col space-y-2">
                <label className="flex text-dark text-medium items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="0"
                    style={{accentColor:"black"}}
                    checked={shipping === 0}
                    onChange={() => setShipping(0)}
                    className="accent-black"
                  />
                  Free Shipping
                </label>

                <label className="flex text-medium text-dark items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="10"
                    style={{accentColor:"black"}}
                    checked={shipping === 10}
                    onChange={() => setShipping(10)}
                    className="accent-black peer-checked:bg-black"
                  />
                  Flat Rate 
                </label>

                <label className="flex text-medium text-dark items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="5"
                    style={{accentColor:"black"}}
                    checked={shipping === 5}
                    onChange={() => setShipping(5)}
                    className="accent-black"
                  />
                  Local Pickup 
                </label>
              </div>

              <p className="text-gray-500 text-sm mt-2">
                Shipping options will be updated <br /> during checkout
              </p>
              <button className="text-dark font-medium mt-3 ">
                Calculate Shipping
              </button>
            </div>
          </div>

          {/* Total Section */}
          <div className="flex items-center justify-between pt-5">
            <p className="font-medium text-lg text-dark">Total</p>
            <p className="font-medium text-lg text-dark">
              ${(totalPrice + shipping).toFixed(2)}
            </p>
          </div>

          {/* Checkout Button */}
          <button
            type="submit"
            className="w-full uppercase flex justify-center font-medium text-white bg-[#E53E3E] py-3 px-6 rounded-md ease-out duration-200 hover:bg-[#f34242] mt-7.5"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
