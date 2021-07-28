const sql = require("../db/connection");
const { QueryTypes } = require('sequelize');

 exports.createUser = async (req, res) => {
  try {
    const text = "INSERT INTO movieusers(username, email, password) VALUES(:username, :email, :password) RETURNING *"; 
   await sql.query(text, {
      replacements: { 
          username: req.body.user,
          email: req.body.email,
          password: req.body.pass,
      },
      type: QueryTypes.INSERT,
      });
    res.status(200).send({message: 'User created'});
  } catch (error) {
      console.log(error);
    res.status(500).send(error);
  }
};

exports.listUser = (req, res) => {
    try {
        const user = {
            user: req.params.username,
            email: req.params.email,
        };
        res.status(200).send({user});
    } catch (error) {
        res.status(400).send({ message: "List user unsuccessful"});
    }
};

exports.updateUser = (req, res) => {
    try {
        const user = {
            username: req.body.user,
            email: req.body.email,
            password: req.body.pass,
        };
        res.status(200).send({user, message: 'Information updated'});
    } catch (error) {
        res.status(500).send({ message: "Update user unsuccessful"});
    }
};

exports.deleteUser = (req, res) => {
    try {
        const user = {
            user: req.params.username,
            email: req.params.email,
            password: req.params.password,
            token: req.headers.authorization,
        };
        res.status(200).send({user, message: 'User deleted'});
    } catch (error) {
        res.status(400).send({ message: "Delete user unsuccessful"});
    }
};