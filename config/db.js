const {Pool}=require("pg");

const pool =new Pool({
    user: "postgres",
    host: "192.168.1.160",
    database: "ShubhamDb",
    password: "12345",
    port: "5432"
});

module.exports=pool;

