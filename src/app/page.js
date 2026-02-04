"use client";

import Image from "next/image";
import { useState } from "react";
import { Input, Step1, Step2 } from "./_components";
import { Step3 } from "./_components/Step3";

const Home = () => {
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });

  const [step, setStep] = useState(1);

  console.log({ step });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  };

  const handleContinue = () => {
    setStep(step + 1);
  };
  const handleProfileImage = () => {
    if (event.target.files[0])
      setform({
        ...form,
        profileImage: URL.createObjectURL(event.target.files[0]),
      });
  };
  console.log({ form });

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border rounded-md p-10 flex flex-col gap-4 w[480] h-[655]">
        <img src="./logo.png w-[60] h-[60]" />
        <h1 className="font-bold text-xl">Join Us!😎</h1>
        <p className="">Please provide all current information accurately.</p>
        {step === 1 && <Step1 form={form} handleInput={handleInput} />}
        {step === 2 && <Step2 form={form} handleInput={handleInput} />}
        {step === 3 && (
          <Step3
            form={form}
            handleInput={handleInput}
            handleProfileImage={handleProfileImage}
          />
        )}

        <div className="border flex justify-center text-white bg-black rounded-md ">
          <button className="w-full h-[44]" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
