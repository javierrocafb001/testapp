	var application = {
		middleware: require('express'),
	        http: require('http'),
		fs: require('fs'),
		path: require('path'),
	             }  	

var public = application.path.join(__dirname, '/');
var app = application.middleware();

app.get('/', function(req, res) {
    res.sendFile(application.path.join(public, 'index.html'));
    return void 0;
});


app.use('/', application.middleware.static(public));


const server = application.http.createServer(app);



server.listen(8080, '192.168.1.54');
