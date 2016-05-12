var config=null;

if(process && process.env && process.env.HOME){
	config =require('./env/'+process.env.HOME +'js');
	consolo.log(config)
}else{
	config=require('./env/development');
}

module.exports=config