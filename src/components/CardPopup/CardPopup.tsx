import React, { useState } from "react";
import logo from "../images/shoes.svg";
import trash from "../images/trash.svg";

interface CardPopupProps {
  counter: number;
}

const CardPopup: React.FC<CardPopupProps> = ({ counter }) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const pricePerItem = 125.0;
  const totalPrice = isDeleted ? 0 : pricePerItem * counter;

  return (
    <div className="hidden rounded-xl xl:block md:hidden md:absolute xl:absolute bg-white top-[80px] xl:right-[-80px] md:right-0 shadow-2xl xl:h-[250px] h-0 w-[300px] font-headerFont">
      <h1 className="text-[#1D2026] font-bold py-7 px-[24px]">Cart</h1>
      <hr />
      <div className="flex px-4 gap-4 mt-5">
        <img className="w-12 h-12 rounded-md" src={logo} alt="Shoe logo" />
        <div className="block">
          <p className="text-sm">Fall Limited Edition Sneakers</p>
          <div className="flex gap-1">
            <p>
              ${pricePerItem.toFixed(2)} x {!isDeleted ? counter : 0} = $
              {totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsDeleted(true)}
        className="flex justify-center cursor-pointer gap-5 font-bold  h-14 items-center text-white rounded-xl mt-6 mx-4  bg-[#FF7E1B]"
      >
        <p>Remove Item</p>
        <img className="cursor-pointer" src={trash} alt="Trash icon" />
      </div>
    </div>
  );
};

export default CardPopup;
