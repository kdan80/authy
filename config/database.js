const mongoose = require("mongoose");

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
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