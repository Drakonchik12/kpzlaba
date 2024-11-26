const express = require('express');
const router = express.Router();
const { addUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../utils/queries'); // Import Sequelize methods

// Получить всех пользователей
router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения пользователей' });
  }
});

// Получить пользователя по ID
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId); // Fetch user by ID
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message || 'Пользователь не найден' });
  }
});

// Добавить пользователя
router.post('/', async (req, res) => {
  const { username, email, password_hash, role, first_name, last_name, phone_number } = req.body;

  try {
    const newUser = await addUser({
      username,
      email,
      password_hash,
      role,
      first_name,
      last_name,
      phone_number,
    });
    res.status(201).json({ message: 'Пользователь добавлен успешно', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при добавлении пользователя' });
  }
});

// Обновить пользователя по ID
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const { username, email, password_hash, role, first_name, last_name, phone_number } = req.body;

  try {
    const updatedUser = await updateUser(userId, {
      username,
      email,
      password_hash,
      role,
      first_name,
      last_name,
      phone_number,
    });
    res.json({ message: 'Пользователь обновлен успешно', user: updatedUser });
  } catch (error) {
    res.status(404).json({ error: error.message || 'Ошибка при обновлении пользователя' });
  }
});

// Удалить пользователя по ID
router.delete('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    await deleteUser(userId);
    res.json({ message: 'Пользователь удален успешно' });
  } catch (error) {
    res.status(404).json({ error: error.message || 'Ошибка при удалении пользователя' });
  }
});

module.exports = router;
