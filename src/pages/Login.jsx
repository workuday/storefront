import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [useEmail, setUseEmail] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* LEFT BANNER */}

      <div className="hidden md:flex md:w-1/2">
        <img
          src="/media/gocery-ads.jpg"
          alt="Food"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* RIGHT FORM LOGIN */}

      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="max-w-md w-full">
          {/* LOGO + BACK BUTTON */}
          <div className="flex flex-col items-center mb-6">
            <Link to="/" className="font-bold text-3xl">
              .Logo
            </Link>
          </div>

          {/* LOGIN FORM */}
          <form className="space-y-6">
            {useEmail ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border-b border-gray-300 focus:border-orange-500 mt-2 py-2 px-2 outline-none text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border-b border-gray-300 focus:border-orange-500 mt-2 py-2 px-2 outline-none text-gray-700"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
                >
                  LOGIN
                </button>

                                <div className="flex items-center my-4">
                  <hr className="flex-grow border-gray-300" />
                  <span className="px-2 text-gray-400 text-sm">OR</span>
                  <hr className="flex-grow border-gray-300" />
                </div>

              {/* MOBILE OTP */}

                  <button
                    type="button"
                    onClick={() => setUseEmail(false)}
                     className="w-full bg-red hover:bg-red-100 text-orange-500 font-semibold py-3 rounded-md transition"
                  >
                    USE MOBILE NUMBER
                  </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <div className="flex items-center border-b border-gray-300 focus-within:border-orange-500 mt-2">
                    <span className="text-gray-700 pr-2">+91</span>
                    <input
                      type="text"
                      placeholder="Enter mobile number"
                      className="flex-1 py-2 px-2 outline-none text-gray-700"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-[#FB8700] text-white font-semibold py-3 rounded-md transition"
                >
                  GET OTP
                </button>

                <div className="flex items-center my-4">
                  <hr className="flex-grow border-gray-300" />
                  <span className="px-2 text-gray-400 text-sm">OR</span>
                  <hr className="flex-grow border-gray-300" />
                </div>
                <button
                  type="button"
                  onClick={() => setUseEmail(true)}
                  className="w-full bg-red hover:bg-red-100 text-orange-500 font-semibold py-3 rounded-md transition"
                >
                  LOGIN WITH EMAIL ADDRESS
                </button>
              </>
            )}
          </form>

          {/* BACK BUTTON */}
          <div className="my-6 flex justify-center">
            <Link
              to="/"
              className="inline-block bg-orange-500 hover:bg-[#FB8700] text-white font-medium py-2 px-4 rounded-md transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
