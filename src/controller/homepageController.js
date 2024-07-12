import userService from "../services/userService";

let getHomepage = (req, res) => {
    return res.render('homepage.ejs');
};

let getRegisterPage = (req, res) => {
    return res.render('auth/register.ejs');
}

let createNewUser = async (req, res) => {
    let user = req.body
    let message = await userService.createNewUser(user);
    console.log(message);
    return res.redirect("/")
}

let getLoginPage = (req, res) => {
    return res.render('auth/login.ejs');
};

let handleRegister = async (req, res) => {
    // validate input fields

    // create a new user
    try {
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            address: req.body.address,
            createdAt: Date.now()
        };
        let message = await userService.createNewUser(user);
        console.log(message);
        return res.redirect("/")
    }catch(err) {
        console.log(err);
    }
};

module.exports = {
    getHomepage: getHomepage,
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser,
    getLoginPage: getLoginPage,
    handleRegister: handleRegister
};