import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext(null);

/**
 * Top-level component that creates a context for the active theme
 * Themes are defined in the themes.css stylesheet file
 */
function ThemeProvider(props) {
  const { children } = props;
  const theme = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme[0]}-theme`}>{children}</div>
    </ThemeContext.Provider>
  );
}

/**
 * Hook for accessing the theme context
 */
export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;
