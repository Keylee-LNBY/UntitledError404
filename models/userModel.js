const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  // username: {
  //   type: String,
  //   trim: true,
  //   required: "Username is Required"
  // },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  username: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  },

  // lastUpdated: Date,

  // fullName: String
});

// UserSchema.methods.setFullName = function () {
//   this.fullName = `${this.firstName} ${this.lastName}`;

//   return this.fullName;
// };

// UserSchema.methods.lastUpdatedDate = function () {
//   this.lastUpdated = Date.now();

//   return this.lastUpdated;
// };

UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
UserSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("models/userModel.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/userModel.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", UserSchema)

module.exports = User;