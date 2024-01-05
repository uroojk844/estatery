"use client";
const TabButton = ({ children, isActive, setActiveTab, index }) => {
  return (
    <div
      onClick={() => setActiveTab(index)}
      className={`border-b-2 py-3 w-24 max-sm:flex-1 text-center font-[600] cursor-pointer ${
        isActive && "border-indigo-500 text-indigo-500"
      }`}
    >
      {children}
    </div>
  );
};

export default TabButton;
