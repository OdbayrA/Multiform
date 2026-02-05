import { BackButton } from ".";
import { Input } from "./Input";
import { NextButton } from "./NextButton";

export const Step2 = ({
  form,
  handleInput,
  handleContinue,
  error,
  setError,
  handleBackStep,
}) => {
  const handleNextStep = () => {
    const newError = {};

    const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@gmail\.com$/;
    const phoneNumberRegex = /^(80|88|99|95)\d{6}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (form.email === "") {
      newError.email = "Хаягаа оруулах";
    } else if (!emailRegex.test(form.email)) {
      newError.email = "@gmail.com zaawal oruulah";
    } else {
      newError.email === "";
    }

    if (form.phoneNumber === "") {
      newError.phoneNumber = "Дугаараа оруулах";
    } else if (!phoneNumberRegex.test(form.phoneNumber)) {
      newError.email = "utasnii dugaar buruu";
    } else {
      newError.phoneNumber === "";
    }

    if (form.password === "") {
      newError.password = "Нууц үгээ оруулна уу";
    } else if (!passwordRegex.test(form.password)) {
      newError.password =
        "хамгийн багадаа 8 тэмдэг, 1 том үсэг, 1 жижиг үсэг, 1 тоо, 1 тусгай тэмдэг (@$!%*?&)";
    } else {
      newError.password === "";
    }

    if (form.confirmPassword === "") {
      newError.confirmPassword = "Hooson bn password oruulah";
    } else if (form.confirmPassword !== form.password) {
      newError.confirmPassword = "password buruu";
    } else {
      newError.confirmPassword === "";
    }

    setError(newError);

    if (
      !newError.email &&
      !newError.phoneNumber &&
      !newError.password &&
      !newError.confirmPassword
    ) {
      handleContinue();
    }
  };
  return (
    <div>
      <Input
        name="email"
        type="text"
        formName={form.email}
        onChange={handleInput}
        label={"Email"}
        error={error.email}
      />
      <Input
        name="phoneNumber"
        type="text"
        formName={form.phoneNumber}
        onChange={handleInput}
        label={"Phone Number"}
        error={error.phoneNumber}
      />
      <Input
        name="password"
        type="password"
        formName={form.password}
        onChange={handleInput}
        label={"Password"}
        error={error.password}
      />
      <Input
        name="confirmPassword"
        type="password"
        formName={form.confirmPassword}
        onChange={handleInput}
        label={"Confirm password"}
        error={error.confirmPassword}
      />

      <div className="flex gap-3">
        <BackButton handleBackStep={handleBackStep} />
        <NextButton handleNextStep={handleNextStep} text="Continue 2/3" />
      </div>
    </div>
  );
};
