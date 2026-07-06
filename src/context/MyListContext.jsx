import { createContext, useContext, useEffect, useState } from "react";

const MyListContext = createContext(null);

const STORAGE_KEY = "nfx-clone-my-list";

export function MyListProvider({ children }) {
  const [list, setList] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      /* ignore quota / private mode errors */
    }
  }, [list]);

  const isInList = (id) => list.some((item) => item.id === id);

  const toggle = (movie) => {
    setList((prev) =>
      prev.some((item) => item.id === movie.id)
        ? prev.filter((item) => item.id !== movie.id)
        : [movie, ...prev]
    );
  };

  return (
    <MyListContext.Provider value={{ list, isInList, toggle }}>
      {children}
    </MyListContext.Provider>
  );
}

export const useMyList = () => {
  const ctx = useContext(MyListContext);
  if (!ctx) throw new Error("useMyList must be used within a MyListProvider");
  return ctx;
};
