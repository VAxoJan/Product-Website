import Header from "../Header/Header";
import shoes from "../images/shoes.svg";
import basket from "../images/Shape (1).svg";
import shoe1 from "../images/1.svg";
import shoe2 from "../images/2.svg";
import shoe3 from "../images/3.svg";
import shoe4 from "../images/4.svg";

const MainWork = () => {
  return (
    <div className="w-full">
      <Header />
      <hr />
      <div className="grid md:flex md:gap-10 w-full mt-24 px-4 md:px-0">
        <div className="md:w-1/2 xl:grid xl:justify-center">
          <img src={shoes} className="w-full xl:w-[445px]  2xl:h-400px mt-[-70px] xl:mt-0" />
          <div className="md:flex gap-6 my-4 hidden">
            <img className="cursor-pointer" src={shoe1} />
            <img className="cursor-pointer" src={shoe2} />
            <img className="cursor-pointer" src={shoe3} />
            <img className="cursor-pointer" src={shoe4} />
          </div>
        </div>
        <div className="md:w-1/2 py-12">
          <p className="text-[#ff7e1b] font-headerFont font-bold text-sm">
            Sneaker Company
          </p>
          <h1 className="text-2xl md:text-4xl leading-10 md:leading-12 my-4 md:my-7">
            Fall Limited Edition <br /> Sneakers
          </h1>
          <p className="text-base text-[#69707d] leading-7 md:leading-8">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="w-32 my-6">
            <div className="flex justify-between">
              <h1 className="text-[#1D2026] text-base font-bold">$125</h1>
              <p className="flex items-center justify-center w-12 h-6 bg-[#FFEEE2] text-[#FF7E1B]">
                50%
              </p>
            </div>
            <h1 className="text-[#B6BCC8] line-through text-sm">\$250</h1>
          </div>
          <div className="flex gap-2 md:gap-4 rounded-lg">
            <div className="flex justify-between items-center px-3 md:px-5 w-20 md:w-32 h-10 md:h-14 bg-[#F6F8FD]">
              <h1 className="text-lg md:text-2xl">-</h1>
              <h1 className="text-lg md:text-2xl">12</h1>
              <h1 className="text-lg md:text-2xl">+</h1>
            </div>
            <div className="flex w-full md:w-auto h-10 md:h-14 bg-[#FF7E1B] justify-center items-center gap-1 md:gap-2 rounded-lg  xl:w-[172px]">
              <img className="w-4 h-4 md:w-6 md:h-6" src={basket} />
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
