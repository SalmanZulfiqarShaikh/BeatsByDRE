import React, { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return; // prevent empty submit
    setSubmitted(true);
    setEmail(""); // clear the input

    setTimeout(() => setSubmitted(false), 2000); // hide message after 2s
  };

  return (
    <section className="max-container py-20 px-6 md:px-12 text-center bg-zinc-950 text-white rounded-2xl shadow-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        Sign Up for{" "}
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          Updates
        </span>{" "}
        & Newsletter
      </h1>

      <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
        Stay updated with the latest Beats drops, exclusive offers, and
        premium audio insights delivered straight to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 px-6 py-4 rounded-full outline-none border border-gray-700 bg-zinc-900 focus:border-pink-500 transition-all duration-300 text-gray-200 focus:ring-2 focus:ring-pink-500 focus:ring-offset-1
"
        />
        <button
          type="submit"
          className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 transition-all duration-300"
        >
          Sign Up
        </button>
      </form>

      {submitted && (
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 text-sm mt-4 font-medium">
           Subscribed successfully!
        </p>
      )}
    </section>
  );
}

export default Subscribe;
