// src/pages/RegisterPlayerPage.js
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Avatar, Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const categories = ["4ta", "5ta", "6ta", "7ma"];

function RegisterPlayerPage() {
  const [formData, setFormData] = useState({
    player1Name: '',
    player1Phone: '',
    player2Name: '',
    player2Phone: '',
    selectedCategories: [],
    timeConstraints: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (category) => {
    const currentCategories = formData.selectedCategories;
    const newCategories = currentCategories.includes(category)
      ? currentCategories.filter((cat) => cat !== category)
      : [...currentCategories, category];
    setFormData({ ...formData, selectedCategories: newCategories });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro del jugador
    console.log("Player Register Form Submitted", formData);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <SportsSoccerIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Players
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="player1Name"
            label="Nombre Jugador 1"
            name="player1Name"
            autoComplete="name"
            value={formData.player1Name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="player1Phone"
            label="Teléfono de Contacto 1"
            name="player1Phone"
            autoComplete="tel"
            value={formData.player1Phone}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="player2Name"
            label="Nombre Jugador 2"
            name="player2Name"
            autoComplete="name"
            value={formData.player2Name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="player2Phone"
            label="Teléfono de Contacto 2"
            name="player2Phone"
            autoComplete="tel"
            value={formData.player2Phone}
            onChange={handleChange}
          />
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Categoría de la Dupla</FormLabel>
            <FormGroup>
              {categories.map((category) => (
                <FormControlLabel
                  key={category}
                  control={
                    <Checkbox
                      checked={formData.selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                  }
                  label={category}
                />
              ))}
            </FormGroup>
          </FormControl>
          <FormLabel component="legend">Imposibilidad Horaria (opcional)</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            id="timeConstraints"
            label="Detallanos aquí si tienen algun problema con los horarios"
            name="timeConstraints"
            multiline
            rows={3}
            value={formData.timeConstraints}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterPlayerPage;