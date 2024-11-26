const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const sequelize = require('./db'); // Import the Sequelize instance
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON
app.use(bodyParser.json());

// Роуты для пользователей
app.use('/api/users', usersRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
