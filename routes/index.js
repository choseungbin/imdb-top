var express = require('express');
var superagent = require('superagent');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	superagent.get("http://www.myapifilms.com/imdb/top")
		.query({
			end: 250,
			data: 'F'
		})
		.set({ Accept: 'application/json' })
		.end(function(e, imdb) {
			if (e) next(e);
			var rankData = imdb.body;
			res.render('index', { content: rankData });
		});
});

module.exports = router;
