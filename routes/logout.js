const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
    if(!req.session.isAuthenticated) return res.status(401).send("You must be logged in to perform that action");
    next();
});

router.get("/", (req, res) => {
    try {
        req.session.destroy(err => {
            if(err) return res.send(err);
            return res.redirect("/");
        });  
    } catch(err) {
        return res.send(err);
    }
});

module.exports = router;