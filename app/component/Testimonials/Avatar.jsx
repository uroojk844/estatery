import Image from "next/image";

const Avatar = ({ changeComment, src, index, active = false }) => {
  return (
    <div
      onClick={() => changeComment(index)}
      className={`rounded-full overflow-hidden rotate-[45deg] ${
        active && "border-2 border-indigo-500 border-l-gray-200 p-1"
      }`}
    >
      <Image
        src={src}
        className="rounded-full rotate-[-45deg]"
        width={60}
        height={60}
        alt={src}
      />
    </div>
  );
};

export default Avatar;
