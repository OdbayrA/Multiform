export const NextButton = ({ handleNextStep, text }) => {
  return (
    <button
      className="w-full h-[44] bg-black text-white rounded-xl"
      onClick={() => handleNextStep()}
    >
      {text}
    </button>
  );
};
