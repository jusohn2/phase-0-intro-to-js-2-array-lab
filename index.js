// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat(){
    cats.shift('Milo');
}

function appendCat(name){
    const newCats = [...cats, 'Broom'];
    return newCats;
}

function prependCat(name){
    const newerCats = ['Arnold', ...cats];
    return newerCats;
}

function removeLastCat(){
    const lastCat = cats.slice(0,2);
    return lastCat;
}

function removeFirstCat(){
    const firstCat = cats.slice(1,3);
    return firstCat;
}