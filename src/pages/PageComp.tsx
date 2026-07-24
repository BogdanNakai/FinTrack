import ButtonCansel from "@/components/ButtonCansel";
import ButtonRemove from "@/components/ButtonRemove";
import ModalDeleteTransactions from "@/components/ModalDeleteTransaction";
import PopapaddTrans from "@/components/PopapAddTrans";
import ProfileSettingsCard from "@/components/ProfileSettingsCard";
import UserInfo from "@/components/UserInfo";
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
