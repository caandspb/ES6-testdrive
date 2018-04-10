function sum(...values) {
    console.log(values.reduce(function (prevValue, nextValue) {
        return prevValue + nextValue;
    }));
}

sum(1,3,7,100);
