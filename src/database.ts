import {Pool} from 'pg';

export const pool = new Pool({
    user: 'techplayzone_user',
    host:'dpg-cqdd0sbqf0us738fsgs0-a.oregon-postgres.render.com',
    password: 'O6zB6RPMaFc0CppUy2bIKCCTp4urGWhF',
    database: 'techplayzone',
    port: 5432
})