/**
Merge 2 SORTED integer array into one SORTED array
Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]
Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 */

const foo = [1, 12, 16, 28, 34];
const bar = [1, 13, 16, 27, 99];
const mergeArray = merge(foo, bar);
console.log("foo:", foo);
console.log("bar:", bar);
console.log("merge:", mergeArray);

function merge(foo, bar) {
    const merge = [];
    const fooLength = foo.length;
    const barLength = bar.length;
    let fooPosition = 0;
    let barPosition = 0;
    let mergedPosition = 0;

    while (fooPosition < fooLength && barPosition < barLength) {
        const fooValue = foo[fooPosition];
        const barValue = foo[barPosition];
        if (fooValue <= barValue) {
            merge[mergedPosition++] = foo[fooPosition++];
        } else {
            merge[mergedPosition++] = bar[barPosition++];
        }
    }

    while (fooPosition < fooLength) {
        merge[mergedPosition++] = foo[fooPosition++];
    }
    while (barPosition < barLength) {
        merge[mergedPosition++] = bar[barPosition++];
    }
    
    return merge;
}