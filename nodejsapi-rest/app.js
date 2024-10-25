const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para procesar datos JSON
app.use(express.json());

// Importar rutas de usuarios
const userRoutes = require('./routes/users');

// Usar rutas de usuarios
app.use('/api/users', userRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API REST en Node.js funcionando');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
