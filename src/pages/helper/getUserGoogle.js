import { useState, useEffect } from "react";

export const useCheckGoogle = () => {
  const [user, setUserGoogle] = useState(null);

  const getLocalStorage = () => {
    let UserGoogle = localStorage.getItem("token");
    setUserGoogle(UserGoogle);
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return { user, setUserGoogle };
};
