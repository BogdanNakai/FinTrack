import ButtonCansel from "@/components/Buttons/ButtonCansel";
import ButtonRemove from "@/components/Buttons/ButtonRemove";
import { ExpenseBreakdownCart } from "@/components/Cart/ExpenseBreakdownCart/ExpenseBreakdownCart";


import ProfileSettingsCard from "@/components/Cart/ProfileSettingsCard/ProfileSettingsCard";
import UserInfo from "@/components/Cart/UserInfo";
import Message from "@/components/Message/Message";
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
          <UserInfo />
          <ProfileSettingsCard />
          <ExpenseBreakdownCart />
          <Message
            textMessag="Budget created successfully!"
            type="Success"
          />
          <Message
            textMessag="Failed to add budget. Please try again."
            type="Failed"
          />
        </div>
      </section>
    </>
  );
};

export default PageComp;
