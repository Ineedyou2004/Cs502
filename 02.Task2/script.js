let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]
// Task 16: "name"-i "t" herfi ile başlayan obyektləri yeni arraya yığıŋ
function task16() {
    const startsWithT = arr2.filter(obj => obj.name.startsWith('t'));
    return startsWithT;
}

// Task 17: "name"-i "t" herfi ile başlayıb "t" herfi ile bitən obyektlərin sayını tapın
function task17() {
    const startsAndEndsWithT = arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t'));
    return startsAndEndsWithT.length;
}

// Task 18: "name"-i "t" herfi ile başlayıb "t" herfi ile bitən obyektlərin "key"-lərinin cəmini tapın
function task18() {
    const startsAndEndsWithT = arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t'));
    const sumOfKeys = startsAndEndsWithT.reduce((acc, obj) => acc + obj.key, 0);
    return sumOfKeys;
}

// Task 19: "name"-i "e" herfi ile bitən obyektlərdəki name-in dəyərini "SuperDev" sözü ilə əvəzləyin
function task19() {
    const endsWithE = arr2.map(obj => {
        if (obj.name.endsWith('e')) {
            obj.name = 'SuperDev';
        }
        return obj;
    });
    return endsWithE;
}

// Task 20: "name"-i ən uzun olan obyektin key-ini tapın
function task20() {
    const longestNameObj = arr2.reduce((prev, curr) => (prev.name.length > curr.name.length) ? prev : curr);
    return longestNameObj.key;
}

// Task 21: "name"-i ən uzun olan obyektin indexin kvadratını hesablayın
function task21() {
    const longestNameIndex = arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(obj => obj.name.length)));
    return Math.pow(longestNameIndex, 2);
}

// Task 22: "name"-inin uzunluğu 4 olan obyektlərdən ibarət yeni array yaradın
function task22() {
    const namesWithLength4 = arr2.filter(obj => obj.name.length === 4);
    return namesWithLength4;
}

// Task 23: En böyük "key"-i olan obyektin "name"-ini tapın
function task23() {
    const maxKeyObject = arr2.reduce((prev, curr) => (prev.key > curr.key) ? prev : curr);
    return maxKeyObject.name;
}

// Task 24: Terkibində 2 'L' herfi olan obyekt(ler)in index(ler)ini tapın
function task24() {
    const doubleLIndex = arr2.reduce((acc, obj, index) => {
        if (obj.name.includes('ll')) {
            acc.push(index);
        }
        return acc;
    }, []);
    return doubleLIndex;
}

// Task 25: Terkibində 2 't' herfi olan obyekt(ler)in key(ler)ini tapın
function task25() {
    const doubleTKeys = arr2.filter(obj => (obj.name.match(/t/g) || []).length === 2).map(obj => obj.key);
    return doubleTKeys;
}

console.log(task16());
console.log(task17());
console.log(task18());
console.log(task19());
console.log(task20());
console.log(task21());
console.log(task22());
console.log(task23());
console.log(task24());
console.log(task25());