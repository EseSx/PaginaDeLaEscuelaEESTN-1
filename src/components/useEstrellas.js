import { useEffect, useState } from "react";

export function useEstrellas(cantidad = 50) {
  const [estrellas, setEstrellas] = useState([]);

  useEffect(() => {
    const generadas = Array.from({ length: cantidad }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }));
    setEstrellas(generadas);
  }, [cantidad]);

  return estrellas;
}
