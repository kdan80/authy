const express = require("express");
const {User} = require("../models/user");

const router = express.Router();

router.use("/", (req, res, next) => {
    if(!req.session.isAuthenticated) return res.status(401).send("You must be logged in to perform that action");
    next();
});

router.post("/", async(req, res) => {
    try {
        const {email} = req.session;
        const userWasDeleted = await User.findOneAndDelete({email});
        if(!userWasDeleted) return res.status(401).send(userWasDeleted);
        req.session.destroy(err => {
            if(err) return res.send(err);
            return res.redirect("/");
        });
    }catch(err) {
        return res.send(err);
    }
});

module.exports = router;