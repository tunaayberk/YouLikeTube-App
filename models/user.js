const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.virtual("passwordConfirmation")
  .get(() => this.passwordConfirmation)
  .set(value => (this.passwordConfirmation = value));

UserSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("password")) return next();
  if (user.password !== user.passwordConfirmation)
    throw new Error("Your password does not match your password confirmation");

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.authenticate = function(plainPassword, callback) {
  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
