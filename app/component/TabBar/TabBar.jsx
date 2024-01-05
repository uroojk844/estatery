"use client";
import TabButton from "./TabButton";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { FaSpinner } from "react-icons/fa";
import RentTab from "./RentTab";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Rent",
      component: () => <RentTab />,
    },
    {
      name: "Buy",
      component: () => {},
    },
    {
      name: "Sell",
      component: () => {},
    },
  ];
  return (
    <div className="max-sm:mb-6 sm:mt-6">
      <div className="flex sm:w-max rounded-tl-xl rounded-tr-xl bg-white">
        {tabs.map((tab, i) => (
          <TabButton
            key={i}
            index={i}
            setActiveTab={setActiveTab}
            isActive={activeTab == i}
          >
            {tab.name}
          </TabButton>
        ))}
      </div>
      <div className="bg-white rounded-tl-none rounded-xl max-sm:rounded-tr-none w-max">
        <Suspense fallback={<FaSpinner color="#f00" />}>
          {tabs[activeTab].component()}
        </Suspense>
      </div>
    </div>
  );
};

export default TabBar;
