import Menu from "./Menu";

import logo from "@/assets/logo.svg";
import user from "@/assets/icon_user.svg";
import notifiaction from "@/assets/icon_notifiaction.svg";

const Header = () => {
  return (
    <>
      <header className="shadow-[0_2px_10px_0_rgba(2,6,23,0.06)] pt-[12px] pb-[12px] bg-white relative z-[50]">
        <div className="header__container">
          <div className="flex items-center gap-[20px] md:justify-between">
            <div className="md:flex-[0_0_auto] flex-[1_0_auto] relative z-10">
              <div className=" max-w-[127px] h-[43px]">
                <img src={logo} alt="FinTrack" className="w-full h-full" />
              </div>
            </div>
            <Menu />
            <div className="flex items-center gap-[15px] relative z-10">
              <a href="">
                <img src={notifiaction} alt="Notification" />
              </a>
              <a href="">
                <img src={user} alt="User Acount" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
