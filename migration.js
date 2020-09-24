const db = require('./config/database_connection');

db.serialize(function(){

    db.run(`CREATE TABLE IF NOT EXISTS Artist (id INTEGER PRIMARY KEY,
        application_name TEXT NOT NULL,
        releas_date TEXT NOT NULL,
        s INTEGER DEFAULT 1 )`);


});