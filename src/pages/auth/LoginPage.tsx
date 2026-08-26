import Login from "@/features/auth/Login";

const LoginPage = () => {
  return (
    <>
      <main>
        <section className="min-[768px]:flex overflow-hidden h-full">
          <Login />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
