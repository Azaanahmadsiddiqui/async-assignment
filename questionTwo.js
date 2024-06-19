"use strict";
// Question#2:
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay
function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}
simulateTask();
