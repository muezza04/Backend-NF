<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //method index - get all resources
    public function index()
    {
        // menggunakan model Student untuk select data
        $students = Student::all();

        $user = [
            'message' => 'Get All Student',
            'data' => $students
        ];

        //menggunakan response json laravel
        //otomatis set header content type ke json
        //otomatis mengubah data array ke JSON
        //mengatur status code

        return response()->json($user, 200);
    }

    public function store(Request $request){
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
    }

    // update data students
    public function update(Request $request, $id){
        $students = Student::findOrFail($id);
        
        if(isset($request->nama) AND isset($request->nim) AND isset($request->email) AND isset($request->jurusan)){
            $students->update([
                'nama' => $request->nama,
                'nim' => $request->nim,
                'email' => $request->email,
                'jurusan' => $request->jurusan
            ]);
        }else{
            die("Variabel belum di isi semuanya");
        }

        $students->save();

        $data = [
            'message' => 'Student is update succesfuly',
            'data' => $students
        ];

        return response()->json($data, 200);
    }

    public function distroy($id)
    {
        $students = Student::find($id);

        $students->delete();

        return response()->json($students, 200);
    }
}
