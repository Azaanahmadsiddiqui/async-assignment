"use strict";
// Question#1:
Object.defineProperty(exports, "__esModule", { value: true });
// Write a simple asynchronous Typescript function fetchGreeting that 
// returns a greeting message after a 2-second delay using setTimeout.
function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello! This is greeting.");
        }, 2000);
    });
}
fetchGreeting().then((message) => {
    console.log(message);
});
