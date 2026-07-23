import iconEyePassword from "@/assets/icon__eye_thin.svg";
import iconEyePasswordClose from "@/assets/icon_eye_closed.svg";

const Input = ({ type, placeholder, icon }) => {
  const inputType = type === "password";
  const buttonEye = type === "text";

  return (
    <>
      <div className="flex justify-center items-center h-[50px] relative max-w-[320px]">
        <span className="absolute left-[10px]">
          <img className="w-[20px]" src={icon} alt="Image" />
        </span>
        <input
          className="h-full p-2 pl-[40px] flex-[0_0_100%] rounded-[4px] border border-[#e0e0e0]"
          type={type}
          placeholder={placeholder}
        />
        {inputType && (
          <>
            {buttonEye ? (
              <button className="absolute right-[10px]">
                <img src={iconEyePasswordClose} alt="Image" />
              </button>
            ) : (
              <button className="absolute right-[10px]">
                <img src={iconEyePassword} alt="Image" />
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Input;
