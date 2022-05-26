const express = require("express");
const {User, validateUser} = require("../models/user");

const router = express.Router();

// If the user is logged in redirect to the dashboard, valid for all routes
router.use("/", (req, res, next) => {
    if(req.session && req.session.isAuthenticated) return res.redirect("/dashboard");
    next();
});

router.get("/", (req, res) => {
    try {
        return res.redirect("/")
    } catch(err) {
        return res.send(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const {username, email, password} = req.body;

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) return res.status(400).send("Email is already taken");

        const candidateUser = await validateUser({
            username: username,
            email: email,
            password: password
        });
        const user = await User.create(candidateUser);

        req.session.email = user.email;
        req.session.username = user.username;
        req.session.message = "Account created successfully";
        req.session.isAuthenticated = true;

        return res.redirect("/dashboard");
    } catch(err){
        return res.status(404).send(err.message);
    }
});

module.exports = router;