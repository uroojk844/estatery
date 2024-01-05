import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { LuBedDouble } from "react-icons/lu";
import { BiBath } from "react-icons/bi";
import PopularTag from "./PopularTag";
import Facility from "./Facility";

const Card = ({ popular = false }) => {
  const facilities = [
    {
      icon: <LuBedDouble />,
      text: (
        <>
          3 <span className="max-sm:hidden">Beds</span>
        </>
      ),
    },
    {
      icon: <BiBath />,
      text: (
        <>
          2 <span className="max-sm:hidden">Bathrooms</span>
        </>
      ),
    },
    {
      icon: <LuBedDouble />,
      text: (
        <>
          5x7
          <span>
            m<sup>2</sup>
          </span>
        </>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-gray-100 max-sm:min-w-[270px]">
      <Image
        className="rounded-t-lg aspect-video"
        src="/home.jpg"
        width={360}
        height={200}
        alt="home"
      />
      <div className="px-5 py-6 relative">
        {popular && <PopularTag />}
        <div className="flex justify-between items-center">
          <div className="text">
            <span className="text-indigo-500 font-bold text-2xl">$2,095</span>
            <span className="text-gray-400 font-[500]">/month</span>
          </div>
          <div className="w-11 h-11 border rounded-full grid place-items-center text-indigo-500">
            <FaRegHeart />
          </div>
        </div>
        <div className="text-xl text-indigio-950 font-bold mb-2 text-indigo-950">
          Palm Harbor
        </div>
        <div className="text-sm text-indigio-950 text-gray-400 border-b border-gray-100 pb-3 whitespace-nowrap text-ellipsis">
          2699 Green Valley, Highland Lake, FL
        </div>
        <div className="flex pt-3 justify-between text-gray-500 text-sm">
          {facilities.map((facility, index) => (
            <Facility facility={facility} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
