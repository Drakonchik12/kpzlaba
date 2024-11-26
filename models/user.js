const pool = require('../db');

// Добавить нового пользователя
const addUser = (user, callback) => {
  const sql = `INSERT INTO Users (username, email, password_hash, role, first_name, last_name, phone_number)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  pool.query(
    sql,
    [
      user.username,
      user.email,
      user.password_hash,
      user.role,
      user.first_name,
      user.last_name,
      user.phone_number
    ],
    callback
  );
};

// Получить всех пользователей
const getAllUsers = (callback) => {
  const sql = 'SELECT * FROM Users';
  pool.query(sql, callback);
};

// Получить пользователя по ID
const getUserById = (id, callback) => {
  const sql = 'SELECT * FROM Users WHERE id = ?';
  pool.query(sql, [id], callback);
};

// Обновить пользователя по ID
const updateUser = (id, user, callback) => {
  const sql = `UPDATE Users SET 
               username = ?, email = ?, password_hash = ?, role = ?, first_name = ?, 
               last_name = ?, phone_number = ? WHERE id = ?`;

  pool.query(
    sql,
    [
      user.username,
      user.email,
      user.password_hash,
      user.role,
      user.first_name,
      user.last_name,
      user.phone_number,
      id
    ],
    callback
  );
};

// Удалить пользователя по ID
const deleteUser = (id, callback) => {
  const sql = 'DELETE FROM Users WHERE id = ?';
  pool.query(sql, [id], callback);
};

module.exports = { addUser, getAllUsers, getUserById, updateUser, deleteUser };
