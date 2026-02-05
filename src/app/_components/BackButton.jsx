export const BackButton = ({ handleBackStep }) => {
  return (
    <button
      className="border border-gray-400 rounded-xl h-11 flex-1 bg-white text-black px-5"
      onClick={() => handleBackStep()}
    >
      Back
    </button>
  );
};
