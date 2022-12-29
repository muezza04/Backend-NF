// import database
const db = require("../config/database");

// membuat class Model Student
class Student{
    // Membuat method static all
    static all() {
        // return Promise sebagai solusi Asynchronous
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students";
            /**
             * Melakukan query menggunakan method query.
             * Menerima 2 params: query dan callback
             */
            db.query(sql, (err, results) => {
                // Jika berhasil, jalankan method resolve dan kirim results
                resolve(results);
            });
        });
    }

    // Membuat add data ke database
    static async create(data) {
        // membuat insert data ke database
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO students SET ?";
            db.query(sql, data, (err, results) => {
                // insertId berfungsi untuk mendapatkan id dari data yang baru dibuat
                resolve(results.insertId);
            });
        });

        // melakukan query berdasarkan Id method ini berfungsi untuk menampilkan kembali semua data
        // Refactor promise 2: get data by id
        const student = await this.find(id);
        return student;
    }

    // Membuat method find id untuk mencari id pada params
    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                // destructing array
                const [student] = results;
                resolve(student);
            });
        });
    }

    // Membuat method update data ke database
    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // mencari data yang baru diupdate
        const student = await this.find(id);
        return student;
    }

    // Membuat method delete data
    static async delete(id) {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
}

// export class Student
module.exports = Student;