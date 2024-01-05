import Achivement from "./Achivement";
import TabBar from "./TabBar/TabBar";

const Landing = () => {
  const achivements = [
    { title: "50k+", label: "renters" },
    { title: "10k+", label: "properties" },
  ];

  return (
    <section className="bg-gray-50 flex flex-col gap-y-6 px-24 py-12 max-sm:p-8 max-sm:place-items-center text-indigo-950 min-h-[calc(100vh-74px)]">
      <div className="text-4xl sm:text-5xl max-sm:text-center max-w-[380px] font-[600]">
        Buy, rent, or sell your property easily
      </div>

      <div className="text max-sm:text-xl max-sm:text-center max-w-[380px] mb-5">
        A great platform to buy, sell, or even rent your properties without any
        commisions.
      </div>

      <div className="flex gap-x-16 max-sm:w-full max-sm:justify-evenly max-sm:order-2">
        {achivements.map((achivement, index) => (
          <Achivement achivement={achivement} key={index} />
        ))}
      </div>

      <TabBar />
    </section>
  );
};

export default Landing;
