"use strict";
// Question#3:
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function fetchData that returns a Promise which resolves with the 
// string "Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then((message) => {
    console.log(message);
});
