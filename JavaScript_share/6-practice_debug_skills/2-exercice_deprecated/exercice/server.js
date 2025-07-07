// server.js
const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');
const app = express();
const reservationsRoute = require('./routes/reservations.route');

const file = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDocument = yaml.load(file);

app.use(express.json());
app.use('/api/reservations', reservationsRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
  console.log(`Documentation Swagger disponible sur http://localhost:${PORT}/api-docs`);
});
