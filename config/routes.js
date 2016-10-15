var Index = require('../app/controllers/index');
var User = require('../app/controllers/user');
var Movie = require('../app/controllers/movie');

module.exports = function(app){
//会话持久逻辑预处理
app.use(function(req,res,next){
	var _user = req.session.user;
	console.log(_user+'----');
	app.locals.user = _user;
	next();
});

// index page
app.get('/',Index.index);

//User
app.post('/user/signup',User.signup);
app.post('/user/signin',User.signin);
app.get('/signin',User.showSignin);
app.get('/signup',User.showSignup);
app.get('/logout',User.logout);
app.get('/admin/userlist',User.list);

//Movie
app.get('/movie/:id',Movie.detail);
app.get('/admin/new',Movie.addnew);
app.get('/admin/update/:id',Movie.update);
app.post('/admin/movie',Movie.save);
app.get('/admin/list',Movie.list);
app.delete('admin/list',Movie.del);





};


