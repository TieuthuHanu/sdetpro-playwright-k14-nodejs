/**
Given string: Hey, tui ten Teo, ban cung ban cung ten Teo ah?
Count duplicate words in the given string
*/

const givenStr = "Hey, tui ten Teo, ban cung ban cung ten Teo ah?";
let individualWords = givenStr.replace(/,/gi, "").split(" ");
console.log(individualWords);

const countWord = groupWordMap(givenStr);
console.log(countWord);

function groupWordMap(givenString) {
    let wordMap = new Map();
    for (const word of individualWords) {
        if (!wordMap.has(word))
            wordMap.set(word, 1);
        else
            wordMap.set(word, wordMap.get(word) + 1);
    }
    return wordMap;
}