"use strict";

class BarcodeGenerator {

    constructor(size = 1) {
        this.numberLength = size;
    }

    create() {
        // Создаем константу со случайным числом и длиной numberLength
        const minRange = Math.pow(10, this.numberLength - 1);
        const maxRange = Math.pow(10, this.numberLength);
        const randomNumber = Math.floor(Math.random() * (maxRange - minRange)) + minRange;

        // Проверяем указан ли префикс и выводим результат
        if(this[BarcodeGenerator.prefix]) {
            return `${this[BarcodeGenerator.prefix]}-${randomNumber}`;
        } else {
            return `${randomNumber}`;
        }
    }
}

//Статическое свойство, использование Symbol позволяет задавать всем префиксам уникальное имя
BarcodeGenerator.prefix = Symbol('PREFIX');

//Проверка на работоспособность
const generator = new BarcodeGenerator(4);

generator[BarcodeGenerator.prefix] = 'AA';
console.log(generator.create());

generator[BarcodeGenerator.prefix] = 'XX';
console.log(generator.create());
console.log(generator.create());
console.log(generator.create());

delete generator[BarcodeGenerator.prefix];
console.log(generator.create());