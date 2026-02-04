export const Input = ({ label, formName, onChange, type, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        type={type}
        className="border"
        name={name}
        placeholder="placeholder"
        value={formName}
        onChange={onChange}
      />
    </div>
  );
};
