var http = require('http')

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function makeRandomMathProblem() {
    var num1 = randomIntFromInterval(1, 20).toString();
    var num2 = randomIntFromInterval(1, 20).toString();
    console.log('/' + num1 + '+' + num2 + '=');
    http.get({
        host: 'consumer',
        port: 3000,
        path: '/' + num1 + '+' + num2 + '='
    }, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            console.log(parsed)
        });
    });
}

setInterval(makeRandomMathProblem, 1000);