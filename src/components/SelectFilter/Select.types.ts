export interface ISelectOption {
  value: string;
  label: string;
}

export interface SelectFilterProps {
  SelectOptionsList: ISelectOption[];
  NameSelect?: string;
}
