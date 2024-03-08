////////////// TASK 1 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1.Multiply 12 with 8, and console the result:
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
const result = multiplyNumbers(12, 8);
console.log("The result is:", result);


// 2.Divide 10 by 2 add result to variables x, and console x:
function divideAndAddToX(num1, num2) {
    let x = num1 / num2; // Divide num1 by num2 and store the result in x
    return x; // Return the result
}
let x = divideAndAddToX(10, 2);
console.log("The value of x is:", x);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
let num1 = 20;
let num2 = 17;
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log("The sum of num1 and num2 is:", sum);
}
addNumbers(num1, num2);


// 4. Function to create info string
const createInfo = function(_name, surname, year) {
    return _name + ' ' + surname + ', born in ' + year;
};

// Assign values to variables
const _name = 'John';
const surname = 'Doe';
const year = 1990;

// Create info using the function
const info = createInfo(_name, surname, year);
console.log("Info:", info);

// 5. Function to calculate remainder
const calculateRemainder = function(dividend, divisor) {
    return dividend % divisor;
};

// Calculate remainder when 17 is divided by 12
const remainder = calculateRemainder(17, 12);
console.log("Remainder of 17 divided by 12:", remainder);

// 6. Function to handle city name assignment
let cityName = 'Baku';
const setCityName = function(newCity) {
    cityName = newCity;
    return cityName;
};

// Set city name to Gence using the function
setCityName('Gence');
console.log("Updated city name:", cityName);


////////////// TASK 2 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(c); //c ++a oldugu once a-ni 1 vahid artirir 2 olaraq capa verir
console.log(d);//d b++ oldugu ucun ise bni 1 vahid olaraq capa verir sonra artirir ancaq d 1 capa verir
console.log(b);//Belede ise b artdigi ucun 2 capa verir


////////////// TASK 3 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let y = 2;
let k = 1 + (y *= 2);
console.log(k); //burada y*=2 y=y*2 demekdir.Bele olduqda 2*2=4 edir ve +1 cavab 5 olacaq


////////////// TASK 4 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('test1', test); //test1-e deyer verilmediyi ucun undefined qaytaracaq
{
    let test = "something"
    console.log('test2', test); //test2 de ise test-e ise deyer verildiyi ucun undefined qaytaracaq ancaq transkipte cunki deyer umumi deyl ancaq 1 hisseye verlib
}
console.log('test3', test);  //Bele olduqda ise test3 de undefined qaytarir-Bu letdedir
console.log('test1', test);  //test1-e deyer verilmediyi ucun undefined qaytaracaq
{
    var test = "something" 
    console.log('test2', test); //test2 de ise test-e ise deyer verildiyi ucun undefined qaytaracaq ancaq transkipte cunki deyer umumi deyl ancaq 1 hisseye verlib
}
console.log('test3', test); //test3 de ise var oldugu uvun transkriptin onemi yoxdur ve deyer qaytaracaq


////////////// TASK 5 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let Name = "Ulfat"
let Surname = "Zakirli"
let Year = 2000
let city;
let qualification = null
let obj = { name: 'ulfat' }
let Arr = ['a', 'b', 'c']
console.log(typeof(Name));
console.log(typeof(Surname));
console.log(typeof(Year));
console.log(typeof(city));
console.log(typeof(qualification));
console.log(typeof(obj));
console.log(typeof(Arr));
////////////// TASK 6 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

// 1. Sum all the numbers in 'arr1'
const sum = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers in arr1:", sum);

// 2. Add two numbers (10,88) to the end of arr1 (push methods)
arr1.push(10, 88);
console.log("After adding 10 and 88 to the end of arr1:", arr1);

// 3. Remove the first two numbers from arr1
arr1.splice(0, 2);
console.log("After removing the first two numbers from arr1:", arr1);

// 4. Add three numbers (0,9,11) in front of arr1 (unshift)
arr1.unshift(0, 9, 11);
console.log("After adding 0, 9, and 11 to the front of arr1:", arr1);

// 5. Remove four numbers from the front of arr1 (shift)
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();
console.log("After removing four numbers from the front of arr1:", arr1);
////////////// TASK 7 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"];

// 1. Console values from "Rufet" to "Fuad"
console.log("Values from 'Rufet' to 'Fuad':", arr2.slice(2, -1));

// 2. Change Gulshen to Rovshen
const index = arr2.indexOf("Gulshen");
if (index !== -1) {
    arr2[index] = "Rovshen";
}
console.log("After changing 'Gulshen' to 'Rovshen':", arr2);

// 3. Console each name with map
console.log("Names in arr2:");
arr2.map(name => console.log(name));

// 4. Console only names which are "Anar"
console.log("Names which are 'Anar':", arr2.filter(name => name === "Anar"));

// 5. Console all names where name is "Anar", change it to "Perviz"
arr2.forEach((name, index) => {
    if (name === "Anar") {
        arr2[index] = "Perviz";
    }
});
console.log("After changing all 'Anar' to 'Perviz':", arr2);

// 6. Console second to last value of arr2
console.log("Second to last value of arr2:", arr2[arr2.length - 2]);

// 7. Console length of arr2
console.log("Length of arr2:", arr2.length);
////////////// TASK 8 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false];

// 1. Show only numbers
const numbers = arr3.filter(item => typeof item === 'number');
console.log("Numbers:", numbers);

