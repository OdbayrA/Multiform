import { Input } from "./Input";

export const Step2 = ({ form, handleInput }) => {
  return (
    <div>
      <Input
        name="email"
        type="text"
        formName={form.email}
        onChange={handleInput}
        label={"Email"}
      />
      <Input
        name="phoneNumber"
        type="text"
        formName={form.phoneNumber}
        onChange={handleInput}
        label={"Phone Number"}
      />
      <Input
        name="password"
        type="text"
        formName={form.password}
        onChange={handleInput}
        label={"Password"}
      />
      <Input
        name="confirmPassword"
        type="text"
        formName={form.confirmPassword}
        onChange={handleInput}
        label={"Confirm password"}
      />{" "}
    </div>
  );
};
