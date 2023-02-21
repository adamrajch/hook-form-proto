export default function Textarea({ label, error, registerProps, id, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...(registerProps ?? {})} {...rest} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
