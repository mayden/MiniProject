var express = require('express');
var router = express.Router();
var request = require("request");


/* GET home page. */
router.get('/', function(req, res, next) {
    var apiUrl = "http://oknesset.org/api/v2/bill";

    request({
        url: apiUrl,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
        }
    })
  res.render('index', {
                  title: 'BillsTimeline' });
});

module.exports = router;
