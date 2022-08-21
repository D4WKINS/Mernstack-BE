"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.notFound = void 0;
var notFound = function (req, res, next) {
    res.status(404).send({ error: "Sorry the resource you are looking for does not exist" });
};
exports.notFound = notFound;
var serverError = function (req, res, next) {
    res.status(500).send({ error: "Sorry the server is experiencing an error" });
};
exports.serverError = serverError;
