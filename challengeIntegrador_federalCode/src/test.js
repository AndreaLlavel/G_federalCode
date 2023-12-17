var request = require('request');
request('http://www.google.com', function(error, response, body) {
    if (!error && responde.statusCode == 200) {
        console.log(body);
    }
});