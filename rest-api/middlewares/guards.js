function hadUser() {
    return (req, res, next) => {
        if(req.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if(req.user) {
            res.redirect('/');    // TODO check assignment for correct redirect
        } else {
            next();
        }
    };
}

module.exports = {
    hadUser, 
    isGuest
};