const mongoose = require("mongoose");

const {MONGODB_URI} = process.env;

exports.connect = () => {
    mongoose.connect(MONGODB_URI, {
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