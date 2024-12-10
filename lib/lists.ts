import * as y from "yup";
import { createRef, RefObject } from "react";
import { FormFields } from "./types";

export const navLinks = ["Home", "About", "Services"];

export const sectionRefs = navLinks.map(() =>
  createRef<HTMLElement>()
) as RefObject<HTMLElement>[];

export const contactRef = createRef<HTMLElement>() as RefObject<HTMLElement>;

export const contactFormFields: FormFields[] = [
  {
    label: "Full Name",
    name: "fullName",
    placeholder: "Jane",
    validation: y.string().required("Please enter your first name"),
  },
  {
    label: "Email",
    name: "email",
    placeholder: "janedoe@gmail.com",
    type: "email",
    validation: y
      .string()
      .email("Invalid email format")
      .required("Please enter your email address"),
  },
  {
    label: "Message",
    name: "message",
    placeholder: "Write your message here...",
    as: "textarea",
    validation: y
      .string()
      .max(250, "Message cannot exceed 200 characters")
      .required("Enter your message"),
  },
];
