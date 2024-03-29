import Header from "../Header/Header";
import shoes from "../images/shoes.svg";
import basket from "../images/Shape (1).svg";
import shoe1 from "../images/1.svg";
import shoe2 from "../images/2.svg";
import shoe3 from "../images/3.svg";
import shoe4 from "../images/4.svg";

const MainWork = () => {
  return (
    <div className="w-[85%] m-auto">
      <Header />
      <hr />
      <div className="flex gap-[10rem] w-full mt-24 h-[500px] px-14 py-6">
        <div>
          <img src={shoes} />
          <div className="flex gap-[31px] my-[32px]">
            <img className="cursor-pointer" src={shoe1} />
            <img className="cursor-pointer" src={shoe2} />
            <img className="cursor-pointer" src={shoe3} />
            <img className="cursor-pointer" src={shoe4} />
          </div>
        </div>
        <div className="py-12 w-[445px]">
          <p className="text-[#ff7e1b] font-headerFont font-bold text-sm">
            Sneaker Company
          </p>
          <h1 className="text-[44px] leading-[48px] my-7">
            Fall Limited Edition <br /> Sneakers
          </h1>
          <p className="text-base text-[#69707d] leading-[26px]]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="w-[173px] border border-black my-6">
            <div className="flex justify-between">
              <h1 className="text-[#1D2026] text-lg font-bold">$125</h1>
              <p className="flex w-[51px] h-[27px] bg-[#FFEEE2] text-[#FF7E1B] justify-center">
                50%
              </p>
            </div>
            <h1 className="text-[#B6BCC8] line-through">%250</h1>
          </div>
          <div className="flex gap-[16px] rounded-xl">
            <div className="flex justify-between items-center px-5 w-[157px] h-[56px] bg-[#F6F8FD]">
              <h1 className="text-[30px]">-</h1>
              <h1>12</h1>
              <h1 className="text-[20px]">+</h1>
            </div>
            <div className="flex w-[272px] h-[56px] bg-[#FF7E1B] justify-center items-center gap-[15px] rounded-xl">
              <img className="w-[16px] h-[16px]" src={basket} />
              <button className="text-[#ffffff] font-bold font-headerFont">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWork;
