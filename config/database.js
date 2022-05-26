const mongoose = require("mongoose");

const {JWT_AUTH_DB} = process.env;

exports.connect = () => {
    mongoose.connect(JWT_AUTH_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        process.stdout.write("Connected to mongodb...\n");
    })
    .catch((err) => {
        process.stdout.write("Couldn't connect to mongodb, exiting...\n");
        process.stderr.write(err);
        process.exit(1);
    });
}