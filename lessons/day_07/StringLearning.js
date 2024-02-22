let myName = "Nhu\\Vo";
console.log(myName); // Nhu\Vo
/**
 * To print out special character, use \ before that character
 */

let myString = "abcd1234 ";
// Length
const myStrLength = myString.length;
console.log(myStrLength); // 9

// Get a character at a position
for (let index = 0; index < myStrLength; index++) {
    console.log(typeof myString.charAt(index)); // String
}

// Get rid of spaces at start and the end
console.log(myString.trim()); // abcd1234
console.log(myString.trim().length); // 8

// Replace / / | g global, i insensitive
let repStr = "tmomi mnmay gMap mnmhamu 7h";
console.log(repStr.replace(/M/gi, "")); // toi nay gap nhau 7h

// 200mins
let containingStr = "200mins";
let number = containingStr.replace(/[^0-9]/g, "");
console.log(number); // 200
console.log(number + 1); // 2001
console.log(Number(number) + 1); // 201

// String template | Output: type of number: string -abc-
console.log(`type of number: ${typeof number} ${"-abc-"}`);

// Concatenation concat
console.log("Hello, ".concat("Tui ten Teo!") + " How are you?");

// Substring
let url = "https://sdetpro.com/";
const startIndex = 8;
const endIndex = 19;
console.log(url.substring(startIndex, endIndex));

console.log("Domain name:", getDomainName(url));

function getDomainName(url) {
    let domain;
    const indicator = "://";
    const indexOfIndicator = url.indexOf(indicator);
    if(indexOfIndicator < 0)
        throw Error(`Invalid url: ${url}`);
    const domainStartIndex = indexOfIndicator + indicator.length;
    return url.substring(domainStartIndex).replace(/\//gi, "");
}

// Split
let googleUrl = "https://google.com/";
console.log(googleUrl.split("://"));
