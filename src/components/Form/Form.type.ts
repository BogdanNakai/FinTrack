export interface Iinput {
  type?: string;
  placeholder?: string;
  icon?: string;
  iconInput?: string;
  name?: string;
}

export interface IlistValute {
  value: string;
  label: string;
}

export interface IInputMony {
  listValute: IlistValute[];
}
