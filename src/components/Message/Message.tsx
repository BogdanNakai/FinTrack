import type { IMessage } from "./Message.type";
import ok from "@/assets/icon_ok.svg"
import filed from "@/assets/icon_filed.svg";

const Message = ({ textMessage, type }: IMessage) => {
  return (
    <div className="fixed z-100 top-0 left-0 w-full h-full bg-[#0000003e] flex justify-center items-center">
      {type === "Success" ? (
        <div className="bg-[#DCFCE7] text-[14px] text-[#065F46] max-w-90 w-full flex items-center justify-center rounded-[10px] py-4.75 px-[10px] gap-[13px]">
          <img src={ok} alt="Image" />
          <p>{textMessage}</p>
        </div>
      ) : type === "Failed" ? (
        <div className="bg-[#FEE2E2] text-[14px] text-[#7F1D1D] max-w-90 w-full flex items-center justify-center rounded-[10px] py-4.75 px-[10px] gap-[13px]">
          <img src={filed} alt="Image" />
          <p>{textMessage}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Message;
