// load dependencies
require('dotenv').config();
let Sequelize = require("sequelize");
let session = require("express-session");

// initialize sequelize with session store
let SequelizeStore = require("connect-session-sequelize")(session.Store);

// connect to the db
let myDatabase = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: "mysql",
            logging: false,
            storage: "./session.mysql",
});

let sessionStore = new SequelizeStore({
    db: myDatabase
});

let configSession = (app) => {
    app.use(
        session({
            key: "express.sid",
            secret: "secret",
            store: sessionStore,
            resave: true,
            saveUninitialized: false,
            cookie: { httpOnly: false, secure: false, maxAge: (1000 * 60 * 60 * 24) },

        })
    );
};

// create the session table in the db
sessionStore.sync();

module.exports = configSession;

// continue as normal