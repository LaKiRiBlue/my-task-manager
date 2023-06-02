
let prompt = require('prompt-sync')();
let choice = "5";

let tasks = [];
let tasksDone = [];

console.log("Welcome to your task manager")

do {

    console.log("1. to see all your tasks\n"+
    "2. to add a task\n" +
    "3. to delete a task\n" +
    "4. to mark a task as done\n" +
    "5. to Exit the task manager\n");

 choice = prompt ("");

switch (choice) {
case "1":
if (tasks.length == 0) {
console.log("No tasks");
}
else {
for (let i = 0; i < tasks.length; i++) {
console.log(i + " : " + tasks[i] + " ( completed : " + tasksDone[i] + ")");
}
}
break;
case "2":
let task = prompt("New task to add : ");
tasks.length += 1;
tasksDone.length += 1;
tasks[tasks.length - 1] = task;
tasksDone[tasksDone.length - 1] = false;
break;
case "3":
if (tasks.length == 0) {
console.log("No tasks to delete");
}
else {
for (let i = 0; i < tasks.length; i++) {
console.log(i + " : " + tasks[i] + " ( completed : " + tasksDone[i] + ")");
}
let deleteItem = prompt("Which one to delete ? :");
if (deleteItem >= tasks.length) {
console.log("Tasks " + deleteItem + " does not exist");
}
else {
for (let i = deleteItem; i < tasks.length - 1; i++) {
tasks[i] = tasks[i + 1];
tasksDone[i] = tasksDone[i + 1];
}
tasks.length -= 1;
tasksDone.length -= 1;
}
}

break;
case "4":
if (tasks.length == 0) {
console.log("No tasks to mark completed");
}
else {
for (let i = 0; i < tasks.length; i++) {
console.log(i + " : " + tasks[i] + " ( completed : " + tasksDone[i] + ")");
}
let markItem = prompt("Which one to mark completed ? :");
if (markItem >= tasks.length) {
console.log("Tasks " + markItem + " does not exist");
}
else {
tasksDone[markItem] = true;
}
}
break;
case "5":
break;
default:
console.log("Don't know that choice : " + choice);
}

} while (choice !== "5")

console.log("Exit the task manager");