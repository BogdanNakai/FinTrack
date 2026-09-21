import google from "@/assets/icon_google.svg";
import ButtonLinkPrimary from "@/components/buttons/ButtonLinkPrimary";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Input from "@/components/form/Input";
import InputPassword from "@/components/form/InputPassword";

import { useForm } from "react-hook-form";
import type {
  TOnSubmitFormLogin,
  ILoginFormType,
} from "@/components/form/Form.type";
import { useNavigate } from "react-router-dom";
import { getStorage, setStorage } from "@/services/localStorage";
import type { IUser } from "@/types/user.types";
import { STORAGE_KEYS } from "@/services/storageKeys";

const { USERS, ACTIVE_USER_ID } = STORAGE_KEYS;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginFormType>({
    mode: "onChange",
  });

  const navigate = useNavigate();
  const listUsers: IUser[] = getStorage(USERS, []);

  const onSubmit: TOnSubmitFormLogin = (data) => {
    const matchedUser = listUsers.find(
      (user) => user.email.trim().toUpperCase() === data.email.trim().toUpperCase(),
    );

    if (!matchedUser) {
      setError("email", {
        type: "manual",
        message: "User not found",
      });
      return;
    } else if (matchedUser.password !== data.password) {
      setError("password", {
        type: "manual",
        message: "Incorrect password",
      });
      return;
    }
    setStorage(ACTIVE_USER_ID, matchedUser.id);
    navigate(`/dashboard`);
  };

  return (
    <>
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="w-[300px]"
              >
                <div className="grid gap-[20px] place-items-center">
                  <div className="w-full max-w-[320px]">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      register={register}
                      errors={errors.email}
                    />
                  </div>
                  <div className="w-full max-w-[300px]">
                    <InputPassword
                      type="password"
                      name="password"
                      placeholder="Password"
                      register={register}
                      errors={errors.password}
                    />
                  </div>
                  <div>
                    <a
                      href=""
                      className="text-[#64748B] text-[14px] text-center"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div className="flex justify-center w-[160px]">
                    <ButtonPrimary type="submit" textButton={"SIGN IN"} />
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
          <ButtonLinkPrimary
            type={undefined}
            link={"/sign-up"}
            textButton={"SIGN UP"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
