import './ProfileSettingsCard.scss'
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import ButtonRemove from "@/components/Buttons/ButtonRemove";

const ProfileSettingsCard = () => {
  return (
    <>
      <div className="py-[20px] px-[10px] flex flex-col items-center w-full min-w-[280px] max-w-[600px] bg-[#fff] shadow-[0_6px_18px_0_rgba(2,6,23,0.1)] rounded-[12px]">
        <div className="pb-[24px] grid gap-[24px] max-w-[340px] w-full">
          <div className="flex items-start w-full gap-[10px]  max-w-[340px] justify-between">
            <p className="flex-[0_1_50%] text-[12px] text[#1E293B] whitespace-nowrap tracking-[0.02em]">
              Preferred Currency:
            </p>
            <p className="flex-[0_1_50%] text-[12px] text[#1E293B] whitespace-nowrap tracking-[0.02em]">
              INR (₹)
            </p>
          </div>
          <div className="flex items-start gap-2.5  w-full max-w-85 justify-between">
            <p className="flex-[0_1_50%] whitespace-nowrap text-[12px] text[#1E293B] tracking-[0.02em]">
              Language:
            </p>
            <p className="flex-[0_1_50%] text-[12px] whitespace-nowrap text[#1E293B] tracking-[0.02em]">
              English (EN)
            </p>
          </div>
          <div className="flex items-start gap-2.5  w-full max-w-85 justify-between">
            <p className="flex-[0_1_50%] whitespace-nowrap text-[12px] text[#1E293B] tracking-[0.02em]">
              Monthly Start Date:
            </p>
            <p className="flex-[0_1_50%] text-[12px] whitespace-nowrap text[#1E293B] tracking-[0.02em]">
              1st of every month
            </p>
          </div>
          <div className="flex items-start md:flex-nowrap flex-wrap gap-2.5  w-full max-w-85 justify-between">
            <p className="flex-[0_1_50%] whitespace-nowrap text-[12px] text[#1E293B] tracking-[0.02em]">
              Notifications Preferences:
            </p>
            <ul className="text-[12px] whitespace-nowrap text[#1E293B] tracking-[0.02em] grid gap-2 md:pt-5.75">
              <label className="flex items-center gap-2.5 custom-chekbox">
                <input type="checkbox" className="custom-chekbox__input" />
                <span className="custom-chekbox__fake-checkbox"></span>
                Budget Limit Alerts
              </label>
              <label className="flex items-center gap-2.5 custom-chekbox">
                <input type="checkbox" className="custom-chekbox__input" />
                <span className="custom-chekbox__fake-checkbox"></span>
                Goal Reminders
              </label>
              <label className="flex items-center gap-2.5 custom-chekbox">
                <input type="checkbox" className="custom-chekbox__input" />
                <span className="custom-chekbox__fake-checkbox"></span>
                Weekly Summary Emails
              </label>
            </ul>
          </div>
        </div>
        <div className="flex gap-[12px] flex-wrap justify-center items-center">
          <ButtonPrimary type='button' textButton="Export Data" />
          <ButtonRemove type='button' textButton="Clear All Data" />
        </div>
      </div>
    </>
  );
};

export default ProfileSettingsCard;
