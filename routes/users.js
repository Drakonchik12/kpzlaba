const express = require('express');
const router = express.Router();
const userModel = require('../models/user');


// Получить всех пользователей
router.get('/', (req, res) => {
    res.json("kklslsl");
//  userModel.getAllUsers((err, users) => {
//    if (err) {
//     return res.status(500).json({ error: 'Ошибка получения пользователей' });
//   }
//    res.json(users);
//  });
});

// Получить пользователя по ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  userModel.getUserById(userId, (err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }
    res.json(user);
  });
});

// Добавить пользователя
router.post('/', (req, res) => {
  const { username, email, password_hash, role, first_name, last_name, phone_number } = req.body;

  userModel.addUser({ username, email, password_hash, role, first_name, last_name, phone_number }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при добавлении пользователя' });
    }
    res.status(201).json({ message: 'Пользователь добавлен успешно', userId: result.insertId });
  });
});

// Обновить пользователя по ID
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email, password_hash, role, first_name, last_name, phone_number } = req.body;

  userModel.updateUser(userId, { username, email, password_hash, role, first_name, last_name, phone_number }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при обновлении пользователя' });
    }
    res.json({ message: 'Пользователь обновлен успешно' });
  });
});

// Удалить пользователя по ID
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  userModel.deleteUser(userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Ошибка при удалении пользователя' });
    }
    res.json({ message: 'Пользователь удален успешно' });
  });
});

module.exports = router;
