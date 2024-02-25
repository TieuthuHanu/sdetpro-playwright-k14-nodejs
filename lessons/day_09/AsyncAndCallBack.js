/**
 * 1. Send request -> response
 * 2. Process response
 * 3. Validate responsee
 */

function sendRequest(url, callback) {
    console.log('1. Sending request to', url);
    setTimeout(function () {
        callback ({ status: 200 });
    }, 1000)
}

function processResponse(response, callback) {
    console.log('2. Processing response:', response);
    setTimeout(function () {
        callback (response.status);
    }, 1000)
}

function validateResponse(statusCode) {
    console.log('3. Validating...');
    if(statusCode === 200)
        console.log('Pass!');
    else
        console.error('Failed, status code:', statusCode);    
}

const targetUrl = "https://sdetpro.com"
sendRequest(targetUrl, function(response) {
    processResponse(response, function(statusCode) {
        validateResponse(statusCode);
    })
})