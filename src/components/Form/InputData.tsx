import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import type { IDataInput } from "./Form.type";
import { Controller, type FieldValues } from "react-hook-form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const InputData = <T extends FieldValues>({
  control,
  name,
  placeholder,
  includeTime = false,
}: IDataInput<T>) => {
  const Picker = includeTime ? DateTimePicker : DatePicker;
  const storageFormat = includeTime ? "YYYY-MM-DDTHH:mm" : "YYYY-MM-DD";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: includeTime ? "Please enter date and time" : "Please enter a date",
          validate: (value) =>
            (typeof value === "string" &&
              dayjs(value, storageFormat, true).isValid()) ||
            (includeTime ? "Please enter a valid date and time" : "Please enter a valid date"),
        }}
        render={({ field, fieldState }) => (
          <Picker
            label={placeholder}
            format={includeTime ? "DD MMMM YYYY HH:mm" : "DD MMMM YYYY"}
            value={field.value ? dayjs(field.value, storageFormat, true) : null}
            onChange={(value, context) => {
              field.onChange(
                value === null
                  ? ""
                  : context.validationError || !value.isValid()
                    ? "Invalid Date"
                    : value.format(storageFormat),
              );
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
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default InputData;
