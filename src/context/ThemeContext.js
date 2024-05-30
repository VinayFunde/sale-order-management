import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkTheme') === 'true';
    setDarkTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => {
      const newTheme = !prevTheme;
      localStorage.setItem('darkTheme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
