const model = require('../models');
const { User } = model;

// Create and Save a user
const create = async (req, res) => {
    console.log('POST body: ',req.body)
    try {
        const postUser = await User.create(req.body);
        return res.status(201).json({ postUser });
    } catch(error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};

// Retrieve all users from the database.
const findAll = async (req, res) => {
    try {
        const allUsers = await User.findAll();
        return res.status(201).json({ allUsers });
    } catch(error) {
        // console.error(err);
        return res.status(500).json({ error: error.message });
    }
};

// Find a single user with an email
const findOne = async (req, res) => {
    try {
        const { userEmail } = req.params;
        const findUser = await User.findOne({
            where: {email:userEmail}
        });
        return res.status(201).json({ userEmail });
    } catch(error) {
        // console.error(error);
        return res.status(500).json({ error: error.message });
    }
};

// Update a user by the id in the request
const update = async (req, res) => {
    try {
        const { userId } = req.params;
        const updateUser = await User.update(req.body, {
            where: {id:userId}
        });
        return res.status(201).json({ updateUser });
    } catch(error) {
        // console.error(err);
        return res.status(500).json({ error: error.message });
    }
};

// Delete a user with the specified id in the request
const remove = async (req, res) => {
    try {
        const { userId } = req.params;
        const deleteUser = await User.destroy({
            where: {id:userId}
        });
    } catch(error) {
        // console.error(err);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { create, findAll, findOne, update, remove };
