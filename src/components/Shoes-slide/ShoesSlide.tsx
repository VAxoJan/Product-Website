import { useState } from "react";
import { shoe1, shoe2, shoe3, shoe4, shoes } from "..";

const ShoesSlide = () => {
    const [selectedShoe, setSelectedShoe] = useState<string>(shoes);

    const handleShoeImg = (shoeImg: string) => {
        setSelectedShoe(shoeImg)
    }

    return (
        <div className="md:w-1/2 xl:grid xl:justify-center">
            <img
                src={selectedShoe}
                className="w-full xl:w-[445px] 2xl:h-400px mt-[-70px] xl:mt-0 rounded-2xl hover:"
                alt="Shoes"
            />
            <div className="md:flex gap-6 my-4 hidden">
                <img
                    onClick={() => handleShoeImg(shoes)}
                    className="w-[88px] cursor-pointer rounded-xl"
                    src={shoe1}
                    alt="Shoe 1" />
                <img onClick={() => handleShoeImg(shoe2)}
                    className="cursor-pointer"
                    src={shoe2}
                    alt="Shoe 2" />
                <img
                    onClick={() => handleShoeImg(shoe3)}
                    className="cursor-pointer"
                    src={shoe3}
                    alt="Shoe 3" />
                <img
                    onClick={() => handleShoeImg(shoe4)}
                    className="cursor-pointer"
                    src={shoe4}
                    alt="Shoe 4" />
            </div>
        </div>
    )
}

export default ShoesSlide;