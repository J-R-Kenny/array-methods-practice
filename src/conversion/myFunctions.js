//Definitions:
// In all of these example functions and their tests, the following definitions should be used:
//"long":  any string which has a length of 7 or more.
//"odd": any number n for which n % 2 !== 0

import { stringify } from "querystring";

/** return the first "long" string in the given array, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findFirstLongString(inputStrings) {
    let firstLongString = inputStrings.find((string)=> string.length > 6)
    return firstLongString
}

// const findFirstLongString = inputStrings=> inputStrings.find((string)=> string.length > 6)

/** return the first odd number in the given array of numbers, or undefined if none is found.
 * @param {number[]} inputNumbers
 * @return {number|undefined}
 */
function findFirstOddNumber(inputNumbers) {
    let result = inputNumbers.find((element) => element % 2 !== 0)
    return result
}
// const findFirstOddNumber = inputNumbers => inputNumbers.find((element)=> element % 2 !== 0)


/** return the LAST "long" string in the given array of strings, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findLastLongString(inputStrings) {
    let result = inputStrings.findLast((element) => element.length > 6)
    return result
}
// const findLastLongString = inputStrings => inputStrings.findLast((element) => element.length > 6)

/** Given an array of strings of various lengths,
 * return a new array containing only the "long" strings from the input array
 * @param {string[]} inputStrings
 * @returns {string[]}
 * */
function findAllLongStrings(inputStrings) {
    let result = inputStrings.filter((element) => element.length > 6)
    return result
}
// const findAllLongStrings = inputStrings => inputStrings.filter((element) => element.length > 6)

/** given an array of numbers, return a new array containing all the odd numbers in the input array.  Returns an empty array if none are found.
 * @param {number[]} inputNumbers
 * @return {number[]}
 */
function findAllOddNumbers(inputNumbers) {
    let result = inputNumbers.filter((element) => element % 2 !== 0)
    return result
}
// const findAllOddNumbers = inputNumbers => inputNumbers.filter((element) => element % 2 !== 0)

/** Given an array of mixed types of value
 * return a new array containing only those elements of type string.
 * @param {any[]} inputArray
 * @returns {string[]}
 * */
function findAllTheStrings(inputArray) {
    let result = inputArray.filter((element) => typeof element == 'string')
    return result
}
// const findAllTheStrings = inputArray => inputArray.filter((element) => typeof element == 'string')

/** Given an array of people objects,
 * return a new array containing only those people objects whose firstName OR secondName (or both) is long.
 * @param {{firstName: string, secondName:string}[]} inputObjects
 * @returns {{firstName: string, secondName:string}[]}
 * */
function findAllPeopleWithALongName(inputObjects) {
    let result = inputObjects.filter((element) => element.firstName.length > 6 || element.secondName.length > 6 )
    return result
}
// const findAllPeopleWithALongName = inputObjects => inputObjects.filter((element) => element.firstName.length > 6 || element.secondName.length > 6)

/** given an array of numbers return true if all of them are odd, else false.
 * @param {number[]} inputNumbers
 * @return {boolean}
 */
function areAllNumbersOdd(inputNumbers) {
    let result = inputNumbers.every((element) => element % 2 !== 0)
    return result
}
// const areAllNumbersOdd = inputNumbers => inputNumbers.every((element) => element % 2 !== 0 )

/** Given an array of strings of various lengths,
 * return true if all of the strings are "long", else false
 * @param {string[]} inputStrings
 * @returns {boolean}
 * */
function areAllStringsLong(inputStrings) {
    let result = inputStrings.every((element) => element.length > 6)
    return result
}
// const areAllStringsLong = inputStrings => inputStrings.every((element) => element.length > 6)


export {
    findFirstLongString,
    findFirstOddNumber,
    findLastLongString,
    findAllLongStrings,
    findAllOddNumbers,
    findAllTheStrings,
    findAllPeopleWithALongName,
    areAllNumbersOdd,
    areAllStringsLong,
};
