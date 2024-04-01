import { useEffect, useState } from "react";

const CardPopup = () => {
  const [info,setInfo] = useState<string[]>([])

  useEffect(() => {
    const getData = () => {
      const data = localStorage.getItem("cartInfo");
      if(data) {
        const parsedData = JSON.parse(data);
        setInfo(parsedData);
      }
    }
    getData()
  },[])

  return (
    <div className="hidden xl:flex md:flex md:absolute xl:absolute bg-white top-[80px] xl:right-[-80px] md:right-0 shadow-md border border-black w-[300px]">
        <h1 className="text-[#1D2026] font-bold py-7 px-[24px]">Cart</h1>
        <hr />
        <div className="flex py-16 justify-center bg-[rgba(105, 112, 125, 1)] font-bold">Your cart is empty.</div>
        {info.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
    </div>
  )
}

export default CardPopup;