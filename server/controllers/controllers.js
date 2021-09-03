const model = require('../models');
const { User } = model;

// Create and Save a user
const create = async (req, res) => {
  try {
    console.log('XXX:  ',req.body)
    const postUser = await User.create(req.body);
    return res.status(201).json({ postUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Retrieve all users from the database.
const findAll = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(201).json({ allUsers });
  } catch (error) {
    // console.error(err);
    return res.status(500).json({ error: error.message });
  }
};

// Find a single user with an email
const findOne = async (req, res) => {
  try {
    const { userEmail } = req.params;
    const User = await User.findOne({
      where: { email: userEmail },
    });
    return res.status(201).json({ User });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Update a user by the id in the request
const update = async (req, res) => {
  try {
    const { email, providers } = req.body;
    const getUser = await User.findOne({
      where: { email: email },
    });

    let newProviders = getUser.dataValues.providers = [...getUser.providers, ...providers];
    const updateUser = await User.update({providers: newProviders}, {
      where: { email: email },
    });
    console.log("UP: ", updateUser)
    return res.status(201).json({ newProviders });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Delete a user with the specified id in the request
const remove = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleteUser = await User.destroy({
      where: { id: userId },
    });
  } catch (error) {
    // console.error(err);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { create, findAll, findOne, update, remove };
