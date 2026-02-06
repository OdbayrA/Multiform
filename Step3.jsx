// import { error } from "node:console";
import { BackButton } from ".";
import { Input } from "./Input";
import { NextButton } from "./NextButton";
import { BiSolidImage } from "react-icons/bi";

export const Step3 = ({
  form,
  handleInput,
  handleProfileImage,
  error,
  setError,
  handleContinue,
  handleBackStep,
  setForm,
}) => {
  const handleNextStep = () => {
    const newError = {};
    if (!form.dateOfBirth) {
      newError.dateOfBirth = "Please select a date";
    } else if (form.dateOfBirth) {
      newError.dateOfBirth === "";
    }

    if (form.profileImage === "") {
      newError.profileImage = "Image cannot be blank";
    } else {
      newError.profileImage;
    }

    setError(newError);

    if (!newError.dateOfBirth) {
      localStorage.setItem("form", JSON.stringify(form));
      handleContinue();
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-30">
        <div>
          <Input
            name="dateOfBirth"
            type="date"
            formName={form.dateOfBirth}
            onChange={handleInput}
            label={"Date of Birth"}
            error={error.dateOfBirth}
          />
          {form.profileImage ? (
            <div className="relative">
              <img
                className="w-full h-45"
                src={form.profileImage}
                alt="ProfileImage"
              />
              <button
                onClick={() => setForm({ ...form, profileImage: "" })}
                className=" absolute right-3 top-3 w-8 h-8 rounded-2xl bg-black text-white"
              >
                X
              </button>
            </div>
          ) : (
            <div className="bg-gray-100 h-45 flex flex-col justify-center items-center">
              <BiSolidImage className="h-5 w-5" />
              <p>Add image</p>
              <input
                className=" h-45 absolute w-full opacity-0"
                type="file"
                onChange={handleProfileImage}
              />
            </div>
          )}

          <p>{error.profileImage}</p>
        </div>

        <div className="flex gap-3">
          <BackButton handleBackStep={handleBackStep} />
          <NextButton handleNextStep={handleNextStep} text="Sumbit 3/3" />
        </div>
      </div>
    </div>
  );
};
