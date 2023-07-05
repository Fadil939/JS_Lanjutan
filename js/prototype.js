// //function
// function Manusia(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }
// Manusia.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama} , Selamat Makan`;
// };
// Manusia.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama} ,Selamat Tidur`;
// };
// Manusia.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama} ,Selamat Main`;
// };
// let fadhlur = new Manusia("fadhlur", 15);
// let dika = new Manusia("dika", 10);

//!mengunakan class dengan javaScript

class Manusia {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} , Selamat Makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama} , Selamat Main`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama} , Selamat Tidur`;
  }
}
let fadhlur = new Manusia("fadhlur", 10);
let cilo = new Manusia("cilo", 5);
