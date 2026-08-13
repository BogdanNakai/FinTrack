import google from "@/assets/icon_google.svg";
import email from "@/assets/icon_message_input.svg";
import password from "@/assets/icon_password_input.svg";
import user from "@/assets/icon_user.svg";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import Input from "@/components/Form/Input";
import InputPassword from "@/components/Form/InputPassword";

const SingInPage = () => {
  return (
    <>
      <main>
        <section className="min-[768px]:flex overflow-hidden h-full">
          <div className="min-[768px]:flex-[0_0_40%]  max-[768px]:h-[500px] max-w-full px-[20px] bg-[linear-gradient(332.9deg,_#185a4d_29.38%,_#4dd0b1_100%)] max-h-[100%] flex items-center gap-[12px] flex-col justify-center">
            <h2 className="text-4xl text-white text-center">Welcome Back!</h2>
            <p className="text-[14px] leading-[143%] text-white text-center ">
              Log in to manage your finances.
            </p>
            <div className="flex justify-center w-[160px]">
              <ButtonPrimary link={"/login"} textButton={"SIGN IN"} />
            </div>
          </div>
          <div className="flex-1">
            <div className="max-w-[800px] flex justify-center h-full mx-auto px-3.5">
              <div className="w-full max-w-[500px]  gap-[20px] h-[100%] py-14 flex flex-col justify-center">
                <p className="text-[32px] text-center font-bold text-[#333]">
                  Create Account
                </p>
                <div className="flex justify-center">
                  <img src={google} alt="Image" />
                </div>
                <p className="text-[12px] text-center">
                  or use your email for registration
                </p>
                <div className="flex justify-center">
                  <form action="" className="w-[320px]">
                    <div className="grid gap-[20px] place-items-center">
                      <div className="w-full max-w-[300px]">
                        <Input name="name" type="name" placeholder="Name" icon={user} />
                      </div>
                      <div className="w-full max-w-[300px]">
                        <Input name="email" type="email" placeholder="Email" icon={email} />
                      </div>
                      <div className="w-full max-w-[300px]">
                        <InputPassword
                          name="input-password"
                          placeholder="Password"
                          icon={password}
                        />
                      </div>
                      <div className="w-full max-w-[300px]">
                        <InputPassword
                          name="input-password-confirm"
                          placeholder="Confirm Password"
                          icon={password}
                        />
                      </div>
                      <div className="flex justify-center w-[160px]">
                        <ButtonPrimary textButton={"SIGN UP"} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingInPage;
