const User = require("../models/user.model")

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message,
            })
        } else {
            res.send(data);
        }
    })
}

exports.create = (req,res) => {
    if(!res.body) {
        res.status(400).send({
            message: "Content can not be empty"
        })
    }

    const user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    })

    User.create(user, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || "Some occur while creating a user"
            });
        } else {
            res.send(data);
        }
    })
}

exports.login = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    })
    User.login(user, (err, data) => {
        if(err) {
            if(err.type === "not_found" || err.type === "incorrect_password") {
                res.status(404).send({
                    message: "Wrong email or password",
                })
            } else {
                res.status(500).send({
                    message: "Error when fetching user..."
                })
            }
        } else {
            res.send(data);
        }
    })
}