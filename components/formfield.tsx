import { ErrorMessage } from "formik";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { FormFieldProps } from "@/lib/types";

export default function FormField({
  error,
  label,
  name,
  placeholder,
  type = "text",
  as = "input",
  value,
  handleChange,
  handleBlur,
}: FormFieldProps) {
  return (
    <div className={cn("form-field", error)}>
      <label htmlFor={name}>{label}</label>
      {as === "input" && (
        <Input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {as === "textarea" && (
        <Textarea
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          className="resize-none"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      <ErrorMessage component="span" name={name} />
    </div>
  );
}
