import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { SignupUser } from "../../actions";
import { FormError } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function Signup() {
  const { error, status } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [passwordVisibilty, setPasswordVisibility] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (error === 422) {
      formik.setErrors({ email: "Email already exists" });
    }
    // eslint-disable-next-line
  }, [error]);
  useEffect(() => {
    if (status) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line
  }, [status]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invaild email address")
        .required("This field is required"),
      password: Yup.string()
        .required("This field is required")
        .min(8, "Password should be minimum of 8 characters"),
      confirmPassword: Yup.string()
        .required("This field is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),

    onSubmit: (values) => {
      let signupValues = { ...values };
      delete signupValues["confirmPassword"];
      dispatch(SignupUser(signupValues));
    },
  });
  useDocumentTitle("Signup | Clutch VODS");
  return (
    <div className="flex flex-col gap-5 justify-center items-center flex-1 ml-20 md:ml-0 ">
      <div className="border border-sm dark:border-gray-500 p-2 w-72 h-[34rem] sm:w-[24rem] sm:h-[40rem] md:w-[30rem] md:h-[46rem] rounded-sm flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center box-shadow--theme">
        <form
          onSubmit={formik.handleSubmit}
          className="items-center flex flex-col justify-center text-left w-full px-2 sm:px-8">
          <h1 className="text-2xl w-full sm:text-4xl text-left font-bold">
            Signup
          </h1>
          <label className="w-full mt-3 sm:mt-4 md:mt-5">
            <input
              type="text"
              name="firstName"
              className={`${
                formik.errors.firstName && formik.touched.firstName
                  ? `border-rose-500 dark:border-rose-500`
                  : `border-gray-300`
              } 
               text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="First Name*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
          </label>
          {formik.errors.firstName && formik.touched.firstName && (
            <FormError>{formik.errors.firstName}</FormError>
          )}{" "}
          <label className="w-full mt-3 sm:mt-4 md:mt-5">
            <input
              type="text"
              name="lastName"
              className={`${
                formik.errors.lastName && formik.touched.lastName
                  ? `border-rose-500 dark:border-rose-500`
                  : `border-gray-300`
              } 
               text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="LastName*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
          </label>
          {formik.errors.lastName && formik.touched.lastName && (
            <FormError>{formik.errors.lastName}</FormError>
          )}{" "}
          <label className="w-full mt-3 sm:mt-4 md:mt-5">
            <input
              type="text"
              name="email"
              className={`${
                formik.errors.email && formik.touched.email
                  ? `border-rose-500 dark:border-rose-500`
                  : `border-gray-300`
              } 
               text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="Email*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          {formik.errors.email && formik.touched.email && (
            <FormError>{formik.errors.email}</FormError>
          )}
          <label className="w-full mt-3 sm:mt-4 md:mt-5 relative">
            <input
              autoComplete="current-password"
              type={passwordVisibilty ? `text` : `password`}
              name="password"
              className={`${
                formik.errors.password && formik.touched.password
                  ? `border-rose-500 dark:border-rose-500`
                  : `border-gray-300`
              } 
               text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="Password*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
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
          {formik.errors.password && formik.touched.password && (
            <FormError>{formik.errors.password}</FormError>
          )}
          <label className="w-full mt-3 sm:mt-4 md:mt-5 relative">
            <input
              autoComplete="current-password"
              type={passwordVisibilty ? `text` : `password`}
              name="confirmPassword"
              className={`${
                formik.errors.password && formik.touched.password
                  ? `border-rose-500 dark:border-rose-500`
                  : `border-gray-300`
              } 
               text-base w-full bg-inherit sm:text-xl p-2 md:p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="Confirm Password*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
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
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <FormError>{formik.errors.confirmPassword}</FormError>
          )}
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
