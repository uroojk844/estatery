import { FaBuilding, FaDollarSign, FaPercentage } from "react-icons/fa";
import BenefitCard from "./BenefitCard";

const TheNewWay = () => {
  const benefits = [
    {
      icon: <FaPercentage />,
      title: "7.4%",
      label: "Property Return Rate",
    },
    {
      icon: <FaBuilding />,
      title: "3,856",
      label: "Property in Sell & Rent",
    },
    {
      icon: <FaDollarSign />,
      title: "2,540",
      label: "Daily Completed Transactions",
    },
  ];
  return (
    <section className="p-8 sm:p-24">
      <div className="border p-8 sm:p-12 rounded-md bg-indigo-50/50">
        <div className="text-3xl sm:text-4xl max-w-[360px] mb-6 font-[600] text-indigo-950">
          The new way to find your new home
        </div>
        <div className="text-sm sm:text max-w-[300px] leading-relaxed text-gray-400 mb-8">
          Find your dream place to live in with more than 10k. properties
          listed.
        </div>
        <div className="flex gap-6 max-sm:flex-col">
          {benefits.map((benefit, index) => (
            <BenefitCard benefit={benefit} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheNewWay;
