import Button from "./Button";

const NewsLetter = () => {
  return (
    <section className="p-8 sm:py-16 text-center bg-indigo-950 grid justify-items-center">
      <div className="text-xl text-indigo-400 font-[600] mb-4">No Spam Promise</div>
      <div className="text-3xl sm:text-4xl text-white font-[600] mb-5">Are you a landlord?</div>
      <div className="text text-gray-400">
        Discover ways to increase your home&apos;s value and get listed. No Spam.
      </div>
      <div className="sm:bg-gray-50 sm:p-4 flex gap-4 flex-wrap rounded-xl my-7">
        <input className="max-w-80 max-sm:w-full p-3 rounded-lg" type="text" placeholder="Enter your email address" />
        <Button size="full">Submit</Button>
      </div>
      <div className="text-sm text-gray-400">
        Join <span className="text-white">10,000+</span> other landlords in our estatery community.
      </div>
    </section>
  );
};

export default NewsLetter;
