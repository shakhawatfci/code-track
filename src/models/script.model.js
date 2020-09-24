// 'use strict';

var dbConn = require('../../config/database_connection');

var Script = function (script) {

    this.script_name  = script.script_name;
    this.publish_date = script.publish_date;
    this.status       = script.status;

};

// insert a new script 

Script.create = function(newScript,result)
{

    dbConn.query("INSERT INTO script SET ?",newScript,function(err,res){
         
        if(err) { 
             console.log("error: ", err);  
             result(err, null);
            }
        else
        {  
            console.log(res.insertId); 
             result(null, res.insertId);
        }
    });

}

module.exports= Script;