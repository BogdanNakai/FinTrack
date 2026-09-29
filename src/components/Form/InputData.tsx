import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { IDataInput } from "./Form.type";
import { Controller, type FieldValues } from "react-hook-form";
import dayjs from "dayjs";

const InputData = <T extends FieldValues>({
  control,
  name,
  placeholder,
}: IDataInput<T>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            label={placeholder}
            format="DD MMMM YYYY"
            value={field.value ? dayjs(field.value) : null}
            onChange={(value) => {
              field.onChange(value?.format("YYYY-MM-DD") ?? "");
            }}
            slotProps={{
              field: {
                openPickerButtonPosition: "start",
              },
              popper: {
                placement: "bottom-start",
                modifiers: [
                  {
                    name: "flip",
                    enabled: false,
                  },
                ],
              },
              textField: {
                inputRef: field.ref,
                onBlur: field.onBlur,
                fullWidth: true,
                size: "small",
                sx: {
                  borderRadius: 10,
                  minWidth: 300,
                },
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default InputData;
