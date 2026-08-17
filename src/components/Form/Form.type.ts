import type { UseFormRegister, FieldValues, Path} from "react-hook-form";

export interface IRegisterFormType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IInput<T extends FieldValues> {
  type?: string;
  placeholder?: string;
  icon?: string;
  iconInput?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
}

export interface IListValute {
  value: string;
  label: string;
}

export interface IInputMoney {
  listValute: IListValute[];
}
