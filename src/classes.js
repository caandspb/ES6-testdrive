class Task {
    constructor(title = ''){
        this.title = title;
        this.done = false;
        console.log('Создание задачи');
    }

    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }

    static next() {
        Task.count++;
        console.log(Task.count);
    }
}

Task.count = 0;

let task = new Task('Разогреть покушать');

console.log(task.title);
console.log(Task.count);

Task.next();
Task.next();
Task.next();
Task.next();
Task.next();
