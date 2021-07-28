const { Router } = require('express');
const { createUser, listUser, updateUser, deleteUser } = require('../controllers/user.controllers');
const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users/:username', listUser);
userRouter.put('/users', updateUser);
userRouter.delete("/users/:username", deleteUser);

module.exports = userRouter;
