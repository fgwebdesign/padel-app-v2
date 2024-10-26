// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Avatar, Grid, Link, MenuItem, Paper } from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import departments from '../constants/departments';

function RegisterPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario de Registro Enviado");
    console.log("Imagen Seleccionada:", selectedImage);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #004d99 30%, #009966 70%)', 
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
              <PersonAddOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registro de Club
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre Completo"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="club-name"
                label="Nombre del Club"
                name="clubName"
                autoComplete="organization"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                select
                id="location"
                label="Ubicación (Departamento)"
                name="location"
                autoComplete="location"
              >
                {departments.map((department) => (
                  <MenuItem key={department} value={department}>
                    {department}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              <Typography variant="body2" sx={{ mt: 2 }}>
                Subir Logo del Club
              </Typography>
              <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ mt: 1, mb: 2 }}
              >
                Elegir Archivo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>
              {selectedImage && (
                <Typography variant="body2" color="textSecondary">
                  {selectedImage.name}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Registrarse
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    ¿Ya tienes una cuenta? Iniciar Sesión
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

export default RegisterPage;
