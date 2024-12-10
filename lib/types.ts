import * as y from "yup";
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";

export type FormFieldProps = {
  error?: string;
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  as?: "input" | "textarea";
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  handleChange: ChangeEventHandler;
  handleBlur: FocusEventHandler;
};

export type FormFields = {
  label: string;
  name: string;
  placeholder: string;
  validation: y.StringSchema<string, y.AnyObject, undefined, "">;
  type?: HTMLInputTypeAttribute;
  as?: "input" | "textarea";
};
