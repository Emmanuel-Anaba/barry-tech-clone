import { FormFields } from "@/lib/types";
import * as y from "yup";

// Find a better name for this hook
export default function useFormikInit(fields: FormFields[]) {
  const schema = y.object(
    fields.reduce<Record<string, y.AnySchema>>(
      (schema, { name, validation }) => {
        schema[name] = validation;
        return schema;
      },
      {}
    )
  );
  const initialValues = fields.reduce<Record<string, string>>(
    (values, { name }) => {
      values[name] = "";
      return values;
    },
    {}
  );
  return { schema, initialValues };
}

// Take in a field object or an array of field objects