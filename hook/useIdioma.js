import { create } from "zustand";


import en from "/public/locale/en"
import es from "/public/locale/es"

const useIdioma = create((set) => ({
  idioma: en,
  español: () => set({ idioma: es }),
  ingles: () => set({ idioma: en }),
}));

export default useIdioma;

