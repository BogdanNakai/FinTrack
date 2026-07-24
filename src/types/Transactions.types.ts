export interface FilterOption<T extends string = string> { 
	value: T;
	label: string;
}

export interface SelectFilterProps<T extends string = string> {
  options: FilterOption<T>[];
  titlePlaceholder?: string;
  value?: FilterOption<T> | null;
  onChange?: (option: FilterOption<T> | null) => void;
}

export interface SelectOption<T extends string = string> {
  value: T;
  label: string;
}