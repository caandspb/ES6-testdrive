"use strict";

class Task {
    constructor() {
        console.log("Создание задачи");
    }
}

class SubTask extends Task {

}

let task = new Task();
let subtask = new SubTask();

console.log(task);
console.log(subtask);