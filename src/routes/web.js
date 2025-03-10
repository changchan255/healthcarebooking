import express from 'express';
import homepageController from "../controller/homepageController";
import auth from "../validation/authValidation";
import initPassportLocal from "../controller/passport/passportLocal";
import passport from "passport";
import authController from "../controller/authController";

//init passport-local
initPassportLocal();

// init all web routes

let router = express.Router();

let initAllWebRoutes = (app) =>{
    router.get("/", homepageController.getHomepage);
    router.get("/register", homepageController.getRegisterPage);
    router.get("/login", authController.checkLoggedOut, homepageController.getLoginPage);

    router.post("/register", auth.validateRegister, homepageController.handleRegister);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));
    router.post("/logout", authController.postLogout);

    router.post("/create-new-user", homepageController.createNewUser);

    return app.use("/", router);
};

module.exports = initAllWebRoutes;