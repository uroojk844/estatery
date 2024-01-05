const UserComment = ({user}) => {
  return (
    <div className="mb-12">
      <div className="text-lg max-w-[680px] font-[500] mb-8">
        <q>{user.comment}</q>
      </div>
      <span className="text-indigo-950 font-[600]">{user.name},</span>{" "}
      <span className="text-gray-400 capitalize">{user.role}</span>
    </div>
  );
};

export default UserComment;
