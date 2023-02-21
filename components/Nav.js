import Link from "next/link";

export default function Nav() {
  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
      <Link href="/">Hook form</Link>
      <Link href="/state">State Form</Link>
    </div>
  );
}
