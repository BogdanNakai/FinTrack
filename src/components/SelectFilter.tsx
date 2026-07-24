import type { SelectFilterProps, SelectOption } from "@/types/Transactions.types";
import Select, { type StylesConfig } from "react-select";

const SelectFilter = <T extends string>({ options, titlePlaceholder}: SelectFilterProps<T>) => {
  const customStyles: StylesConfig<SelectOption<T>, false> = {
    control: (provided) => ({
      ...provided,
      height: "44px",
      width: "100%",
      borderRadius: "12px",
      paddingRight: "12px",
      border: "2px solid #e2e8f0",
    }),
    option: (provided) => ({
      ...provided,
    }),
  };

  return (
    <Select
      options={options}
      placeholder={titlePlaceholder}
      classNamePrefix="custom-select"
      styles={customStyles}
    />
  );
};

export default SelectFilter;
