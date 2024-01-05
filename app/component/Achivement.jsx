const Achivement = ({ achivement }) => {
  return (
    <div className="border-l-2 pl-4">
      <div className="text-indigo-500 text-3xl font-bold">
        {achivement.title}
      </div>
      <div className="text-sm text-gray-400">{achivement.label}</div>
    </div>
  );
};

export default Achivement;
