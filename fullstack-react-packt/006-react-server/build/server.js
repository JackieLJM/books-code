'use strict';

var express = require('express'),
    app = express(),
    mongojs = require('mongojs'),
    AuthView = require('./react/Auth'),
    bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.route('/register').get(function (req, res) {
	var body = AuthView.register();
	res.render('layout/overlay', { title: 'Register!', body: body });
}).post(function (req, res) {
	var db = mongojs('mysite', ['users']);
	var email = req.body.email;
	var password = req.body.password1;
	var postRes = res;

	if (password !== req.body.password2) {
		var body = AuthView.register('Please match passwords!');

		res.render('layout/overlay', { title: 'Register!', body: body });
	} else {
		db.users.count({ email: email }, function (req, res) {
			if (res) {
				postRes.redirect("/login");
			} else {
				db.users.insert({ email: email, password: password });
				postRes.send("you have been added!");
			}
		});
	}
});

app.listen(3001, function () {
	console.log("Our server is running on port 3001");
});