import { useState } from "react";
import type { IFormInputMonth } from "./Form.type";
import { Controller, type FieldValues } from "react-hook-form";
import { FormControl } from "@mui/material";
import InputMonth from "./InputMonth";

// Імпортуємо іконку стрілки вниз
function FormInputMonth<T extends FieldValues>({
  control,
  name,
  errors,
}: IFormInputMonth<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const hasError = Boolean(errors);

  //
  return (
    <FormControl fullWidth required={!!errors} error={hasError} size="small">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputMonth
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />
    </FormControl>
  );
}

export default FormInputMonth;
