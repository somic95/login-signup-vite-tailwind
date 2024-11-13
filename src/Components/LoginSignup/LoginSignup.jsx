import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/user.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/lock.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div>
      <div className="container font-Montserrat w-[600px] h-[600px] flex flex-col m-auto bg-white  rounded-2xl">
        <div className="header flex flex-col items-center gap-[9px] w-full mt-[30px]">
          <div className="text text-[#3c009d] text-[48px] font-bold">
            {action}
          </div>
          <div className="underline w-[61px] h-[6px] bg-[#3c009d] rounded-[9px]"></div>
        </div>
        <div className="inputs mt-[55px] flex flex-col gap-[25px]">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
              <img className="mt-0 mx-[30px]" src={user_icon} alt="" />
              <input
                className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]"
                type="text"
                placeholder="Name"
              />
            </div>
          )}

          <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <img className="mt-0 mx-[30px]" src={email_icon} alt="" />
            <input
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]"
              type="email"
              placeholder="Email ID"
            />
          </div>
          <div className="input flex items-center m-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]">
            <img className="mt-0 mx-[30px]" src={password_icon} alt="" />
            <input
              className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password pl-[62px] mt-[27px] text-[#797979] text-[18px]">
            Lost Password?{" "}
            <span className="text-[#4c00b4] cursor-pointer">Click Here!</span>
          </div>
        )}
        <div className="submit-container flex gap-[30px] my-[60px] mx-auto">
          <div
            className={action === "Login" ? "submit" : "submit grey-btn"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
          <div
            className={action === "Sign Up" ? "submit" : "submit grey-btn"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
