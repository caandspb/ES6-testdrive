"use strict";

function applyForVisa(documents) {
    console.log('Обработка заявления...');
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .2 ? resolve({}) : reject('В визе отказано!');
        }, 500);
    });
    return promise;
}

function bookHotel() {
    console.log("Бронируем отель");
    let promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .3 ? resolve({}) : reject('Китайцы окупировали все отели, свободных мест нет!');
        }, 500);
    });
    return promise2;
}

function buyTickets() {
    console.log("Покупаем билеты");
    let promise3 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .3 ? resolve("Удачного отдыха") : reject('Стая бакланов облюбовала аэропорт, все полеты в течение месяца отменены!');
        }, 500);
    });
    return promise3;
}

applyForVisa({})
    .then(visa => console.info('Виза получена'))
    .then(bookHotel)
    .then(buyTickets)
    .then(msg => console.log(msg))
    .catch(error => console.error(error));
