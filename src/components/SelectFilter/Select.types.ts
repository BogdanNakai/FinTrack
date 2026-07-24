export interface ISelectOption<T extends string = string> {
  value: T;
  label: string;
}

export interface ISelectFilterProps<T extends string = string> {
  options: ISelectOption<T>[];
  titlePlaceholder?: string;
  value?: ISelectOption<T> | null;
  onChange?: (option: ISelectOption<T> | null) => void;
}
