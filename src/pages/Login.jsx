import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import "../App.css"

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching } = useContext(Context);

  const [loginError, setLoginError] = useState(false)

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setLoginError(false)
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setLoginError(true)
    }
  };
  return (
    <div className="login flex flex-col justify-center items-center ">
      {loginError && <span className='text-center text-red-500 mt-5 font-bold text-2xl'>An Error Occurred</span>}
      <span className="loginTitle  text-4xl font-bold font-mono italic">Login</span>
      <form className="loginForm mt-5 flex flex-col" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          className="loginInput loginEmail focus:outline-none p-2 border-0 bg-white"
          placeholder="Enter your email..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput loginPassword focus:outline-none p-2 border-0 bg-white"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton mt-5 bg-red-300 rounded-xl p-1" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton text-lg font-semibold italic">
        <Link className="link" to="/register">
         Don't have an account? Sign Up
        </Link>
      </button>
    </div>
  );
}