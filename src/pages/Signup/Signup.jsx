import { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const [passwordVisibilty, setPasswordVisibility] = useState(false);

  return (
    <div className="flex flex-col gap-5 justify-center items-center flex-1 ml-20 md:ml-0 ">
      <div className="border border-sm dark:border-gray-500 p-2 w-72 h-[34rem] sm:w-[24rem] sm:h-[40rem] md:w-[30rem] md:h-[46rem] rounded-sm flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center box-shadow--theme">
        <form className="items-center flex flex-col justify-center text-left w-full px-2 sm:px-8">
          <h1 className="text-2xl w-full sm:text-4xl text-left font-bold">
            Signup
          </h1>
          <label className="w-full mt-3 sm:mt-4 md:mt-5">
            <input
              type="text"
              name="firstName"
              className={`text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="First Name*"
            />
          </label>
          <label className="w-full mt-3 sm:mt-4 md:mt-5">
            <input
              type="text"
              name="lastName"
              className={`text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="LastName*"
            />
          </label>

          <label className="w-full mt-3 sm:mt-4 md:mt-5">
            <input
              type="text"
              name="email"
              className={`text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="Email*"
            />
          </label>

          <label className="w-full mt-3 sm:mt-4 md:mt-5 relative">
            <input
              autoComplete="current-password"
              type={passwordVisibilty ? `text` : `password`}
              name="password"
              className={`text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="Password*"
            />
            <button
              type="button"
              onClick={() => setPasswordVisibility((visible) => !visible)}
              className="absolute text-base sm:text-xl right-4 top-2 md:top-3">
              <i
                className={`fa-solid ${
                  passwordVisibilty ? `fa-eye-slash` : `fa-eye`
                }`}></i>
            </button>
          </label>

          <label className="w-full mt-3 sm:mt-4 md:mt-5 relative">
            <input
              autoComplete="current-password"
              type={passwordVisibilty ? `text` : `password`}
              name="confirmPassword"
              className={`text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="Confirm Password*"
            />
            <button
              type="button"
              onClick={() => setPasswordVisibility((visible) => !visible)}
              className="absolute text-base sm:text-xl right-4 top-2 md:top-3">
              <i
                className={`fa-solid ${
                  passwordVisibilty ? `fa-eye-slash` : `fa-eye`
                }`}></i>
            </button>
          </label>
          <button
            type="submit"
            className="px-10 mt-5 text-base sm:text-xl py-2 md:py-3 w-full rounded-md text-white dark:text-inherit font-semibold bg-brightRed">
            Create Account
          </button>
        </form>
        <h2 className="text-base sm:text-xl font-semibold">
          Already have an account?
        </h2>
        <Link
          className="text-base sm:text-xl text-blue-500 underline underline-offset-4 hover:text-blue-300"
          to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export { Signup };
