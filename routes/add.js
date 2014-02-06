var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data);
	res.render('add'); //search for handlebar
	data["friends"].push({"name": req.query.name, "description":req.query.description, "imageURL":"http://lorempixel.com/400/400/people"});
 }