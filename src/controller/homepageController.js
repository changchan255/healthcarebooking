let getHomepage = (req, res) => {
    return res.render('homepage.ejs');
};

let getRegisterPage = (req, res) => {
    return res.render('register.ejs');
}

let createNewUser = (req, res) => {
    console.log(req.body);
}

module.exports = {
    getHomepage: getHomepage,
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};