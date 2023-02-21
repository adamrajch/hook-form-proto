import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Textarea from "./Textarea";
import TextInput from "./TextInput";
// https://github.com/colinhacks/zod
const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(10, { message: "Must be 10 or fewer characters long" }),
  email: z.string().email({ message: "invalid email address" }),
  impact: z
    .string()
    .startsWith("Impact", { message: "must start with Impact" }),
  summary: z
    .string()
    .trim()
    .min(1, { message: "Description is required" })
    .max(20, { message: "Must be 20 or fewer characters" }),
  privacy: z.boolean(),
});

let renderCount = 0;

function HookForm({ onSubmitReady }, ref) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  const setErrorRef = useRef(setError);
  setErrorRef.current = setError;
  useImperativeHandle(
    ref,
    () => {
      return {
        setErrors: (errors) => {
          Object.entries(errors).forEach(([key, value]) => {
            setErrorRef.current(key, { message: value });
          });
        },
      };
    },
    []
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmitReady)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        minWidth: "400px",
      }}
    >
      <h1>Renders: {renderCounter.current}</h1>
      <h2>React Hook Form</h2>
      <TextInput
        id="name"
        label="Name"
        error={errors.name?.message}
        registerProps={register("name")}
      />
      <TextInput
        id="email"
        label="Email"
        error={errors.email?.message}
        registerProps={register("email")}
      />
      <TextInput
        id="impact"
        label="Impact"
        error={errors.impact?.message}
        registerProps={register("impact")}
      />
      <Textarea
        id="summary"
        label="Summary"
        error={errors.summary?.message}
        registerProps={register("summary")}
      />

      <TextInput
        id="privacy"
        label="Privacy"
        type="checkbox"
        error={errors.name?.privacy}
        registerProps={register("privacy")}
      />
      <button type="submit" disabaled={isSubmitting}>
        {isSubmitting ? "Sending" : "Send"}
      </button>
    </form>
  );
}

export const ForwardedHookForm = forwardRef(HookForm);
