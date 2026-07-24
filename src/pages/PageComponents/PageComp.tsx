import ButtonCansel from "@/components/Buttons/ButtonCansel";
import ButtonRemove from "@/components/Buttons/ButtonRemove";
import ProfileSettingsCard from "@/components/Cart/ProfileSettingsCard";
import UserInfo from "@/components/Cart/UserInfo";
import ModalDeleteTransactions from "@/components/Popap/ModalDeleteTransaction";
import Header from "@/layouts/Header";

const PageComp = () => {
  return (
    <>
      <Header />
      <section>
        <div className="component__container">
          {/* <PopapaddTrans /> */}
          <ModalDeleteTransactions />
          <ButtonCansel />
          <ButtonRemove />
          <UserInfo />
          <ProfileSettingsCard /> 
        </div>
      </section>
    </>
  );
};

export default PageComp;
