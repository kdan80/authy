const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
    if(!req.session.isAuthenticated) return res.redirect("/");
    next();
});

router.get("/", (req,res) => {
    try {
        return res.render("dashboard", {username: req.session.username, message: req.session.message});
    } catch(err) {
        return res.status(404).send(err.message);
    }
});

module.exports = router;