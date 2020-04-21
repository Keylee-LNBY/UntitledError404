const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require("../../models/userModel");
const passport = require("../../passport");

// post route: /api/users
router.post("/", (req, res) => {
    console.log('req.body', req.body);
    const { firstName, lastName, username, password } = req.body;
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("userAuth.js post error: ", err);
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            });
        } else {
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                password: password,
                username: username,
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
    // console.log(req);
    console.log("req.user", req.user);
    // console.log("req.body", req.body);
    // console.log("req.user.username", req.user.username);
    // console.log("req.password", req.password);
    if (req.user) {
        res.json({ user: req.user });
        console.log(req.user);
    } else {
        res.json({ user: null });
    }
});

router.post(
    "/login",
    function (req, res, next) {
        console.log("routes/userAuth.js, login, req.body: ");
        console.log(req.body);
        console.log("req.user", req.user);
        console.log("next", next);
        next();
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in", req.user);
        var userInfo = {
            username: req.user.username
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
