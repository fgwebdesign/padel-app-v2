// src/pages/RegisterSelectionPage.js
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function RegisterSelectionPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #004d99 30%, #009966 70%)', // Azul y verde combinados
        color: '#fff',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <Container component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography
          variant="h4"
          component={motion.h2}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          sx={{ mb: 4, fontWeight: 'bold' }}
        >
          Regístrate Como
        </Typography>
        <Box
          component={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Button
            component={Link}
            to="/register-club"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#006699',
              color: '#fff',
              padding: '10px 20px',
              margin: '10px',
              fontWeight: 'bold',
              borderRadius: '25px',
              '&:hover': { backgroundColor: '#004d80' }
            }}
          >
            Registrar Club
          </Button>
          <Button
            component={Link}
            to="/register-player"
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#fff',
              color: '#fff',
              padding: '10px 20px',
              margin: '10px',
              fontWeight: 'bold',
              borderRadius: '25px',
              '&:hover': { backgroundColor: '#fff', color: '#004d99' }
            }}
          >
            Registrar Jugador
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default RegisterSelectionPage;