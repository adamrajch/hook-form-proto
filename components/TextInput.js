// register props, label, error
//  registerProps?: {
//   onChange?: (ev: FormEvent<HTMLInputElement>) => unknown;
//   onBlur?: (ev: FormEvent<HTMLInputElement>) => unknown;
//   ref?: RefCallback<HTMLInputElement>;
//   name?: string;
//   min?: string | number;
//   max?: string | number;
//   maxLength?: number;
//   minLength?: number;
//   pattern?: string;
//   required?: boolean;
//   disabled?: boolean;
// };
export default function TextInput({
  label,
  error,
  registerProps,
  id,
  type = "text",
  ...rest
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        type={type}
        {...(registerProps ?? {})}
        style={{ width: type === "checkbox" ? "" : "100%" }}
        {...rest}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
