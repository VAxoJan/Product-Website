import React from 'react';
import mobileClosePopup from '../images/Combined Shape.svg';


const MobilePopup: React.FC<any> = ({ onClick }) => {
    return (
        <div className="block xl:hidden absolute bg-white shadow-md left-0 w-[250px] h-full px-[25px]">
            <img className='mt-[25px]' onClick={onClick} src={mobileClosePopup} alt="Close" />
            <div className='grid my-[53px] gap-[20px] font-headerFont text-rgba(29, 32, 38, 1) font-bold'>
                <div>
                    <h1>Collections</h1>
                </div>
                <div>
                    <h1>Men</h1>
                </div>
                <div>
                    <h1>Women</h1>
                </div>
                <div>
                    <h1>About</h1>
                </div>
                <div>
                    <h1>Contact</h1>
                </div>
            </div>
        </div>
    );
};

export default MobilePopup;
