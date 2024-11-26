const User = require('../models/User'); // Import the Sequelize model

// Add a new user
const addUser = async (user) => {
  try {
    const newUser = await User.create(user); // Create a new user
    return newUser;
  } catch (error) {
    throw new Error(`Error adding user: ${error.message}`);
  }
};

// Get all users
const getAllUsers = async () => {
  try {
    const users = await User.findAll(); // Fetch all users
    return users;
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

// Get a user by ID
const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id); // Fetch user by primary key
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

// Update a user by ID
const updateUser = async (id, updatedData) => {
  try {
    const user = await User.findByPk(id); // Find the user by primary key
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    const updatedUser = await user.update(updatedData); // Update the user data
    return updatedUser;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};

// Delete a user by ID
const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id); // Find the user by primary key
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    await user.destroy(); // Delete the user
    return { message: `User with ID ${id} deleted successfully` };
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

module.exports = { addUser, getAllUsers, getUserById, updateUser, deleteUser };
