//! FUNCTION


//? DECLARATION - function someFn() {}

// function sum (a = 5, b = 10) {
//     console.log(a + b);
// }
// sum(50, 100)

//? EXPRESSION - let someFn = function() {}

// const sum = function(a = 10, b = 30) {
// console.log(a + b);
// }
// sum(1, 1)


//? ARROw - const someArrowFn = () => {}

// const sum = (a = 10, b = 10) => console.log(a + b);
// sum(5, 10)



//! PRACTICE-------------------------------------

// let stupidCount = 0 


// function getName () {
//     return prompt('your name pls')
// }

// function helloUser (name) {
//     if(!name ) {
//         stupidCount++

//         if(stupidCount === 5) {
//             alert('You so stupid bitch!')
//             stupidCount = 0

//             alert('write name pls')
//         const userName = getName()
//         helloUser(userName)
//             return
//         }

//         alert('write name pls')
//         const userName = getName()
//         helloUser(userName)
//         return 
//     }

//     alert(`Hello ${name}!`)

//     const userLastName = prompt('your surname pls')

//     if(!userLastName){
//         const confirmed = confirm('you want go without surname?')

//         if(!confirmed){
//             const userName = prompt('your name pls')
//             helloUser(userName)
//             return
//         } 
//         else{
//             helloUserLastName(name, userLastName || ' without surname')
//         }
//     }
//     helloUserLastName(name, userLastName)
// }
// function helloUserLastName (name, lastName) {
//     alert(`Hello ${name} ${lastName}!`)
// }

// const userName = getName()
// helloUser(userName)




//? ---------------------------------------------

// function getreversedArr  (arr = []) {
//     return arr.reverse()
// }

// const arr = [1, 2, 3, 4, 5]
// const reversedArr = getreversedArr(arr)

// console.log(reversedArr);


//? ---------------------------------------------


// function mult (a, b) {
//     return a * b
// }
// const result = mult (5, 5)

// console.log(result);


//? --------------------------------------------- 

//* Нужно сделать функцию которая будет нам фильтровать только четные числа с массива и возвращает новый массив только с ними


// const getOnlyEvenNumbers = (arr) => {
//     let newArr = []

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// const someArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const someArr2 = [45, 2, 3, 16, 5, 80, 7, 8, 10]


// const result1 = getOnlyEvenNumbers(someArr1)
// const result2 = getOnlyEvenNumbers(someArr2)


// console.log(result1);
// console.log(result2);



//? --------------------------------------------- 

// const getdublicateLetterString = function (str) {

//     let returnedString = ''
//     for (let i = 0; i < str.length; i++) {
//         returnedString += str[i] + str [i]
//     }

//     return returnedString
// }

// const str1 = 'aidar'
// const str2 = 'aidafsdgfdseafhuaehgueharughfjdghraeughr'

// const result1 = getdublicateLetterString (str1)
// const result2 = getdublicateLetterString (str2)

// console.log(result1);
// console.log(result2);


//? --------------------------------------------- 



// function xaxaOnlyThird (arr) {
//     for( let i = 0; i < arr.length; i++ ) {
//         if((i + 1) % 3 == 0) {
//             console.log('хахахаха ты лох -',arr[i]);
//         }
//     }
// }

// const namesArr = ['Aidar', 'Dima', 'Beka', 'Kanykei', 'Islam', 'Aza', 'Albina', 'Ylyk', 'Nadira']
// xaxaOnlyThird(namesArr)


//? --------------------------------------------- 

// POLYNDROM

// const getcheckPolyndrom = (str) => Boolean(str === str.split('').reverse().join('')) 
    
 

// const str1 = '123_321'
// const str2 = 'helleh'
// const str3 = 'azA'

// const result1 = getcheckPolyndrom(str1)
// const result2 = getcheckPolyndrom(str2)
// const result3 = getcheckPolyndrom(str3)

// console.log(result1);
// console.log(result2);
// console.log(result3);


//? --------------------------------------------- 

// const getCapitalname = (name) => {
//     //! variant1
//     //return name[0].toUpperCase() + name.slice(1)
//       //! variant2
//     //   return name.replace(name[0], name[0].toUpperCase())
//     //! variant3
//     let returnedName = ''
//     for(let i = 0; i < name.length; i++){
//         if(i === 0) {
//             returnedName = name[0].toUpperCase()
//         }
//         else{
//             returnedName += name[i]
//         }
        
//     }
//     return returnedName
   
// }


// const name = 'dima'
// const capitalizeName = getCapitalname(name)

// console.log(capitalizeName);

//? --------------------------------------------- 

// function getIterateFactorial (num) {
//    let numFactorial = 1

//     for (let i = num; i > 0; i-- ) {
//        numFactorial *= i
//     }
//     return numFactorial
// }

// function getRecursiveFactorial (num) {
//     if(num === 1) {
//         return num
//     }
    
//     return num * getRecursiveFactorial(num - 1)
// }


// const iteratableResult = getIterateFactorial(5)
// const RecursivedResult = getRecursiveFactorial(5)
// console.log(iteratableResult);
// console.log(RecursivedResult);