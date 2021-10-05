/**
 *
 * @param {Array} array
 */
function lowerCaseWords(array) {
  let output = [];
  let lowerCaseWordsPromise = new Promise(function (resolve, reject) {
    for (let x = 0; x < array.length; x++) {
      if (typeof array[x] === "string") {
        output.push(array[x].toLowerCase());
      }
    }
    if (output.length == 0) {
      reject();
    }
    resolve();
  });
  lowerCaseWordsPromise.then(
    function (value) {
      console.log(output);
    },
    function (error) {
      console.log("No Results");
    }
  );
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray);
