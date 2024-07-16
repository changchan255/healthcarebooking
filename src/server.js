require('dotenv').config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initAllWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import configSession from "./config/session";

let app = express();

// config express cookie
app.use(cookieParser('secret'));

// show flash messages
app.use(connectFlash());

//config body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view Engine
configViewEngine(app);

// config app session
configSession(app);

// config passport middleware
app.use(passport.initialize());
app.use(passport.session());



//init all web routes
initAllWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});