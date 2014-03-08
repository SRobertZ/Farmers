module.exports = function(app){
	app.use(function(req,res,next){
		res.status(404);
		res.json({errorDescription:'NotFound'});
	});

	app.use(function(err,req,res,next){
		console.error('error at %s\n %s\n', req.url, err);
		res.send(500, {errorDescription:'I am deeply sorry'});
	});
}