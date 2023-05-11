// import PatientController
const PatientController = require("../controllers/PatientController")
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
// Membuat router untuk method get all resource (menampilkan semua data)
router.get("/patients",PatientController.index);
// Membuat router untuk method get show resource (nempilkan detail data yang di tentukan)
router.get("/patients/:id",PatientController.show);
// Membuat router untuk method post store resource or add resource (menambahkan data ke dalam database)
router.post("/patients",PatientController.store);
// Membuat router untuk method put update resource (mengupdate data yang ditentukan)
router.put("/patients/:id",PatientController.update);
// Membuat router untuk method delete delete resource (menghapus data yang ditentukan)
router.delete("/patients/:id",PatientController.destroy);
// Membuat router untuk method get search resource (mencari data yang ditentukan)
router.get("/patients/search/:name",PatientController.search);
// Membuat router untuk method get status positive (menampikan data ber status positive)
router.get("/patients/status/positive",PatientController.positive);
// Membuat router untuk method get status recovered (menampikan data ber status recovered)
router.get("/patients/status/recovered",PatientController.recovered);
// Membuat router untuk method get status positive (menampikan data ber status dead)
router.get("/patients/status/dead",PatientController.dead);

// export router
module.exports = router;
