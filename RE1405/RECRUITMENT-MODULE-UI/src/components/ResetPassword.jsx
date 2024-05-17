import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import logo from "../assets/logo.svg"
import { updateAuthData } from "../Servicescalls";

const ResetPassword = () => {
  const [form, setForm] = useState({ emailId: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const resetPassword = async e => {
    e.preventDefault()
    if (!form.emailId) {
      setErrorMessage("Please enter your email ID.");
      return;
    }
    const bodydata = {
      emailId: form.emailId,
    }
    try {
      const response = await updateAuthData("forgotPwd", bodydata)
      var _data = response
      console.log(_data)
      sessionStorage.setItem('emailId', form.emailId)
      navigate('/enteryourcode');
      setForm({ emailId: "", })
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <div className="flex justify-end">
          <img src={logo} att="logo" />
        </div>
        <div className='flex flex-col w-96 p-7 mt-12 mx-auto shadow-lg shadow-[#2D2E4F21] rounded-lg bg-white;
'>
          <h1 className='text-[22px] font-bold'>Reset Password</h1>
          <p className='text-[12px] mb-3 text-[#5F6A77]
'>Enter your email below and we'll send you a verification code. Once verified, you can reset your password hassle-free.</p>
          <form onSubmit={(e) => { resetPassword(e) }} className='flex flex-col'>
            <label className='text-[14px] font-semibold mb-1' id="email">Email<span className="text-[#FF4646] p-1">*</span></label>
            <input type="email" htmlFor="email" name="emailId" onChange={(e) => { handleChange(e) }} value={form.emailId}
              className={`border-2 border-[#E6E6E6] px-4 py-2 rounded-md w-80 mb-2 outline-none ${errorMessage ? "border-red-500" : ""}`}
              placeholder='Example@gmail.com' />
            {errorMessage !== "" ? <small className="text-red-500">{errorMessage}</small> : ""}
            <button type='submit' className="w-80 bg-[#29AB87] p-2 mt-4 text-[#FFFFFF] rounded-md text-[18px]">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword