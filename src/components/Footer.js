import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        background: 'black',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="white">
          &copy; 2023 Pay Slip App. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
