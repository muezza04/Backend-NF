// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(req) {
    return new Promise((resolve, reject) => {
        const data = [...Object.values(req), new Date(), new Date()];
        const query = "INSERT INTO students (nama, nim, email, jurusan, created_at, updated_at) VALUES (?)";
        db.query(query, [data], (err, results) => {
            if (err) throw err;
            const query = `SELECT * FROM students WHERE id = ${results.insertId}`;
            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    });
}
}

// export class Student
module.exports = Student;
