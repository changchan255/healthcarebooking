import express from 'express';
import homepageController from "../controller/homepageController";

// init all web routes

let router = express.Router();

let initAllWebRoutes = (app) =>{
    router.get("/", homepageController.getHomepage);

    return app.use("/", router);
};

module.exports = initAllWebRoutes;