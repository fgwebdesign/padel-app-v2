// src/pages/ForgotPasswordPage.js
import React from 'react';
import { Container, Box, TextField, Button, Typography, Avatar, Grid, Link, Paper } from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

function ForgotPasswordPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar la recuperación de la contraseña
    console.log("Formulario de Recuperación de Contraseña Enviado");
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #004d99 30%, #009966 70%)', // Fondo degradado azul y verde
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 3,
            backgroundColor: '#fff',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockResetOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Recuperar Contraseña
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
              Ingresa tu dirección de correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar Instrucciones
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Volver a Iniciar Sesión
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default ForgotPasswordPage;