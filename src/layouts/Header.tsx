import logo from "@/assets/logo.svg";
import user from "@/assets/icon_user_acount.svg";
import notifiaction from "@/assets/notifiaction.svg";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <header className="shadow-[0_2px_10px_0_rgba(2,6,23,0.06)] pt-[12px] pb-[12px] bg-white">
        <div className="header__container">
          <div className="flex items-center justify-between">
            <div className="">
              <img src={logo} alt="FinTrack" />
            </div>
            <Menu />
            <div className="flex items-center gap-[15px]">
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
