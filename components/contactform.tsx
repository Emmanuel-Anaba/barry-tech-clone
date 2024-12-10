"use client";
import { toast } from "@/hooks/use-toast";
import { contactFormFields } from "@/lib/lists";
import { Button } from "./ui/button";
import { Form, Formik } from "formik";
import useFormInit from "@/hooks/use-formik-init";
import FormField from "./formfield";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const { schema, initialValues } = useFormInit(contactFormFields);
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={async (_, { resetForm }) => {
        try {
          await new Promise((_, r) => setTimeout(r, 3000));
          toast({
            title: "Message sent!",
            description: "We'll get back to you as soon as possible.",
          });
          resetForm();
        } catch {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }
      }}>
      {({
        isSubmitting,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <Form className="space-y-8">
          {contactFormFields.map(
            ({ label, name, placeholder, as, type }, i) => (
              <FormField
                error={cn(errors[name] && touched[name] && "form-field-error")}
                key={i}
                label={label}
                name={name}
                type={type}
                value={values[name]}
                as={as as "input" | "textarea"}
                placeholder={placeholder}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            )
          )}
          <Button
            className="flex items-center"
            disabled={isSubmitting}
            type="submit">
            Send Message <PiPaperPlaneTilt />
          </Button>
        </Form>
      )}
    </Formik>
  );
}
