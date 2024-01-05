const Button = ({ children, type = "primary", size}) => {
  return (
    <button
      className={`flex gap-2 justify-center items-center rounded-lg py-2 px-4 transition-all active:scale-95
    ${size == "full" && "flex-1"}
    ${size == "lg" && "px-8 py-4"}
    ${type == "primary" && "bg-indigo-500/95 hover:bg-indigo-600 text-white"}
    ${type == "outline" && "border text-indigo-950 border-gray-400"}`}
    >
      {children}
    </button>
  );
};

export default Button;
