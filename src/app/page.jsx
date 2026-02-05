"use client";

import { useEffect, useState } from "react";
import { Step1, Step2, Step3 } from "./_components";

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

  const [error, setError] = useState({
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

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const handleProfileImage = () => {
    if (event.target.files[0])
      setform({
        ...form,
        profileImage: URL.createObjectURL(event.target.files[0]),
      });
  };
  console.log({ form });
  console.log({ error });

  //============================= Хадгалах
  useEffect(() => {
    const localMyData = localStorage.getItem("form");
    if (localMyData) {
      setform(JSON.parse(localMyData));
    }
  }, []);

  return (
    <div className="h-screen w-120 flex justify-center items-center m-auto">
      <div className="border rounded-md p-10 flex flex-col gap-4 w[480] h-[655]">
        <img src="./logo.png" className="w-[60] h-[60]" alt="image" />
        <h1 className="font-bold text-xl">Join Us!😎</h1>
        <p className="">Please provide all current information accurately.</p>
        {step === 1 && (
          <Step1
            form={form}
            handleInput={handleInput}
            handleContinue={handleContinue}
            error={error}
            setError={setError}
          />
        )}
        {step === 2 && (
          <Step2
            form={form}
            handleInput={handleInput}
            error={error}
            setError={setError}
            handleContinue={handleContinue}
            handleBackStep={handleBackStep}
          />
        )}
        {step === 3 && (
          <Step3
            error={error}
            setError={setError}
            form={form}
            handleInput={handleInput}
            handleProfileImage={handleProfileImage}
            handleContinue={handleContinue}
            handleBackStep={handleBackStep}
          />
        )}
      </div>
    </div>
  );
};
export default Home;
