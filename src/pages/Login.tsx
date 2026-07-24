import ButtonPrimary from "@/components/ButtonGreen";
import Input from "@/components/Input.tsx";

import google from "@/assets/icon_google.svg";
import email from "@/assets/icon_message_input.svg";
import password from "@/assets/icon_password_input.svg";

const Login = () => {
  return (
    <>
      <section className="h-[100vh]">
        <div className="max-w-7xl mx-auto h-[100%]">
          <div className="md:flex md:flex-row md:h-[100%]  h-[50%] items-center">
            <div className="flex-[0_0_60%] gap-[20px] h-[100%] flex flex-col justify-center">
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
                    <Input
                      type="password"
                      placeholder="Password"
                      icon={password}
                    />
                    <div className="flex justify-center w-[160px]">
                      <ButtonPrimary textButton={"SIGN IN"} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-[0_0_40%] gap-[12px] pr-[20px] pl-[20px] bg-[linear-gradient(332.9deg,_#185a4d_29.38%,_#4dd0b1_100%)] h-[100%] flex items-center flex-col justify-center">
              <h2 className="text-4xl text-white text-center">
                Hello, Friend!
              </h2>
              <p className="text-[14px] leading-[143%] text-white text-center ">
                Enter your personal details and start journey with us
              </p>
              <div className="flex justify-center w-[160px]">
                <ButtonPrimary textButton={"SIGN UP"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
