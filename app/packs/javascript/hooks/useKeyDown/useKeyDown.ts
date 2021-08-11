import { useState, useEffect } from "react";

export const useKeyDown = () => {
  const [keyCode, setKeyCode] = useState<number>();

  const listener = e => {
    setKeyCode(e.keyCode)
  };

  useEffect(() => {
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  });

  return {
    keyCode
  };
}
