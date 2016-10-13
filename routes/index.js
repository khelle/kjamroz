"use strict";
var Route;
(function (Route) {
    class Index {
        indexAction(req, res, next) {
            res.render("index", {
                message: "Hello World!"
            });
        }
    }
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
