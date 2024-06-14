import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import UploadPayslip from './components/UploadPaylsip'
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';



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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<UploadPayslip />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
