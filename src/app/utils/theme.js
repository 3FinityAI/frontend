import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a context for color mode
const ColorModeContext = createContext({ 
  toggleColorMode: () => {},
  mode: 'light'
});

// Hook to use the color mode
export const useColorMode = () => useContext(ColorModeContext);

// Provider component that wraps your app
export function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState('light');
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // Add your custom theme settings here
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}