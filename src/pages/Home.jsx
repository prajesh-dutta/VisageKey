import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-40 md:pt-60 md:pb-24 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 drop-shadow-lg">
          Welcome To
        </h1>
        <h1 className="text-4xl p-6 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-900 drop-shadow-xl">
        VisageKey
        </h1>
        <p className="mt-10 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Experience seamless authentication with our facial recognition-based system, powered by <span className="font-semibold text-green-700">React</span> and <span className="font-semibold text-green-700">face-api.js</span>. Secure, fast, and reliable access at your fingertips.
        </p>
        <Link
          to={"/user-select"}
          className="flex items-center gap-3 mt-12 w-fit mx-auto py-3 px-8 rounded-full bg-green-600 text-white text-lg font-medium shadow-lg transition-transform transform hover:scale-105 hover:bg-green-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
          <span>Enter</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
