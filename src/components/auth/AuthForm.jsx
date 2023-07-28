import { Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuthenicate } from "../../redux/authenicationSlice";
import Spinner from "../spinner/Spinner";

const AuthForm = () => {
  const [mode, setMode] = useState("login");
  const status = useSelector((state) => state.authenication.status);
  const error = useSelector((state) => state.authenication.error);
  const dispatch = useDispatch();
  const toggleform = () => {
    setMode(mode == "login" ? "signup" : "login");
  };
  const handleSubmit = (value) => {
    value.mode = mode;
    dispatch(userAuthenicate(value));
  };
  return (
    <section className="auth-wrapper">
      <div className="main-container">
        {status == "loading" ? (
          <Spinner />
        ) : (
          <Formik
            initialValues={{ email: "", password: "", confirmpassword: "" }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required!";
              } else if (
                !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  values.email
                )
              ) {
                errors.email = "invalid Email !";
              }
              if (!values.password) {
                errors.password = "Required!";
              } else if (values.password.length < 8) {
                errors.password = "Password Must be 8 character !";
              }
              if (mode !== "login") {
                if (values.confirmpassword != values.password) {
                  errors.confirmpassword = "password doesn't matched !";
                }
              }
              return errors;
            }}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <div className="py-5">
                {error ? (
                  <p className="text-color-red text-center">{error}</p>
                ) : null}
                <form
                  className="text-black w-96 h-96 mx-auto mt-10 border border-gray-700 p-4 rounded"
                  onSubmit={handleSubmit}
                >
                  <h1 className="text-4xl text-color-red text-center pb-6">
                    {mode == "login" ? "Login" : "Sign Up"}
                  </h1>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email "
                    value={values.email}
                    onChange={handleChange}
                    className="w-full h-10 text-xl px-3 rounded bg-[#3B3E3E] text-color-font"
                  />{" "}
                  <span className="text-red-600">{errors.email}</span>
                  <br />
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    className="w-full h-10 text-xl px-3 rounded bg-[#3B3E3E] text-color-font"
                  />
                  <span className="text-red-600">{errors.password}</span>
                  <br />
                  <br />
                  {mode == "signup" && (
                    <>
                      <input
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        value={values.confirmpassword}
                        onChange={handleChange}
                        className="w-full h-10 text-xl px-3 rounded bg-[#3B3E3E] text-color-font"
                      />
                      <span className="text-red-600">
                        {errors.confirmpassword}
                      </span>
                      <br />
                      <br />{" "}
                    </>
                  )}
                  <p className="text-white">
                    {mode == "login"
                      ? "Don't Have an Account ?"
                      : "Already Have An Account ? "}
                    <span
                      className="text-color-red cursor-pointer"
                      onClick={toggleform}
                    >
                      {mode == "login" ? " signup" : " login"}
                    </span>
                  </p>
                  <input
                    type="submit"
                    value={mode == "login" ? "Login" : "SignUp"}
                    className="button cursor-pointer text-white"
                  />
                </form>
              </div>
            )}
          </Formik>
        )}
      </div>
    </section>
  );
};

export default AuthForm;
