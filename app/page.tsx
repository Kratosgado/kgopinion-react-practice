"use client"

import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TopBar } from './TopBar';
import { Metadata } from 'next';
import { theme } from '@/public/theme';



export default function MyApp() {
  useEffect(() => {
    // Remove the server-side injected CSS during client-side navigation.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <TopBar />
    </ThemeProvider>
  );
}
