"use strict";
// Question#4:
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
fetchWithError()
    .then((message) => {
    console.log(message);
})
    .catch((error) => {
    console.error(error);
});
