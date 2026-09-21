import SignUp from "@/features/auth/components/SignUp";


const SignUpPage = () => {
  return (
    <>
      <main>
        <section className="min-[768px]:flex overflow-hidden h-full">
          <SignUp />
        </section>
      </main>
    </>
  );
};

export default SignUpPage;
