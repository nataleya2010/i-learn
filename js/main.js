// let userData = +prompt("задайте число больше нуля");
// function sum(a){
//     let counter =0;
//     if(a<=0){return counter;}
//     else{
//         for(let i=0; i<a; i++){
//             if(i%3==0 || i%5==0){
//                 counter =counter+i;
//             }
//         }
//         return counter;
//     }
// }
// function solution(number){
//     let counter =0;
//       if(number<=0){return counter;}
//       else{
//           for(let i=0; i<number; i++){
//               if(i%3==0 || i%5==0){
//                   counter =counter+i;
//               }
//           }
//           return counter;
//       }
//   }

// document.write(`your namber summ: ${solution(50)}`);

// console.log(a);
// console.log([1,2,3,4,5].length);
// let a = true;
// let b = true;
// console.log(!(!a||!b));
// console.log(8 / 2 + 5 - -3 / 2);
// let name = 'Vasia';
// console.log(Math.abs(name.length - 15));
// name.length = 50;
// console.log(name.length);
// const a = ''; 
// const b = 9; 
// const c = null;
// let a += 10;
// console.log( '4' * '9');
// console.log(typeof(1+'o'));
// let i = 0; let c = 0; const str = 'Rolling Scopes School';
// while (i < str.length) 
// { if (str[i] === 'o')
//  { c++; }
//   i++; } 
// console.log(c);
// let a = 5; 
// console.log(++a); 
// console.log(a++);

// !удалить все гласные
// function disemvowel(str) {
  // !использовала регулярное выражение (подсмотрела!)
//     str =str.replace(/[aeiou]/gi, '');
//     return str;
//   }
//   let str = "asdfsdfsadfsadf lkjasdfasdaa asdf";
//   console.log(disemvowel(str));

// let str = 'Twinkle, twinkle, little star, How I wonder what you are.';
// console.log(str.split('').length);
// str = str.split('');
// console.log(str);
// str = str.filter(function(leter){
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   return !vowels.includes(leter);
// });

// console.log(str);
// str = str.join('');
// console.log(str);

// !проверить на совпадение строку (не должно быть повторяющихся букв)
// function isIsogram(str){
//   let i =1;
//   str = str. toLowerCase();
//   for(let letter of str){
//     if(str.indexOf(letter, i)!==-1){
//       return false;
//     }else{
//     i++;
//     }
//   }return true;
// }
// let str = "Drmna";
// ! А это короткое решение (не моё)
// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }
// console.log(`${str} --> ${isIsogram(str)}`);

// ! вернуть строку из цифр: 2 = 22, 3 = 333, 5 = 55555 и т д

// let s = '112233';

// function explode(s) {
  // return s.split("").map((e) => e.repeat(+e)).join("");
// }
// console.log((explode(s)));

// ! посчитать людей по количеству произведённых рукопожатий
// function getParticipants(handshakes){
//   if(handshakes){
//     if(handshakes==1){
//       return 2;
//     }else{
//       return (handshakes-1)*handshakes;
//     }
//   }
//   return 0;
// }
// let handshakes =3;
// console.log(getParticipants(handshakes));

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//   console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }else(console.log('ops...'));


// for(let i =5; i<=10; i++){
//   console.log(i);
// };

// stop:for(let i=20; i>=10; i--){
//   if(i===13){
//     continue stop;
//   }
//   console.log(i);

// }

// for(let i=20; i>=10; i--){
//   if(i===13){
//     break;
//   }
//   console.log(i);

// }

// for(let i=2; i<=10; i++){
//   if(i%2==0){
//     console.log(i);

//   }
// }

// let i = 2;
// while(i<16){
//   i++;
// if(i%2===0){
//   continue;
// }else{
// console.log(i);
// }

// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }

// const arrayOfNumbers = [];
// let j =0;
// for(let i =5; i<=10;i++){
//   arrayOfNumbers[j]=i;
//   j++;
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for(let i=0; i<arr.length;i++){
//   result[i]=arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i=0; i<data.length;i++){
//   if(typeof data[i]==='number'){
//     data[i]=data[i]*2;
//   }else
//   if(typeof data[i]==='string'){
//     data[i]=data[i]+' - done';
//   }
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for(let i=0; i<data.length; i++){
//   result[i]=data[data.length-(i+1)];
// }
// console.log(result);

// const lines = 5;
// let result = '*';
//     for(let i=0; i<=lines; i++){
//       let zeros = ' ';
//       for(let j=0;j<=lines-1-i;j++){
//         zeros = zeros+' ';
//       }
//   console.log(zeros+result);
//   result= '*'+result+'*';
// }

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = ' ';
// for(let i=1; i<=lines; i++){
//   for(let j =0; j<lines-i; j++){
//     result=result+' ';
//   }
//   console.log(result+'*'+'\n');
// }

// let result='*';
// for(let i=1;i<5;i++){
//   result=result+'*';
// }
// console.log(result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';
for(let i =0; i<=lines;i++){
  for(let j = 0; j<lines-i; j++){
    result +=' ';
  }
  for(let j =0; j < i*2+1; j++){
    result +='*';
  }
  result +='\n';
}
console.log(result);