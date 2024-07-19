import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    password: 'jostyn001',
    database: 'TechPlayZone',
    port: 5432
})