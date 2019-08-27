module.exports = function(req, res, next) {
    if(req.user) {
        return res.redirect("/home");
    }
    return res.redirect("/signin");
}