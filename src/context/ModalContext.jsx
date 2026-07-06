import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [movie, setMovie] = useState(null);

  const openModal = (m) => setMovie(m);
  const closeModal = () => setMovie(null);

  return (
    <ModalContext.Provider value={{ movie, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
};
