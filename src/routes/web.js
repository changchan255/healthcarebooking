import express from 'express';
import homepageController from "../controller/homepageController";

// init all web routes

let router = express.Router();

let initAllWebRoutes = (app) =>{
    router.get("/", homepageController.getHomepage);
    router.get("/register", homepageController.getRegisterPage);
    router.post("/create-new-user", homepageController.createNewUser);

    return app.use("/", router);
};

module.exports = initAllWebRoutes;