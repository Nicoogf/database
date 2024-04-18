import Image from "next/image";
import Listado from "./Components/Listado";
import Formulario from "./Components/Formulario";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Formulario />
      <Listado />
    </main>
  );
}
