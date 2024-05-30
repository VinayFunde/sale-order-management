import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Switch from '@mui/material/Switch';

const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Switch checked={darkTheme} onChange={toggleTheme} />
      <span>{darkTheme ? 'Dark' : 'Light'} Mode</span>
    </div>
  );
};

export default ThemeToggle;
