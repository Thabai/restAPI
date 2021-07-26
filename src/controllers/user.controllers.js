exports.createUser = (req, res) => {
    try {
        const user = {
        username: req.body.user,
        email: req.body.email,
        password: req.body.pass,
    };
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({message: "Create user unsuccessful"})
    }
};

exports.listUser = (req, res) => {
    try {
        const user = {
            username: req.user,
            email: req.email,
        };
        res.status(200).send({user});
    } catch (error) {
        res.status(500).send({ message: "List user unsuccessful"});
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
            username: req.params.username,
            email: req.params.email,
            password: req.params.password,
        };
        res.status(200).send({user, message: 'User deleted'});
    } catch (error) {
        res.status(500).send({ message: "Delete user unsuccessful"});
    }
};