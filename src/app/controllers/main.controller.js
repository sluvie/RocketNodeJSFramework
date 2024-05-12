getMainPage = function (req, res, next) {
    res.render("index", {});
};

const mainController = Object.freeze({
    getMainPage
});

module.exports = mainController;