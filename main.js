// 1-misol

// let a = +prompt("a son kiriting");
// if (a > 0) {
//     a = a + 1;
// }
// console.log(a);

// 2;-misol

// let a = +prompt("a son kiriting");
// if (a > 0) {
//     a = a + 1;
// } else if (a < 0) {
//     a = a - 2;;
// } else if (a === 0) {
//     a = 10
// }{
// }
// console.log(a);

// 3-misol

// let a = prompt("a son kiriting");
// let b = prompt("b son kiriting");
// let c = prompt("c son kiriting");

// let count = 0;

// if (a > 0) {
//     count++;
// }else{

// }
// if (b > 0) {
//     count++;
// } else {
    
// }
// if (c > 0) {
//     count++;
// } else {
    
// }
// console.log("Musbat sonlar soni",count);

// 4-misol

// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// if (a > b) {
//     console.log("Katta son",a);
// } else if (b > a) {
//     console.log("Katta son",b);
// } else {
//     console.log("Ikkala son teng");
// }

// 5-misol

// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// if (a < b) {
//     console.log("Kichik son tartib raqami: a");
// } else if (b < a) {
//     console.log("Kichik son tartib raqami: b");
// } else {
//     console.log("Ikkala son teng");
// }

// 6-misol

// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// if (a > b ) {
//     console.log("Katta", a);
//     console.log("Kichkina", b);
// } else if ( b > a) {
//     console.log("Katta", b);
//     console.log("Kichkina", a);
// } else {
//     console.log("Ikkala son teng", a);
// }{  
// }

// 7-misol

// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// if (a > b) {
//     let temp = a;
//     a = b;
//     b = temp;
// } else {
// }
// console.log('a =', a);
// console.log('b =', b);

// 8- misol

// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// if (a !== b) {
//     a = a + b;
//     b = a ;
// } else {
//     a = 0;
//     b = 0;
// }
// console.log("a = ", a);
// console.log("b = ", b);

// 9-misol

// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// if (a !== b) {
//     let max = (a > b) ? a : b;
//     a = max
//     b = max
// } else {
//     a = 0;
//     b = 0;
// }
// console.log("a =", a);
// console.log("b =", b);

// 10-misol
// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// let c = +prompt("c son kriting");
// let min = Math. min(a , b, c,);
// console.log("Eng kichik son", min);

// 11-misol

// let a = +prompt("a soni kriting");
// let b = +prompt("b soni kriting");
// let c = +prompt("c soni kriting");
// let orta;
// if ((a > b && a < c)|| (a > c && a < b)){
//     orta = a;
// } else if ((b > a && b < c)|| (b > c && b < a)) {
//     orta = b;
// } else {
//     orta = c;
// }
// console.log(orta);

// 12-misol

// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// let c = +prompt("c son kriting");
// if (a <= b && a <= c) {
//     console.log(b, c);
// } else if (b <= a && b <= c) {
//     console.log(a, c);
// } else {
//     console.log(a, b);       
// }

// 13-misol

// let a = +prompt("a son kriting");
// let b = +prompt("b son kriting");
// let c = +prompt("c son kriting");
// if (a < b && b < c ) {
//     a *= 2;
//     b *= 2;
//     c *= 2;
// } else {
//     a = -a;
//     b = -b;
//     c = -c;
// }
// console.log(a, b, c);

// 14-misol

let a = +prompt("a son kriting");
let b = +prompt("b son kriting");
let c = +prompt("c son kriting");












// uy ishi insta

// let data = [];

// let list = document.getElementById("list");
// let inp = document.getElementById("inp");

// function crudList(){
//     if (event)event.preventDefault();
//     list.innerHTML = data.map((item,i) => `
//         <li>
//         ${item}
//         <button onclick="edit(${i})">✍🏻</button>
//         <button onclick="del(${i})">❌</button>
//         </li>
//     `).join("")
// }

// function add(){
//     if(inp.value.trim()){
//         data.push(inp.value.trim());
//         inp.value = "";
//         crudList()
//     }
// }

// function edit(i){
//     let yangi = prompt("Tahrirlash:",data[i]);
//     if (yangi && yangi.trim())data[i] = yangi.trim();       
//     crudList();
// }

// function del(i) {
//     if (confirm("o'chirilsinmi?🤔"))data.splice(i,1);
//     crudList();
// }