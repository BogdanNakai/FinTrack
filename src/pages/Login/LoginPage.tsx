import google from "@/assets/icon_google.svg";
import email from "@/assets/icon_message_input.svg";
import password from "@/assets/icon_password_input.svg";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import Input from "@/components/Form/Input";
import InputPassword from "@/components/Form/InputPassword";

const LoginPage = () => {
  return (
    <>
      <main>
        <section className="min-[768px]:flex overflow-hidden h-full">
          <div className="flex-[0_0_100%]">
            <div className="max-w-[800px] h-full mx-auto px-3.5">
              <div className="min-[768px]:w-[60%] gap-[20px] h-[100%] py-14 flex flex-col justify-center">
                <p className="text-[32px] text-center font-bold text-[#333]">
                  Sign in to FinTrack
                </p>
                <div className="flex justify-center">
                  <img src={google} alt="Image" />
                </div>
                <p className="text-[12px] text-center">or use your account</p>
                <div className="flex justify-center">
                  <form action="" className="w-[320px]">
                    <div className="grid gap-[20px] place-items-center">
                      <Input type="email" placeholder="Email" icon={email} />
                      <InputPassword
                        name="input-password"
                        placeholder="Password"
                        icon={password}
                      />
                      <div>
                        <a
                          href=""
                          className="text-[#64748B] text-[14px] text-center"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <div className="flex justify-center w-[160px]">
                        <ButtonPrimary textButton={"SIGN IN"} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="min-[768px]:flex-[0_0_40%] min-[768px]:-translate-x-full max-[768px]:h-[500px] max-w-full px-[20px] bg-[linear-gradient(332.9deg,_#185a4d_29.38%,_#4dd0b1_100%)] max-h-[100%] flex items-center gap-[12px] flex-col justify-center">
            <h2 className="text-4xl text-white text-center">Hello, Friend!</h2>
            <p className="text-[14px] leading-[143%] text-white text-center ">
              Enter your personal details and start journey with us
            </p>
            <div className="flex justify-center w-[160px]">
              <ButtonPrimary link={"/singIn"} textButton={"SIGN UP"} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
