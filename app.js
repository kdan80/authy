//require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");

// Session store
const session = require("express-session");
const MongoStore = require("connect-mongo");
const sessionStore = MongoStore.create({ mongoUrl: process.env.AUTHY_DB});

// App settings
const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    secure: process.env.NODE_ENV === "production",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 300000
    }
}))
app.use(cors());

app.get("/", (req, res) => {
    res.render("index");
});

// Routing
const register = require("./routes/register");
app.use("/register", register);

const login = require("./routes/login");
app.use("/login", login);

const dashboard = require("./routes/dashboard");
app.use("/dashboard", dashboard);

const logout = require("./routes/logout");
app.use("/logout", logout);

const deleteuser = require("./routes/deleteuser");
app.use("/deleteuser", deleteuser);


module.exports = app;