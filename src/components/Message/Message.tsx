import type { IMessage } from "./Message.type";
import ok from "@/assets/icon_ok.svg"
import filed from "@/assets/icon_filed.svg";

const Message = ({ textMessag, type }: IMessage) => {
  return (
    <>
      {type === "Success" ? (
        <div className="bg-[#DCFCE7] text-[14px] text-[#065F46] max-w-90 w-full flex items-center justify-center rounded-[10px] py-4.75 px-[10px] gap-[13px]">
          <img src={ok} alt="Image" />
          <p>{textMessag}</p>
        </div>
      ) : type === "Failed" ? (
        <div className="bg-[#FEE2E2] text-[14px] text-[#7F1D1D] max-w-90 w-full flex items-center justify-center rounded-[10px] py-4.75 px-[10px] gap-[13px]">
          <img src={filed} alt="Image" />
          <p>{textMessag}</p>
        </div>
      ) : null}
    </>
  );
};

export default Message;
