import { Input } from "./Input";

export const Step1 = ({ form, handleInput }) => {
  return (
    <div className="">
      <Input
        name="firstName"
        formName={form.firstName}
        onChange={handleInput}
        label="First name"
      />
      <Input
        name="lastName"
        formName={form.lastName}
        onChange={handleInput}
        label="Last name"
      />

      <Input
        name="userName"
        formName={form.userName}
        onChange={handleInput}
        label="Username"
      />
    </div>
  );
};
