import type {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";

export interface ILoginFormType {
  email: string;
  password: string;
}

export interface IRegisterFormType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IInput<T extends FieldValues> {
  type?: string;
  placeholder?: string;
  iconInput?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError | undefined;
}

export interface IMonthInput {
  placeholder: string;
}

export interface IListValute {
  value: string;
  label: string;
}

export interface IInputMoney {
  listValute: IListValute[];
}

export type TOnSubmitFormRegister = (data: IRegisterFormType) => void;
export type TOnSubmitFormLogin = (data: ILoginFormType) => void;
