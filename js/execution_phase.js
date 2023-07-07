// 2.1 EXECUTION CONTEXT ,HOSTING & SCOPE

// console.log(nama);
// var nama = "fadlur";

//CREATION PHASE pada global context
//nama var = undifined
//nama function = func()
//hoisting
//window =global object
//this =window

//!Execution phase

// var nama = "fadhlur";
// var umur = 19;
// console.log(sayHello());
// function sayHello() {
//   return `halo,nama saya ${nama},saya ${umur} tahun. `;
// }

//seoalah function membuat locak Context
//yang di dalamnya terdapat creation dan execution phase
//window
//arguments
//hoisting local

// var nama = "fadhlur";
// var username = "@fadhlurrahman655";

// function cetakUrl(username) {
//   const instagramUrl = "http://instagram.com";
//   return instagramUrl + username;
// }
// console.log(cetakUrl(username));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }

// a();

function satu() {
  var nama = "fadhlur";
  console.log(nama);
}
function dua() {
  console.log(nama);
}
console.log(nama);
var nama = "rahman";
satu();
dua("dody");
console.log(nama);
