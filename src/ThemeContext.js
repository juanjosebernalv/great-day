import React, { createContext, useContext, useState } from 'react';

export const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

  const initialState = {
      theme: themes.light,
      setTheme: () => {}
  }

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

const useTheme = () => {
    const context = useContext(ThemeContext);

    if(context === undefined ) {
        throw new Error('useContext must be used within a ThemeProvider');
    }

    return context;
}

export default useTheme;