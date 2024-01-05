import { FaTag } from "react-icons/fa";

const BenefitCard = ({ benefit }) => {
  return (
    <div className="flex gap-4 sm:flex-col">
      <div className="icon h-11 w-11 rounded-full grid sm:mx-auto place-items-center outline outline-1 outline-indigo-100 outline-offset-2 bg-indigo-200/70">
        {benefit.icon}
      </div>
      <div className="space-y-1 sm:text-center">
        <div className="text font-[700] text-indigo-950">{benefit.title}</div>
        <div className="text-xs text-gray-400">{benefit.label}</div>
      </div>
    </div>
  );
};

export default BenefitCard;
