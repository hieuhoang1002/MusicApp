import React, { useState } from "react";
import Checkbox from "./CheckBox";
import { Logo } from "../assets/img";
import styles from "../scss/signup.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const SignUp = () => {
  const navigate = useNavigate();

  const { registerUser } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await registerUser(email, name, password);
      navigate("/login");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logo_img} src={Logo} alt="logo" />
        <div className={styles.text_name}>
          <h1>MUSIC</h1>
          <p>Entertainment</p>
        </div>
      </div>
      <h1 className={styles.heading}>Login for free to start listening.</h1>

      <button className={styles.btn_fb} label="Sign Up with Facebook">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="url(#pattern0)"></rect>
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use href="#image0_213_540" transform="scale(0.00769231)"></use>
            </pattern>
            <image
              id="image0_213_540"
              width="130"
              height="130"
              href="data:image/png;base64,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"
            ></image>
          </defs>
        </svg>
        Sign Up with Facebook
      </button>

      <button
        // onClick={loginWithGoogle}
        className={styles.btn_gg}
        label="Sign uU with Google"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.6 12.2272C21.6 11.5181 21.5364 10.8363 21.4182 10.1818H12V14.0499H17.3818C17.15 15.2999 16.4455 16.359 15.3864 17.0681V19.5772H18.6182C20.5091 17.8363 21.6 15.2727 21.6 12.2272Z"
            fill="#4285F4"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 21.9999C14.7 21.9999 16.9636 21.1044 18.6181 19.5772L15.3863 17.0681C14.4909 17.6681 13.3454 18.0226 12 18.0226C9.39542 18.0226 7.19087 16.2635 6.40451 13.8999H3.0636V16.4908C4.70905 19.759 8.09087 21.9999 12 21.9999Z"
            fill="#34A853"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.40455 13.9001C6.20455 13.3001 6.09091 12.6592 6.09091 12.0001C6.09091 11.341 6.20455 10.7001 6.40455 10.1001V7.50916H3.06364C2.38636 8.85916 2 10.3864 2 12.0001C2 13.6137 2.38636 15.141 3.06364 16.491L6.40455 13.9001Z"
            fill="#FBBC05"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 5.97727C13.4681 5.97727 14.7863 6.48182 15.8227 7.47273L18.6909 4.60455C16.9591 2.99091 14.6954 2 12 2C8.09087 2 4.70905 4.24091 3.0636 7.50909L6.40451 10.1C7.19087 7.73636 9.39542 5.97727 12 5.97727Z"
            fill="#EA4335"
          ></path>
        </svg>
        Sign Up with Google
      </button>

      <p className={styles.or_container}>Or</p>

      <div className={styles.form_container}>
        <h2 className={styles.heading2}>Sign up with your email address</h2>
        <form onSubmit={handleSignUp}>
          <div className={styles.input_container}>
            <form id="email">
              <p>What's your email?</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                // ref={emailRef}
                placeholder="Enter your email"
                type="email"
              />
            </form>
          </div>
          <div className={styles.input_container}>
            <form id="name">
              <p>Create a name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                // ref={nameRef}
                placeholder="Create a name"
                type="name"
              />
            </form>
          </div>
          <div className={styles.input_container}>
            <form id="password">
              <p>Create a password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                // ref={passwordRef}
                placeholder="Create a password"
                type="password"
              />
            </form>
          </div>
          {/* <div className={styles.input_container}>
          <form id="password-confirm">
            <p>Password Confirmation</p>
            <input
              label="Password Confirmation"
              placeholder="Password Confirmation"
              type="password"
              ref={passwordConfirmRef}
              required
            />
          </form>
        </div> */}
          {/* <div className={styles.input_container}>
          <TextField
            label="What should we call you?"
            placeholder="Enter a profile name"
            name="name"
            required={true}
          />
        </div> */}
          <div className={styles.date_of_birth_container}>
            <p className={styles.text_birthday}>What's your date of birth?</p>
            <div className={styles.date_of_birth}>
              <div className={styles.date}>
                {/* <TextField
                label="Date"
                placeholder="DD"
                name="date"
                value={data.date}
                required={true}
              /> */}
              </div>
              <div className={styles.month}>
                {/* <TextField
                name="Month"
                label="Month"
                placeholder="Months"
                options={months}
                value={data.month}
                required={true}
              /> */}
              </div>
              <div className={styles.year}>
                {/* <TextField
                label="Year"
                placeholder="YYYY"
                name="year"
                value={data.year}
                required={true}
              /> */}
              </div>
            </div>
          </div>
          <div className={styles.input_container}>
            {/* <Radio
            className={styles.input_text}
            label="What's your gender?"
            name="gender"
            options={genders}
            required={true}
          /> */}
          </div>
          <div className={styles.checkbox}>
            <Checkbox />
            <p className={styles.checkbox_text}>
              Share my registration data with ABX's content providers for
              marketing purposes.
            </p>
          </div>
          <p className={styles.terms_condition}>
            By clicking on sign-up, you agree to ABX's {""}
            <a href="/#">Terms and Conditions of Use.</a>
          </p>
          <p className={styles.terms_condition}>
            To learn more about how ABX collects, uses, shares and protects your
            personal data, please see <a href="/#">ABX's Privacy Policy.</a>
          </p>
          <div className={styles.submit_btn_wrapper}>
            <button
              // onClick={handleSignUp}
              type="submit"
              className={styles.btn_signup}
            >
              SIGN UP
            </button>
          </div>
        </form>
        <p className={styles.text_name_login}>
          Have an account?<Link to="/login">Log In</Link>
        </p>
      </div>

      {/* ============================================= */}
    </div>
  );
};

export default SignUp;
