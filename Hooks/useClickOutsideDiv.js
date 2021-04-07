import { useEffect } from "react";

export const useClickOutsideDiv = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    callback();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
};
