import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';





const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0d47a1', // Dark Blue
      },
      secondary: {
        main: '#ff5722', // Orange
      },
      background: {
        default: '#303030', // Dark Grey
        paper: '#424242',  // Slightly lighter Dark Grey for paper elements
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
          //   '&:hover .MuiOutlinedInput-notchedOutline': {
          //   borderColor: '#ff9800', // Orange outline on hover          
          // },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ff9800', // Orange outline when focused        
            },
          },
          // notchedOutline: {
          //   borderColor: '#ff9800', //BORDER COLOR
          // },
        },
      },
  
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-focused': {
              color: '#ff9800', // Orange color for label when focused
            },
          }
        }
      }
    },
  });





ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.getElementById('root')
  );