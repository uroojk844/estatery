"use client";
import { useState } from "react";
import Button from "./Button";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const VirtualHome = () => {
  const [curTab, setCurTab] = useState(0);

  const tabs = [
    {
      name: "For tenants",
    },
    {
      name: "For landlords",
    },
  ];

  return (
    <section className="flex max-sm:flex-col justify-between items-center p-8 sm:p-24">
      <div className="max-sm:mb-8">
        <Image
          src="/home.jpg"
          className="rounded-lg"
          width={450}
          height={500}
          alt="home"
        />
      </div>
      <div>
        <div className="flex gap-2 border border-indigo-100 bg-indigo-50/10 w-max rounded-xl p-1.5 mb-9">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setCurTab(i)}
              className={`px-4 py-1.5 border font-[500] rounded-md active:scale-95 transition-all ${
                curTab === i
                  ? " bg-indigo-50/20 text-indigo-600 border-gray-200"
                  : "btn-ghost text-gray-400"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="grid gap-8 sm:justify-items-start">
          <div className="text-3xl text-indigo-950 font-[600] max-w-[360px] max-sm:text-center">
            We make it easy for tenants and landlords.
          </div>
          <div className="text-sm text-gray-400 max-w-[360px] max-sm:text-center">
            Whether it&apos;s selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you&apos;ll
            save a bunch of money and time with our services.
          </div>
          <Button>
            See more <FaChevronRight size="10" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VirtualHome;
