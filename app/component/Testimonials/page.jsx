"use client";
import Avatar from "./Avatar";
import { useState } from "react";
import UserComment from "./UserComment";

const TestmonialsSection = () => {
  const comments = [
    {
      name: "Mira Culos",
      role: "renter",
      comment:
        "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or tojust look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
      img: "/person1.jpg",
    },
    {
      name: "John Doe",
      role: "renter",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla suscipit iste ipsa neque accusamus quia animi consectetur, architecto, autem omnis cupiditate placeat.",
      img: "/person2.jpg",
    },
  ];

  const [currentUser, setCurrentUser] = useState(0);

  return (
    <section className="p-8 sm:p-24 grid justify-items-center text-center">
      <div className="text-4xl text-indigo-950 font-bold mb-6">
        Testimonials
      </div>
      <div className="text-sm max-w-[320px] text-gray-600 leading-relaxed mb-12">
        See what our property managers, landlords, and tenants have to say
      </div>

      <UserComment user={comments[currentUser]} />

      <div className="flex gap-8 items-center">
        {comments.map((user, index) => (
          <Avatar
            changeComment={setCurrentUser}
            src={user.img}
            index={index}
            key={index}
            active={currentUser === index}
          />
        ))}
      </div>
    </section>
  );
};

export default TestmonialsSection;
