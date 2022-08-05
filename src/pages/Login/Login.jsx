import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginUser } from "../../actions";
import { FormError, SpinLoader } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
function Login() {
  const [passwordVisibilty, setPasswordVisibility] = useState(false);
  const dispatch = useDispatch();
  const { error, status, loading } = useSelector((store) => store.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invaild email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password should be minimum of 8 characters"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  const setLoginValues = () => {
    formik.setValues({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };

  useEffect(() => {
    if (error === 404) {
      formik.setErrors({ email: "Email not found" });
    }
    if (error === 401) {
      formik.setErrors({ password: "Invalid credentials" });
    }
    formik.errors = {};
    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (status) {
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    }
    // eslint-disable-next-line
  }, [status]);
  useDocumentTitle("Login | Clutch VODS");

  return (
    <div className="flex flex-col gap-5 justify-center items-center flex-1 ml-20 md:ml-0 ">
      <div className="border border-sm dark:border-gray-500 p-2 w-72 h-[28rem] sm:w-[24rem] sm:h-[30rem] md:w-[30rem] md:h-[30rem] rounded-sm flex flex-col gap-5 justify-center items-center box-shadow--theme">
        <form
          onSubmit={formik.handleSubmit}
          className="items-center flex flex-col justify-center text-left w-full px-2 sm:px-8">
          <h1 className="text-2xl w-full sm:text-4xl text-left font-bold">
            Login
          </h1>
          <label className="w-full mt-5">
            <input
              type="text"
              name="email"
              className={`${
                formik.errors.email && formik.touched.email
                  ? `border-rose-500 dark:border-rose-500`
                  : `border-gray-300`
              } 
               text-base w-full bg-inherit sm:text-xl p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="Email*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          {formik.errors.email && formik.touched.email && (
            <FormError>{formik.errors.email}</FormError>
          )}
          <label className="w-full mt-5 relative">
            <input
              autoComplete="current-password"
              type={passwordVisibilty ? `text` : `password`}
              name="password"
              className={`${
                formik.errors.password && formik.touched.password
                  ? `border-rose-500 dark:border-rose-500`
                  : `border-gray-300`
              } 
              } text-base w-full bg-inherit sm:text-xl p-3 rounded-md outline-none text-inherit box-shadow--theme border dark:border-white`}
              placeholder="Password*"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <button
              type="button"
              onClick={() => setPasswordVisibility((visible) => !visible)}
              className="absolute text-base sm:text-xl right-4 top-3">
              <i
                className={`fa-solid ${
                  passwordVisibilty ? `fa-eye-slash` : `fa-eye`
                }`}></i>
            </button>
          </label>
          {formik.errors.password && formik.touched.password && (
            <FormError>{formik.errors.password}</FormError>
          )}
          <button
            type="submit"
            className="px-10 mt-5 text-base sm:text-xl py-3 w-full rounded-md text-white dark:text-inherit font-semibold bg-brightRed">
            {loading ? <SpinLoader /> : "Login"}
          </button>
          <button
            type="submit"
            onClick={setLoginValues}
            className="px-10 mt-5 text-base sm:text-xl py-3 w-full rounded-md text-inherit font-semibold bg-inherit border border-gray-300">
            Login as guest
          </button>
        </form>
        <h2 className="text-base sm:text-xl font-semibold">New here?</h2>
        <Link
          className="text-base sm:text-xl text-blue-500 underline underline-offset-4 hover:text-blue-300"
          to="/signup">
          Create an Account
        </Link>
      </div>
    </div>
  );
}

export { Login };
