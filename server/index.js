require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const PORT = process.env.PORT;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema");
const taskRouter = require('./routes/userdata');

const clientid = process.env.CLIENTID;
const clientsecret = process.env.CLIENTSECRET;

app.use(cors({
    origin: "https://taskify-frontend-rho.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true, // Ensure cookies are only sent over HTTPS
        sameSite: 'none' // Ensure cookies are sent cross-site
    }
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(
    new OAuth2Strategy({
        clientID: clientid,
        clientSecret: clientsecret,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await userdb.findOne({ googleId: profile.id });
            if (!user) {
                user = new userdb({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails[0].value,
                    image: profile.photos[0].value
                });
                await user.save();
            }
            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "https://taskify-frontend-rho.vercel.app/todo",
    failureRedirect: "https://taskify-frontend-rho.vercel.app/login"
}));

app.get('/', (req, res) => {
    res.send({ 'name': 'Server Is On' });
});

// Route to check if user is logged in
app.get("/login/success", async (req, res) => {
    try {
        if (req.user) {
            res.status(200).json({ message: "User logged in", user: req.user });
        } else {
            res.status(400).json({ message: "Not authorized" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.use('/api', taskRouter);

app.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect("https://taskify-frontend-rho.vercel.app");
    });
});

app.get("/api/user/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const user = await userdb.findOne({ email: email });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});



app.listen(PORT, () => {
    console.log(`server start at port no ${PORT}`);
});
