import "./global.css";

import Sidebar from "./component/sidebar";
//import { personalData } from "../data/page-data";

export const metadata = {
  title: "Jose Grillo",
  description:
    "Como desarrollador Full Stack, Jose Grillo tiene experiencia en el desarrollo de aplicaciones web completas, desde el lado del cliente hasta el lado del servidor. Jose Grillo es capaz de trabajar con múltiples frameworks y lenguajes de programación para cumplir con los requisitos del proyecto. Sus habilidades incluyen la implementación de bases de datos, la construcción de interfaces de usuario interactivas y la solución de problemas técnicos tanto en el lado del cliente como en el del servidor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />

      <body
        className="flex flex-col sm:flex-row  bg-[#61add3] "
        //  bg-[#61add3]
      >
        <Sidebar />
        <main className=" grow-full p-4  w-full sm:basis-2/3  ml-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
