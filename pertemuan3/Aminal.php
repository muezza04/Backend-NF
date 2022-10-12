<?php

    class Animal {
        public $hewan;

        #method constructor - mengisi data awal
        public function __construct($data){
            $this->hewan = array($data);
        }

        #method index - menampilkan data animals
        public function index(){
            foreach($this->hewan as $hwn){
                echo $hwn. '<br>';
            } 
        }

        #method store - menambahkan data animals
        public function store($data){
            array_push($this->hewan, $data);
        }

        #method update - memperbarui data
        public function update($index, $data){
            $this->hewan[$index] = $data;
        }

        #method destroy - menghapus hewan
        public function destroy($index){
            unset($this->hewan[$index]);
        }
    }

    $anim = new Animal("Bebek");
    
    echo 'Index - Menampilkan seluruh hewan <br>';
    $anim->index();
    echo '<br>';

    echo 'Store - Menambahkan hewab baru (burung) <br>';
    $anim->store('Burung');
    $anim->index();
    echo '<br>';

    echo 'Update - Mengupdate hewan <br>';
    $anim->update(0,'Ayam');
    $anim->index();
    echo '<br>';

    echo 'Destroy - Menghapus hewan <br>';
    $anim->destroy(1);
    $anim->index();
    echo '<br>';
?>