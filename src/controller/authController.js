let checkLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.redirect("/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if(req.isAuthenticated()){
        return res.redirect("/");
    }
    next();
};

let postLogout = (req, res, next) => {
    req.session.destroy( function(error){
        return res.redirect("/login");
    });
};

module.exports = {
  checkLoggedIn: checkLoggedIn,
  checkLoggedOut: checkLoggedOut,
  postLogout: postLogout
};