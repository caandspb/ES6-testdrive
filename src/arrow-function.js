"use strict";


let person = {
    name: "Bob",
    greet: function() {
        setTimeout(function() {
            console.log('Hi ' + this.name);
        }, 2000);
    }
};

person.greet();