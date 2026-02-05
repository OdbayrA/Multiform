// import { error } from "node:console";
import { BackButton } from ".";
import { Input } from "./Input";
import { NextButton } from "./NextButton";

export const Step3 = ({
  form,
  handleInput,
  handleProfileImage,
  error,
  setError,
  handleContinue,
  handleBackStep,
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
          {form.profileImage && (
            <img src={form.profileImage} alt="ProfileImage" />
          )}
          <input
            className="border h-45 w-full"
            type="file"
            onChange={handleProfileImage}
          />
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
