import { BsStars } from "react-icons/bs";

const PopularTag = () => {
  return (
    <div className="flex gap-1 items-center popularTag px-3 py-1 rounded-lg rounded-bl-none -left-2 -top-3 bg-indigo-500 text-white text-xs absolute">
      <BsStars  /> POPULAR
    </div>
  );
};

export default PopularTag;
