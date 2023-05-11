// import database
const db = require("../config/database")
// membuat class Patient
class Patient {
  // Membuat method static all(untuk memanggil semua data didalam table database)
  static all() {
    // return promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients`;
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        //jika berhasil jalankan mehtod results dan jika gagal jalankan method reject
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Membuat method static create data dan menambahkan keyword async (untuk menambahkan data ke dalam database)
  static async create(data) {
    // return promise sebagai solusi Asynchronous
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          // insertId berfungsi untuk mendapatkan id dari data yang baru dibuat
          resolve(results.insertId);
        }
      });
    });

    // melakukan query berdasarkan Id method ini berfungsi untuk menampilkan kembali semua data
    // Refactor promise 2: get data by id
    const patient = await this.find(id);
    return patient;
  }

  // Membuat method static update data dan menambahkan keyword async (untuk mengupdate data ke dalam database)
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = `UPDATE patients SET ? WHERE id = ?`;
      db.query(sql, [data, id], (err, results) => {
        if(err) {
          reject(err);
        }
        resolve(results);
      });
    });

    // melakukan query berdasarkan Id method ini berfungsi untuk menampilkan kembali semua data
    // Refactor promise 2: get data by id
    const patient = await this.find(id);
    return patient;
  }

  // Membuat method static delete data dan menambahkan keyword async (untuk menghapus data pada database)
  static async delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM patients WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        if(err) {
          reject(err);
        }
        resolve(results);
      });
    });
  }

  // Membuat method static find id data (untuk mencari id pada params / id pada sebuah data)
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        const [patient] = results;
        resolve(patient)
      });
    });
  }

  // Membuat method static search name data (untuk mencari name pada params untuk menampilakn sebuah data)
  static search(name) {
    return new Promise((resolve, reject) => {
      // Menggunakan LIKE untuk method search dan di apit dengan simbol % menandakan data bisa di cari 
      // Bagian depan, tengah ataupun belakang
      const sql = `SELECT * FROM patients WHERE name LIKE '%${name}%'`;
      db.query(sql, (err, results) => {
        if(err){
          reject(err);
        }
        resolve(results);
      });
    });
  }

  // Membuat method static findByStatus (untuk mencari status dari patients covid)
  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE status = ?`;
      db.query(sql, status, (err, results) => {
        if(err){
          reject(err);
        }
        resolve(results)
      });
    });
  }
}

// export class Patient
module.exports = Patient;
