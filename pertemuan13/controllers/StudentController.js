// Import model student
const Student = require("../models/Student");

// Membuat Class StudentController
class StudentController {
    // menambahkan keyword async memberitahu proses asynchronous
    async index(req, res) {
        // Memanggil method static all dengan async await dari Model Student.
        const students = await Student.all();

        // data array lebih dari 0 or jika data tidak kosong
        if (students.length > 0) {
            const data = {
                message: "Menampilkan semua data Students",
                data: students,
            };

            return res.status(200).json(data);
        } 
        const data = {
            message: 'Students is empty',
        };

        return res.status(200).json(data);
    }

    async store(req, res) {
        /**
         *  Validasi sederhana
         *  - Handle jika salah satu data tidak dikirim
         */

        // destructing object req.body
        const { nama, nim, email, jurusan } = req.body;

        // jika data undefined maka dikirim response error
        if (!nama || !nim || !email || !jurusan) {
            const data = {
                message: "Semua data harus dikirim",
            };

            return res.status(422).json(data);
        }

        // else
        // Memanggil method static create dengan async await dari Model Student
        const student = await Student.create(req.body);

        const data = {
            message: `Menambah data Student`,
            data: student
        };

        return res.status(201).json(data);
    }

    async update(req, res) {
        const { id } = req.params;
        // mencari id student yang ingin di update
        const student = await Student.find(id);

        if (student) {
            // melakukan update data
            const student = await Student.update(id, req.body);
            const data = {
                message: `Mengedit data Student id ${id}`,
                data: student
            };
            
            res.status(200).json(data);
        } else {
            const data = {
                message: `Student not found`,
            };

            res.status(404).json(data);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        const student = await Student.find(id);

        if (student) {
            await Student.delete(id);
            const data = {
                message: "Menghapus data student",
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: `Student not found`,
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        const { id } = req.params;
        // memcari student berdasarkan id
        const student = await Student.find(id);

        if (student) {
            const data = {
                message: "Menampilkan detail student",
                data: student,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: `Student not found`,
            };

            res.status(404).json(data);
        }
    }

}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;