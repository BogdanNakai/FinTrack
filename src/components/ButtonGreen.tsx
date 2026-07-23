const ButtonGreeen = ({ textButton, size}) => { 
	return (
    <button
      type="button"
      className="flex justify-center rounded-[8px] w-full items-center p-[10px_20px] h-10 bg-[#00B894] text-white"
    >
      {textButton}
    </button>
  );
};

export default ButtonGreeen;