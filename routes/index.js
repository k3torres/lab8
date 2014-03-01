var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	projects['grid'] = false;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res)
{
	projects['gird'] = true;
	res.render('index', projects);
}