let body = document.getElementsByTagName("body");

function greeting(greeting = 'Hello', name = 'Bill') {
    body[0].innerHTML =`${greeting}, ${name}!`;
}

greeting('hi');

