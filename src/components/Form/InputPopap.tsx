import type { Iinput } from "./Form.type";

const InputPopap = ({ type, name, placeholder }: Iinput) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id=""
      className="h-11 bg-white w-full rounded-xl pl-3 outline-[#2684FF] border-2 border-[#e2e8f0]"
    />
  );
};

export default InputPopap;
