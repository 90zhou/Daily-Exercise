var mysql= require('mysql');
var config=null;

if(process && process.env && process.env.HOME){
	config =require('./env/'+process.env.HOME +'js');
}else{
	config=require('./env/development');
}

module.exports=function(){

	//链接db链接
	var db=mysql.createConnection({
		host:config.mysql.host1,
		user:config.mysql.user,
		password:config.mysql.password,
		port:config.mysql.port1,
		database:config.mysql.database,  //设置使用库
	});

	// db.connect()
	return db;
}