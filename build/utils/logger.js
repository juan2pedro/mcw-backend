"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const levels = {
    error: 0, warn: 1, info: 2, http: 3, debug: 4,
};
const colors = {
    error: 'red', warn: 'yellow', info: 'blue', http: 'magenta', debug: 'white',
};
winston_1.default.addColors(colors);
const transports = [
    new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.printf(({ timestamp, level, message, metadata }) => {
            return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(metadata)}`;
        })),
    }),
    new winston_1.default.transports.File({
        dirname: "logs",
        filename: "backend.log",
        format: winston_1.default.format.combine(winston_1.default.format.printf(({ timestamp, level, message, metadata }) => {
            return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(metadata)}`;
        })),
    }),
];
const Logger = winston_1.default.createLogger({
    levels: levels,
    transports: transports,
    format: winston_1.default.format.combine(winston_1.default.format.metadata(), winston_1.default.format.timestamp()),
});
exports.default = Logger;
