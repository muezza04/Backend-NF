// import Model Patient
const Patient = require("../models/Patient");
// buat class PatientController
class PatientController {
    // Membuat method index dengan menambahkan keyword async(memberitahu proses asynchronous)
    async index(req, res) {
      // Memamnggil method static all(models Patient) dengan async await
      const patients = await Patient.all();

      // Jika data array laebih dari 0 or jika data tidak empty, patients.length berfungsi untuk total banyak data
      if (patients.length > 0) {
        const data = {
          message: `Get All Resource`,
          data: patients
        };

       // Kode status berhasil dan respon ke json
        return res.status(200).json(data);
      }

      const data = {
        message: `Data is empty`,
      };

       // Kode status data kosong dan respon ke json
      return res.status(200).json(data);
    }

    // Membuat method store dengan menambahkan keyword asynch(memberitahu proses asynchronous)
    async store(req, res) {
    /**
       *  Validasi sederhana
       *  - Handle jika salah satu data tidak dikirim
       */

      // destructing object req.body
      const { name, phone, address, status, in_date_at, out_date_at } = req.body;

      // jika data undefined maka dikirim response error
      if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
          const data = {
              message: `All fields must be filled correctly`,
          };

          // Kode status failed dan respon ke json
          return res.status(422).json(data);
      }

      // else
      // Memanggil method static create dengan async await dari Model Student
      const patient = await Patient.create(req.body);

      const data = {
          message: `Resource is added successfully`,
          data: patient
      };

      // Kode status berhasil dan respon ke json
      return res.status(201).json(data);
    }

    // Membuat method update dengan menambahkan keyword asynch(membaritahu proses asynchronous)
    async update(req, res) {
      const { id } = req.params;
      // Mencari id patients yang ingin di update menggunakan async await
      const patient = await Patient.find(id);

      if (patient) {
        // Melakukan update data jika bernilai true
        const patient = await Patient.update(id, req.body);
        const data = {
          message: `Resource is update successfully`,
          data: patient,
        };

        // Kode status berhasil dan respon ke json
        res.status(200).json(data);
      } else {
        // Jika bernilai false
        const data = {
          message: `Resource not found`,
        };

        // Kode status failed dan respon ke json
        res.status(404).json(data);
      }
    }

    // Membuat method destroy dengan menambahkan keyword asynch(memberitahu proses asynchronous)
    async destroy(req, res) {
      const { id } = req.params;
      // Mencari id patients yang ingin di dihapus menggunakan async await
      const patient = await Patient.find(id);

      // Jika bernilai True maka lakukan proses penghapusan
      if (patient) {
        // Async await method delete(models)
        await Patient.delete(id);
        const data = {
          message: `Resource is delete successfully`,
        };

        // Kode status berhasil dan respon ke json
        res.status(200).json(data);
      } else {
        // Jika bernilai false
        const data = {
          message: `Resource not found`,
        };

        // Kode status failded dan respon ke json
        res.status(404).json(data);
      }
    }

    // Membuat method show dengan menambahkan  keyword asycnh(memberitahu proses asynchronous)
    async show(req, res) {
      const { id } = req.params;
      // Mencari id patients yang ingin di details data menggunakan async await
      const patient = await Patient.find(id);

      // Jika bernilai True
      if (patient) {
        const data = {
          message: `Get Detail Resource`,
          data: patient,
        };

        // Kode status berhasil dan respon ke json
        res.status(200).json(data);
      } else {
        // Jika bernilai false
        const data = {
          message: `Resource not found`,
        };

        // Kode status failded dan respon ke json
        res.status(404).json(data);
      }
    }

    async search(req, res) {
      const { name } = req.params;
      // Mencari data pada database berdasarkan nama yang dikirimkan pada parameter menggunakan async await
      const patient = await Patient.search(name);

      //jika bernilai True
      if (patient) {
        const data = {
          message: `Get searched resource`,
          data: patient,
        };

        // Kode status berhasil dan respon ke json
        res.status(200).json(data);
      } else {
        // Jika bernilai false
        const data = {
          message: `Resource not found`,
        };

        // Kode status failded dan respon ke json
        res.status(404).json(data);
      }
    }

    async positive(req, res) {
      const  status = 'Positif';
      // Mencari data pada database berdasarkan status yang dikirimkan pada parameter menggunakan async await
      const patients = await Patient.findByStatus(status);

      // Jika data array laebih dari 0 or jika data tidak empty, patients.length berfungsi untuk total banyak data
      if (patients.length > 0) {
        const data = {
          message: `Get Positive Resource`,
          total: patients.length,
          data: patients
        };

        // Kode status berhasil dan respon ke json
        return res.status(200).json(data);
      }

      const data = {
        message: `Data is empty`,
      };

      // Kode status data kosong dan respon ke json
      return res.status(200).json(data);
    }

    async recovered(req, res) {
      const  status = 'Sembuh';
      // Mencari data pada database berdasarkan status yang dikirimkan pada parameter menggunakan async await
      const patients = await Patient.findByStatus(status);

      // Jika data array laebih dari 0 or jika data tidak empty patients.length berfungsi untuk total banyak data
      if (patients.length > 0) {
        const data = {
          message: `Get Recovered Resource`,
          total: patients.length,
          data: patients
        };

        // Kode status berhasil dan respon ke json
        return res.status(200).json(data);
      }

      const data = {
        message: `Data is empty`,
      };

      // Kode status data kosong dan respon ke json
      return res.status(200).json(data);
    }

    async dead(req, res) {
      const  status = 'Dead';
      // Mencari data pada database berdasarkan status yang dikirimkan pada parameter menggunakan async await
      const patients = await Patient.findByStatus(status);

      // Jika data array laebih dari 0 or jika data tidak empty, patients.length berfungsi untuk total banyak data
      if (patients.length > 0) {
        const data = {
          message: `Get Dead Resource`,
          total: patients.length,
          data: patients
        };
        
        // Kode status berhasil dan respon ke json
        return res.status(200).json(data);
      }

      const data = {
        message: `Data is empty`,
      };

      // Kode status data kosong dan respon ke json
      return res.status(200).json(data);
    }
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
