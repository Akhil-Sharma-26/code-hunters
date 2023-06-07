import React, { useState } from 'react';
// import './App.css'; // Import the CSS file

const ThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <button
    //   className={isDarkTheme ? 'dark' : 'light'} // Apply the theme class dynamically
      onClick={handleThemeToggle}
    >
      {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
    </button>
  );
};

export default ThemeButton;