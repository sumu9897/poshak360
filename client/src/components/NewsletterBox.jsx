import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center px-4">
      <p className="text-2xl font-semibold text-gray-900">
        Subscribe & Get <span className="text-red-500">20% Off</span>
      </p>
      <p className="text-gray-500 mt-2 max-w-lg mx-auto">
        Join the Poshak360 family and be the first to know about new arrivals, exclusive offers, and style inspiration — delivered straight to your inbox.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-2/3 lg:w-1/2 flex items-center gap-2 mx-auto my-6 bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden"
      >
        <input
          className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white text-sm px-6 py-3 rounded-full transition-colors"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
