import type {
  UseFormRegister,
  FieldValues,
  Path,
  FieldError,
  Control,
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

export interface IDataInput<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  includeTime?: boolean;
}

export interface IPopapInput<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  type: string;
  errors?: FieldError | undefined;
}

export interface IMoneyInput<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  type: string;
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

export interface ISelectOption {
  value: string;
  label: string;
}

export interface SelectFilterProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  options: ReadonlyArray<ISelectOption>;
  errors?: FieldError | undefined;
}

export type TOnSubmitFormRegister = (data: IRegisterFormType) => void;
export type TOnSubmitFormLogin = (data: ILoginFormType) => void;