// 2. Show only true values
const trueValues = arr3.filter(item => typeof item === 'boolean' && item === true);
console.log("True values:", trueValues);

// 3. Show only false values
const falseValues = arr3.filter(item => typeof item === 'boolean' && item === false);
console.log("False values:", falseValues);

// 4. Show only strings
const strings = arr3.filter(item => typeof item === 'string');
console.log("Strings:", strings);


////////////// TASK 8 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25];

// 1. Console only even numbers
const evenNumbers = Numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 2. Console only odd numbers
const oddNumbers = Numbers.filter(number => number % 2 !== 0);
console.log("Odd numbers:", oddNumbers);


////////////// TASK 9 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// 1. Console all values of arr4
// if value is number add 10, if value is string add "is string" to it, if value is falsy add "is falsy value" to it
const processedArr4 = arr4.map(item => {
    if (typeof item === 'number') {
        return item + 10;
    } else if (typeof item === 'string') {
        return item + " is string";
    } else {
        return " is falsy value";
    }
});
console.log("Processed arr4:", processedArr4);

// 2. Sum all numbers of arr4
const sumNumbers = arr4.reduce((accumulator, currentValue) => {
    return typeof currentValue === 'number' ? accumulator + currentValue : accumulator;
}, 0);
console.log("Sum of all numbers in arr4:", sumNumbers);

// 3. Count only the values that are true
const countTrueValues = arr4.filter(item => item === true).length;
console.log("Number of true values in arr4:", countTrueValues);

// 4. Count only the values that are string
const countStringValues = arr4.filter(item => typeof item === 'string').length;
console.log("Number of string values in arr4:", countStringValues);

// 5. Count only the values that are false
const countFalseValues = arr4.filter(item => item === false).length;
console.log("Number of false values in arr4:", countFalseValues);


////////////// TASK 10 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Create an object with name, surname, age, and city
let person = {
    name: "YourName",
    surname: "YourSurname",
    age: 25,
    city: "YourCity"
};

// 2. Change the name to "Jhon"
person.name = "Jhon";

// Output the updated object
console.log(person);
// 3. Accessing gender property (not defined initially)
console.log("Gender:", person.gender); // This will log 'undefined'

// 4. Accessing city property (defined initially)
console.log("City:", person.city); // This will log the city value ('YourCity')


////////////// TASK 11 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let fullName = 'Ulfat Zakirli Rovshen';

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
let fullNameArray = fullName.split(' ');

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
let firstName = fullNameArray[0];
let lastName = fullNameArray[1];
let reversedFullNameArray = [lastName, firstName];

// 3) Alinan yeni arrayi stringe cevirin(join)
let reversedFullName = reversedFullNameArray.join(' ');

console.log(reversedFullName);
let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// 4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
const countOfFive = arr.filter(num => num === 5).length;
console.log("5 reqemi", countOfFive, "defe tekrarlanıb.");

// 5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
const sumOfNumbers = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Arraydaki bütün rəqəmlərin cəmi:", sumOfNumbers);

// 6) arrayda tekrar olunan reqemleri artan sira ile duzun
const uniqueSortedArray = [...new Set(arr)].sort((a, b) => a - b);
console.log("Arraydakı təkrarlanan rəqəmlər artan sırala:", uniqueSortedArray);

// 7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin (Math.max)
const maxNumber = Math.max(...arr);
const countOfMaxNumber = arr.filter(num => num === maxNumber).length;
console.log("Arraydakı ən böyük rəqəm:", maxNumber, ", və", countOfMaxNumber, "defə tekrarlanıb.");

// 8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin (Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes))
const name = "Ulfat";
const letterCountInName = name.length;
const isLetterCountInArray = arr.includes(letterCountInName);
console.log("Adınızdakı hərflərin sayı:", letterCountInName, ", və arrayda", isLetterCountInArray ? "var" : "yoxdur");

// 9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
const remainderTwoIndex = arr.findIndex(num => num % 3 === 2 && num % 3 !== 0);
console.log("Arraydaki ilk 3-ə bölündüyündə qalıqda 2 olan rəqəm və indeksi:", arr[remainderTwoIndex], "-", remainderTwoIndex);

// 10) arraydaki en boyuk reqemin ilk indexini tapin
const indexOfMaxNumber = arr.indexOf(maxNumber);
console.log("Arraydakı ən böyük rəqəmin ilk indexi:", indexOfMaxNumber);

// 11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
const indexOfFours = arr.reduce((indices, num, index) => {
    if (num === 4) {
        indices.push(index);
    }
    return indices;
}, []);
console.log("4 rəqəmi arraydəki indexləri:", indexOfFours);

// 12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
const minIndexOfFive = arr.indexOf(5);
const maxIndexOfFive = arr.lastIndexOf(5);
console.log("Arraydakı 5 rəqəminin ən kiçik indexi:", minIndexOfFive, ", və ən böyük indexi:", maxIndexOfFive);

// 13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
const newArr = arr.filter(num => num > 2);
const difference = arr.length - newArr.length;
console.log("2-dən böyük rəqəmlərdən yeni yaradılan arraydakı uzunluq fərqi:", difference);

// 14) 7 reqeminin indexleri cemini tapin.
const sumOfSevenIndices = arr.reduce((sum, num, index) => {
    if (num === 7) {
        sum += index;
    }
    return sum;
}, 0);
console.log("7 rəqəminin indexləri cəmi:", sumOfSevenIndices);