const InputGroup = ({ children, label }) => {
  return (
    <div className="grid">
      <label htmlFor={label} className="text-gray-400 space-y-2">
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputGroup;
