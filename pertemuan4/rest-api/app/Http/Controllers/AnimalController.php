<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    #buat property animals (array)
    public $animals = ['kucing', 'ayam', 'ikan'];

    #tampilkan data animals
    public function index(){
        foreach($this->animals as $hwn){
            echo $hwn. '<br>';
        }
    }

    #menambahkan animals baru
    public function store(Request $request){
        array_push($this->animals, $request->nama);
    }

    #mengupdate data animals
    public function update(Request $request, $id){
        $this->hewan[$id] = $request->nama;
    }

    #menghapus data animals
    public function distroy($id){
        unset($this->hewan[$id]);
    }
}
