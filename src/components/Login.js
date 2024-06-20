import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Container, Paper, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const LoginBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(5),
  background: 'linear-gradient(135deg, #0d47a1 30%, #29b6f6 90%)',
  color: theme.palette.primary.contrastText,
}));

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://manolo029.pythonanywhere.com/api/payslip/api/token/', {
        username,
        password,
      });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      navigate('/admin');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed!');
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <LoginBox elevation={3}>
        <Typography component="h1" variant="h5" align="center">
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button type="submit" fullWidth variant="contained" color="secondary">
            Login
          </Button>
        </Box>
      </LoginBox>
    </Container>
  );
};

export default Login;
