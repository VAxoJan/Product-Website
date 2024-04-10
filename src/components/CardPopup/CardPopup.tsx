import React from "react";
import logo from "../images/shoes.svg";
import trash from "../images/trash.svg";

interface CardPopupProps {
  counter: number;
}

const CardPopup: React.FC<CardPopupProps> = ({ counter }) => {
  const pricePerItem = 125.00;
  const totalPrice = pricePerItem * counter;

  return (
    <div className="hidden rounded-xl xl:block md:flex md:absolute xl:absolute bg-white top-[80px] xl:right-[-80px] md:right-0 shadow-2xl xl:h-[250px] h-0 w-[300px] font-headerFont">
      <h1 className="text-[#1D2026] font-bold py-7 px-[24px]">Cart</h1>
      <hr />
      <div className="flex px-4 gap-4 mt-5">
        <img className="w-12 h-12 rounded-md" src={logo} alt="Shoe logo" />
        <div className="block">
          <p className="text-sm">Fall Limited Edition Sneakers</p>
          <img
            className="absolute right-[13px] bottom-[129px]"
            src={trash}
            alt="Trash icon"
          />
          <div className="flex gap-1">
            <p>${pricePerItem.toFixed(2)} x {counter} = ${(totalPrice).toFixed(2)}</p>
            <p className="text-black font-bold"></p>
          </div>
        </div>
      </div>
      <button className="flex font-bold px-[100px] h-14 items-center text-white rounded-xl mt-6 mx-4  bg-[#FF7E1B]">
        Checkout
      </button>
    </div>
  );
};

export default CardPopup;
