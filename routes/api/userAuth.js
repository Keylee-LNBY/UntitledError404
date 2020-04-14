const router = require("express").Router();
// const userController = require("../../controllers/userController");
const User = require("../../models/userModel");
const passport = require("../../passport");

router.post("/", (req, res) => {
    console.log("user signup", req.body);

    const { email, password } = req.body;
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log("userAuth.js post error: ", err);
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            });
        } else {
            const newUser = new User({
                email: email,
                password: password
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser);
            });
        }
    });
});


router.get("/", (req, res, next) => {
    console.log("===== user!!======");
    console.log(req.user);
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ user: null });
    }
});

router.post(
    "/login",
    function (req, res, next) {
        console.log("routes/userAuth.js, login, req.body: ");
        console.log(req.body);
        next();
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in", req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
);

router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.send({ msg: "logging out" });
    } else {
        res.send({ msg: "no user to log out" });
    }
});

module.exports = router;
