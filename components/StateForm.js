import { useRef, useState } from "react";
import Textarea from "./Textarea";
import TextInput from "./TextInput";

export default function StateForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    summary: "",
  });

  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2));
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        minWidth: "400px",
      }}
    >
      <h1>Renders: {renderCounter.current}</h1>
      <h2>UseState</h2>
      <TextInput
        id="name"
        label="Name"
        value={form.name}
        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
      />
      <TextInput
        id="email"
        label="Email"
        value={form.email}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, email: e.target.value }))
        }
      />

      <Textarea
        id="summary"
        label="Summary"
        value={form.summary}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, summary: e.target.value }))
        }
      />
      <pre>{JSON.stringify(form, null, 2)}</pre>
      <button type="submit">Submit</button>
    </form>
  );
}
