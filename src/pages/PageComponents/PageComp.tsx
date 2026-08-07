import { ExpenseBreakdownCart } from "@/components/Card/ExpenseBreakdownCard/ExpenseBreakdownCart";
import Message from "@/components/Message/Message";
import ModalDeleteTransactions from "@/components/Modal/ModalDeleteTransaction";
import ModalAddTrans from "@/components/Popap/ModalAddTrans";
import Header from "@/layouts/Header";

const PageComp = () => {
  return (
    <>
      <Header />
      <section>
        <div className="component__container">
          <ModalDeleteTransactions />
          <ExpenseBreakdownCart />
          <Message textMessag="Budget created successfully!" type="Success" />
          <Message
            textMessag="Failed to add budget. Please try again."
            type="Failed"
          />
          <ModalAddTrans />
        </div>
      </section>
    </>
  );
};

export default PageComp;
