import { Input } from "./Input";
import { NextButton } from "./NextButton";
export const Step1 = ({
  form,
  handleInput,
  handleContinue,
  error,
  setError,
}) => {
  const handleNextStep = () => {
    const newError = {};

    const firstNameRegex = /^.{3,}$/;
    const lastNameRegex = /^.{3,}$/;

    if (form.firstName === "") {
      newError.firstName = "Хоосон байна";
    } else if (!firstNameRegex.test(form.firstName)) {
      newError.firstName = "Нэрээ оруулна уу";
    } else {
      newError.firstName = "";
    }

    if (form.lastName === "") {
      newError.lastName = "Хоосон байна үү";
    } else if (!lastNameRegex.test(form.lastName)) {
      newError.lastName = "Нэрээ оруулна уу";
    } else {
      newError.lastName === "";
    }

    if (form.userName === "") {
      newError.userName = "Хоосон байна";
    } else {
      newError.userName === "";
    }

    setError(newError);

    if (!newError.firstName && !newError.lastName && !newError.userName) {
      handleContinue();
    }
  };
  console.log(error);
  return (
    <div className="">
      <Input
        type="text"
        name="firstName"
        formName={form.firstName}
        onChange={handleInput}
        label="First name"
        error={error.firstName}
      />

      <Input
        type="text"
        name="lastName"
        formName={form.lastName}
        onChange={handleInput}
        label="Last name"
        error={error.lastName}
      />

      <Input
        type="text"
        name="userName"
        formName={form.userName}
        onChange={handleInput}
        label="User name"
        error={error.userName}
      />
      <div className="w-full">
        <NextButton handleNextStep={handleNextStep} text="Continue 1/3" />
      </div>
    </div>
  );
};
