const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require("bcryptjs");

// Define a schema ie the shape a document will take in the db
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        maxlength: 20,
        index: true,
        required: true
    },
    email: {
        type: String,
        minlength: 3,
        maxlength: 254,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

// Hash the incoming password before we save it
userSchema.pre("save", async function(next){

    const user = this;
    if (!user.isModified("password")) return next();

    try {
        user.password = await bcrypt.hash(user.password, 10);
        return next();
    } catch(err) {
      return next(err);
    }
});

// Compile a model from our schema. This will be used to construct documents and read from documents
const User = mongoose.model('User', userSchema);

const validateUser = user => {

    const schema = Joi.object({
        username: Joi.string().min(5).max(20).required(),
        email: Joi.string().min(3).max(254).required(),
        password: Joi.string()
            .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))
            .required(), 
      });
    
      return schema.validateAsync(user);
};

module.exports = {
    User,
    validateUser
};