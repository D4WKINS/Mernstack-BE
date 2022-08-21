"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
var index_1 = __importDefault(require("./services/exercise/index"));
var index_2 = __importDefault(require("./services/user/index"));
var errorhandler_1 = require("./errorhandler");
var index_3 = __importDefault(require("./services/index/index"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load .env file
var app = (0, express_1.default)(); // create express app
var port = process.env.PORT || 5000; // 5000 is the default port if not specified in .env
var uri = process.env.MONGO_CONNECTION_STRING;
if (!port)
    throw new Error("No port specified");
if (!uri)
    throw new Error("No uri specified");
//app.use Mounts the specified middleware function or functions at the
//specified path: the middleware function is executed when the base of the requested path matches path.
app.use((0, cors_1.default)()); // allow all requests from all domains, unless specifically configured otherwise
app.use(express_1.default.json()); // This allows us to send JSON to the server
app.use("/exercises", index_1.default);
app.use("/users", index_2.default); // Mount the router on the path /users so to access the routes we need to go to localhost:5000/users
app.use("/", index_3.default);
app.use(errorhandler_1.serverError);
app.get("*", errorhandler_1.notFound); // If the user tries to access a route that doesn't exist, we will send them to the notFound function
console.table((0, express_list_endpoints_1.default)(app));
mongoose_1.default.connect(uri, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("🍃 Successfully Connected to MongoDB"); //Once the connection is established, we print a message to the console
        return [2 /*return*/];
    });
}); });
app.listen(port, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // listen on port(5000) for incoming requests
        console.log("Server is running on port ".concat(port));
        return [2 /*return*/];
    });
}); });
exports.default = app;
