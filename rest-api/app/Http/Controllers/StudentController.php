<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Break_;

class StudentController extends Controller
{
    //method index - get all resources
    public function index()
    {
        // menggunakan model Student untuk select data
        $students = Student::all();

        // menggunakan collection method
        if ($students->isNotEmpty()) {
            $user = [
                'message' => 'Get All Student',
                'data' => $students
            ];
    
            //menggunakan response json laravel otomatis set header content type ke json
            //otomatis mengubah data array ke JSON mengatur status code
    
            return response()->json($user, 200);
            
        } else {
            $data = [
                'message' => 'Student not found',
            ];

            // mengembalikan data (json) dan kode 404
            return response()->json($data, 404);
        }
    }

    public function store(Request $request){
        if ($request->nama AND $request->nim AND $request->email AND $request->jurusan) {
            // menangkap data request
            $input = [
                'nama' => $request->nama,
                'nim' => $request->nim,
                'email' => $request->email,
                'jurusan' => $request->jurusan
            ];

            // membuat atau memasukkan data kedalam database
            $students = Student::create($input);

            $data = [
                'message' => 'Student is created succesfuly',
                'data' => $students
            ];

            return response()->json($data, 201);
        } else {
            $data = [
                'message' => 'Student add failed',
            ];

            // mengembalikan data (json) dan kode 404
            return response()->json($data, 404);
        }
    }

    // update data students
    public function update(Request $request, $id){
        $students = Student::find($id);
        
        if($students) {

            // menangkap data request
            $input = [
                'nama' => $request->nama ?? $students->nama,
                'nim' => $request->nim ?? $students->nim,
                'email' => $request->email ?? $students->email,
                'jurusan' => $request->jurusan ?? $students->jurusan
            ];

            // melakukan update data
            $students->update($input);

            $data = [
                'message' => 'Student is update succesfuly',
                'data' => $students
            ];

            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);

        } else {
            $data = [
                'message' => 'Student not found',
            ];

            // mengembalikan data (json) dan kode 404
            return response()->json($data, 404);
        }

        
    }
    // function delete data
    public function distroy($id)
    {
        $students = Student::find($id);

        if ($students) {
            $students->delete();

            $data = [
                'message' => 'Student is deleted succesfuly'
            ];

            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];

            // mengembalikan data (json) dan kode 404
            return response()->json($data, 404);
        }
    }

    public function show($id)
    {
        // cari id student yang ingin didapatkan
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student',
                'data' => $student,
            ];

            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];

            // mengembalikan data (json) dan kode 404
            return response()->json($data, 404);
        }
    }
}
