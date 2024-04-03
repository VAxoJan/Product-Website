import React, { useState } from 'react';
import basketLogo from '../images/basket.svg';
import profileLogo from '../images/profile.jpg';
import mobileButton from '../images/mobileButton.svg';
import logo from '../images/sneakers.svg';
import CardPopup from '../CardPopup/CardPopup';
import MobilePopup from '../MobileLeftPopup/MobilePopup';

const Header: React.FC<any> = ({ counter }) => {
  const [popup, setPopup] = useState(false);
  const [mobilePopup, setMobilePopup] = useState<boolean>(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleMobilePopup = () => {
    setMobilePopup(!mobilePopup);
  };

  return (
    <>
      <div className="flex justify-between xl:px-32">
        <div className="flex">
          <img
            onClick={handleMobilePopup}
            className="flex xl:hidden mx-4 items-center"
            src={mobileButton}
            alt=""
          />
          {mobilePopup && <MobilePopup onClick={handleMobilePopup} />}
          <img src={logo} />
          <div className="lg:flex hidden lg:object-none mx-20 gap-[32px] py-6 font-headerFont text-[#69707D] text-md items-center">
            <p className="hover:border-b border-[#ff7e1b] cursor-pointer">Collections</p>
            <p className="hover:border-b border-[#ff7e1b] cursor-pointer">Men</p>
            <p className="hover:border-b border-[#ff7e1b] cursor-pointer">Women</p>
            <p className="hover:border-b border-[#ff7e1b] cursor-pointer">About</p>
            <p className="hover:border-b border-[#ff7e1b] cursor-pointer">Contact</p>
          </div>
        </div>
        <div className="flex relative gap-5 lg:gap-11 items-center py-5">
          <img onClick={handlePopup} className="cursor-pointer" src={basketLogo} alt="Basket" />
          <div className="absolute flex lg:top-[28px] xl:top-[28px] xl:left-[10px] top-[17px] left-[6px] w-[19px] h-[13px] bg-[#FF7E1B] rounded-full items-center justify-center">
            <h1 className="text-white font-bold">{counter}</h1>
          </div>
          <img className="w-6 h-6 lg:w-12 lg:h-12 rounded-full" src={profileLogo} />
          {popup && <CardPopup/>}
        </div>
      </div>
    </>
  );
};

export default Header;
