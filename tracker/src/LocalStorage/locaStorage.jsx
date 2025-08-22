import { createContext, useEffect, useState } from "react";

export const Theme = createContext(null);

const Local = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [exchange, setExchange] = useState([]);

  // استرجاع الثيم عند تحميل الصفحة
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // حفظ الثيم عند تغييره
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // استرجاع العمليات
  useEffect(() => {
    const savedData = localStorage.getItem("exchange");
    if (savedData) setExchange(JSON.parse(savedData));
  }, []);

  // حفظ العمليات عند تحديثها
  useEffect(() => {
    localStorage.setItem("exchange", JSON.stringify(exchange));
  }, [exchange]);

  return (
    <Theme.Provider value={{ theme, setTheme, exchange, setExchange }}>
      {children}
    </Theme.Provider>
  );
};

export default Local;
