console.log(1*5);
const a = true;
console.log(a);
const ar = [];
ar[0] = prompt('сколько вам лет?');
ar[1] = confirm('вы любите кино?');
ar[2] = confirm('это ваше первое знакомство?');
document.write(ar);
if(ar[0]<=18){
    document.write('  Пошёл вон, дурак малолетний!');
}else
document.write(' Привет, мы рады тебя видеть!');