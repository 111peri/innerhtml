const animalsList = document.getElementById('animals')

console.log(animalsList.outerHTML);

animalsList.outerHTML = `
<p>this is paragraph</p>
`


// 1) Напишите функцию, которая заполняет новый массив предоставленным значением и затем ее возвращает.
//    Функция должна первым параметром принимать элемент (значение для массива), вторым параметром размер массива.
//    Например: myFunc('a', 3)   // ['a', 'a', 'a']


function myFunc(element, size) {
    const newArray = Array.from({ length: size }, () => element);
    return newArray;
}

const result = myFunc('a', 3);
console.log(result); // ['a', 'a', 'a']




//   2) Напишите функцию, которая разворачивает массив в обратном порядке и затем ее возвращает.
//    Функция наша принимает массив любых элементов. 
//    Например: 
//    const data = [1, 2, 3]; 
//    myFunc(data); // [3, 2, 1]

function reverseArray(arr) {
    return arr.reverse();
}

const data = [1, 2, 3];
const reversedData = reverseArray(data);
console.log(reversedData); // [3, 2, 1]




//   3) Напишите функцию которая меняет текстовое содержимое элемента.
//    Функция принимает два параметра, идентификатор элемента и текстовку.
//    myFunc('desc', 'Hello world'); //находит элемент с идентификатором desc и
//                                     заменяет текстовку на Hello world 

function changeText(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    } else {
        console.error(`Элемент с идентификатором ${elementId} не найден.`);
    }
}


changeText('desc', 'Hello world');