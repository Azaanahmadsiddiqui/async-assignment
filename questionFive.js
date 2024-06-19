"use strict";
// Question#5:
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
}
function executeSequentially() {
    fetchData()
        .then((fetchedData) => {
        console.log(fetchedData);
        return processData(fetchedData);
    })
        .then((processedData) => {
        console.log(processedData);
    })
        .catch((error) => {
        console.error(error);
    });
}
executeSequentially();
