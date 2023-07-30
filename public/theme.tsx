import { createTheme } from '@mui/material/styles';

// Define your custom theme here
export const theme = createTheme({
   palette: {
      primary: {
         main: '#2196F3', // Customize the primary color
      },
      secondary: {
         main: '#f50057', // Customize the secondary color
      },
   },
   typography: {
      fontFamily: 'Roboto, Arial, sans-serif', // Customize the default font family
      fontSize: 16, // Customize the default font size
   },
   // Add more customizations as needed
});
