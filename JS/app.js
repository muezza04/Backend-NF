/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 *
 * @hint - Gunakan Destructing Object
 */

 const {index, store, update, destroy } = require("./Controllers/FruitController.js");

 /**
  * NOTES:
  * - Fungsi main tidak perlu diubah
  * - Jalankan program: nodejs app.js
  */
 const main = () => {
   console.log("Method index - Menampilkan Buah");
   index();
   console.log("\nMethod store - Menambahkan buah Naga");
   store("Naga");
   console.log("\nMethod update - Update data 0 menjadi Manggis");
   update(0, "Manggis");
   console.log("\nMethod destroy - Menghapus data 0");
   destroy(0);
 };
 
 main();
