"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'techplayzone_user',
    host: 'dpg-cqdd0sbqf0us738fsgs0-a.oregon-postgres.render.com',
    password: 'O6zB6RPMaFc0CppUy2bIKCCTp4urGWhF',
    database: 'techplayzone',
    port: 5432
});
