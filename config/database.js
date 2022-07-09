const mongoose = require("mongoose");

const {AUTHY_DB} = process.env;

exports.connect = () => {
    mongoose.connect(AUTHY_DB, {
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