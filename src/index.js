"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./types/enums");
module.exports = async function (req, res) {
    res.json({
        message: enums_1.EnumTest.HELLO_WORLD,
    });
};
