import { Input } from "./Input";

export const Step3 = ({ form, handleInput, handleProfileImage }) => {
  return (
    <div className="flex flex-col">
      <Input
        name="dateOfBirth"
        type="date"
        formName={form.dateOfBirth}
        onChange={handleInput}
        label={"Date of Birth"}
      />
      {form.profileImage && <img src={form.profileImage} alt="ProfileImage" />}

      <input type="file" onChange={handleProfileImage} />
    </div>
  );
};
