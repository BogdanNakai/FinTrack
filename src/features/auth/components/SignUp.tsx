import google from "@/assets/icon_google.svg";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Input from "@/components/form/Input";
import InputPassword from "@/components/form/InputPassword";
import ButtonLinkPrimary from "@/components/buttons/ButtonLinkPrimary";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEYS } from "@/services/storageKeys";

import { getStorage, setStorage } from "@/services/localStorage";
import type { IUser } from "@/types/user.types";
import type {
  TOnSubmitFormRegister,
  IRegisterFormType,
} from "@/components/form/Form.type";

const { USERS, ACTIVE_USER_ID } = STORAGE_KEYS;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IRegisterFormType>({
    mode: "onChange",
  });

  const navigate = useNavigate();
  const listUsers: IUser[] = getStorage(USERS, []);
 

  const onSubmit: TOnSubmitFormRegister = (data) => {
    const isEmailUsed = listUsers.find((user) => user.email.trim().toUpperCase() === data.email.trim().toUpperCase());

    if (isEmailUsed) {
      setError("email", {
        type: "manual",
        message: "A user with this email address already exists",
      });
      return;
    }

    const id = crypto.randomUUID();

    const user: IUser = {
      id,
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const updatedUsers = [...listUsers, user];
    setStorage(USERS, updatedUsers);
    setStorage(ACTIVE_USER_ID, id);

    navigate(`/dashboard`);
  };

  return (
    <>
      <div className="min-[768px]:flex-[0_0_40%]  max-[768px]:h-[500px] max-w-full px-[20px] bg-[linear-gradient(332.9deg,_#185a4d_29.38%,_#4dd0b1_100%)] max-h-[100%] flex items-center gap-[12px] flex-col justify-center">
        <h2 className="text-4xl text-white text-center">Welcome Back!</h2>
        <p className="text-[14px] leading-[143%] text-white text-center ">
          Log in to manage your finances.
        </p>
        <div className="flex justify-center w-[160px]">
          <ButtonLinkPrimary
            type={undefined}
            link={"/login"}
            textButton={"SIGN IN"}
          />
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
              <form
                action=""
                className="w-[320px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid gap-[20px] place-items-center">
                  <div className="w-full max-w-[300px]">
                    <Input
                      name="name"
                      type="name"
                      placeholder="Name"
                      register={register}
                      errors={errors.name}
                    />
                  </div>
                  <div className="w-full max-w-[300px]">
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
                      name="password"
                      type="password"
                      placeholder="Password"
                      register={register}
                      errors={errors.password}
                    />
                  </div>
                  <div className="w-full max-w-[300px]">
                    <InputPassword
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      register={register}
                      errors={errors.confirmPassword}
                    />
                  </div>
                  <div className="flex justify-center w-[160px]">
                    <ButtonPrimary type="submit" textButton={"SIGN UP"} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
