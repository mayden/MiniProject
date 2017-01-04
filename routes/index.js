var express = require('express');
var router = express.Router();
var request = require("request");
var json2csv = require('json2csv');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    var apiUrl = "http://oknesset.org/api/v2/bill";
    var fieldNames = ['Title', 'URL', 'Date', 'Title', 'Popular Name', 'Stage', 'Resource URL'];

    request({
        url: apiUrl,
        json: true
    }, function (error, response, apiData) {
        if (!error && response.statusCode === 200) {
            var csv = json2csv({ data: apiData.objects, fieldNames: fieldNames });
            fs.writeFile('file.csv', csv, function(err) {
                if (err) throw err;
                console.log('File has been succesfully saved');
            });
        }
    })
  res.render('index', {
                  title: 'BillsTimeline' });
});

module.exports = router;

