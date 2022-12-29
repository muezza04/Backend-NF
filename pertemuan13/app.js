// import express
const express = require("express");
// import router
const router = require("./routes/api");
// membuat object express
const app = express();
// menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());
// Menggunakan routing (router)
app.use(router);
// Mendefinisikan port
const PORT = 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));