// import models student
const Student = require("../models/Student");


// make student controller
class StudentController{
    // index(req, res){
    //     // memanggil method static 
    //     Student.all(function(student) {;
    //     const data = { 
    //         message : 'Menampilkan semua student',
    //         data : []
    //     }
    //         res.json(data);
    //     })
    // }

    // menambahkan keyword async untuk memberitahu proses asynchronous
    async index(req, res){
        // memanggil method dengan async await
        const students = await students.all();
        const data = { 
            message : 'Menampilkan semua student',
            data : []
        }
            res.json(data);
    }
    store(req, res){
        const {nama} = req.body;
        const data = {
            message : `Menambahkan data students bernama ${nama}`,
            data : []
        }
        res.json(data);
    }
    update(req, res){
        const {id} = req.params;
        const {nama} = req.body;
        const data = {
            message : `Mengedit data students dengan ${id} dan bernama ${nama}`,
            data : []
        }
        res.json(data);
    }
    destroy(req, res){
        const {id} = req.params;
        const data = {
            message : `Menghapus data students dengan ${id}`,
            data : []
        }
        res.json(data);
    }
};

const object = new StudentController();
module.exports = object;
