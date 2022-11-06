<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    #buat property animals (array)
    public $animals = ['kucing', 'ayam', 'ikan'];

    #tampilkan data animals
    public function index(){
        echo "Menampilkan data hewan";
        echo "<br>";
        foreach($this->animals as $hwn){
            echo $hwn. '<br>';
        }
    }

    #menambahkan animals baru
    public function store(Request $request){
        array_push($this->animals, $request->nama);

        echo "Menambahkan hewan baru";
        echo "<br>";
        $this->index();
    }

    #mengupdate data animals
    public function update(Request $request, $id){
        $this->animals[$id] = $request->nama;

        echo "Mengupdate data hewan id $id";
        echo "<br>";
        $this->index();
    }

    #menghapus data animals
    public function distroy($id){
        unset($this->animals[$id]);

        echo "Menghapus data hewan id $id";
        echo "<br>";
        $this->index();
    }
}