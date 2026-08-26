import SingIn from "@/features/auth/SingIn";

const SingInPage = () => {
  return (
    <>
      <main>
        <section className="min-[768px]:flex overflow-hidden h-full">
          <SingIn />
        </section>
      </main>
    </>
  );
};

export default SingInPage;
