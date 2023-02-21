import { Inter } from "@next/font/google";
import StateForm from "components/StateForm";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="main">
        <StateForm />
      </main>
    </>
  );
}
