function asyncFunction01(param1) {
    console.log('Processing:', param1);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnValue = 'asyncFunction01: ' + param1;
            resolve(returnValue);
        }, 1000);
    })
}

function asyncFunction02(param2) {
    console.log('Processing:', param2);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnValue = 'asyncFunction02: ' + param2;
            resolve(returnValue);
        }, 1000);
    })
}

function asyncFunction03(param3) {
    console.log('Processing:', param3);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnValue = 'asyncFunction03: ' + param3;
            resolve(returnValue);
        }, 1000);
    })
}

// Usage async/await
async function run() {
    const returnValue1 = await asyncFunction01('param1');
    const returnValue2 = await asyncFunction02(returnValue1);
    const finalValue = await asyncFunction03(returnValue2);
    console.log(finalValue);
}

run();