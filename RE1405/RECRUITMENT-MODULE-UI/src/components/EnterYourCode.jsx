import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.svg"
import { updateAuthData } from "../Servicescalls";

const EnterYourCode = () => { 
  const [form, setForm] = useState({ otp: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [resenderrorMessage, setResenderrorMessage] = useState("");
  const [toasterMessage, setToasterMessage] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const verifyOTP = async e => {
    e.preventDefault()
    if (!form.otp) {
      setErrorMessage("Please enter your OTP.");
    } else if (form.otp.length !== 6) {
      setErrorMessage("Code should be 6 characters long");
    }
    const bodydata = {
      emailId: sessionStorage.getItem('emailId'),
      otp: form.otp,
    }
    try {
      const response = await updateAuthData("verify", bodydata);
      var _data = response;
      console.log(_data);
      navigate('/setpassword');
      setForm({ otp: "", });
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  }

  const handleResendCode = async e => {
    e.preventDefault();
    const bodydata = {
      emailId: sessionStorage.getItem('emailId'),
    }
    try {
      const response = await updateAuthData("forgotPwd", bodydata);
      var _data = response;
      console.log(_data);
      setResenderrorMessage(_data.data)
      setToasterMessage(true);
      setTimeLeft(300);
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  }

  return (
    <div className='w-full h-screen'>
      <div className="flex justify-end">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center">
        {toasterMessage && (
          <div className="max-w-xs bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg" role="alert">
            <div className="flex p-4">
              {resenderrorMessage}
              <div className="ms-auto">
                <button onClick={() => { setToasterMessage(false) }} type="button" className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-teal-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100">
                  <span className="sr-only">Close</span>
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col w-96 p-7 mt-12 mx-auto shadow-lg shadow-[#2D2E4F21] rounded-lg bg-white'>
        <h1 className='text-[22px] font-bold'>Enter Your Code</h1>
        <p className='text-[12px] mb-3 text-[#5F6A77]'>Enter your email below and we'll send you a verification code. Once verified, you can reset your password hassle-free.</p>
        <form onSubmit={(e) => { verifyOTP(e) }} className='flex flex-col'>
          <label className='text-[14px] font-semibold mb-1' id="code">Enter Code<span className="text-[#FF4646] p-1">*</span></label>
          <input type="number" id="code" name="otp" onChange={(e) => { handleChange(e) }} value={form.otp}
            className={`border-2 border-[#E6E6E6] px-4 py-2 rounded-md w-80 mb-2 outline-none ${errorMessage ? "border-red-500" : ""}`}
            placeholder='Enter your code here' />
          {errorMessage && <small className="text-red-500">{errorMessage}</small>}
          <button type="submit" className="w-80 bg-[#29AB87] p-2 mt-4 text-[#FFFFFF] rounded-md text-[18px]">Verify</button>
          <button disabled={timeLeft} onClick={(e) => { handleResendCode(e) }} type="button" className={`w-80 text-[#29AB87] p-2 mt-4 rounded-md text-[18px] ${timeLeft ? "opacity-50 " : ""}`}>Resend</button>
        </form>
        <p className="text-[14px] mt-2 text-[#5F6A77]">Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
      </div>
    </div>
  )
}

export default EnterYourCode;
