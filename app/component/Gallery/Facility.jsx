const Facility = ({ facility }) => {
  return (
    <div className="flex items-center gap-x-1.5 ">
      <span className="text-indigo-500">{facility.icon}</span> {facility.text}
    </div>
  );
};

export default Facility;
