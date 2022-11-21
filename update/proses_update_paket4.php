<?php
include('koneksi.php');

$soal1 = $_POST['soal1'];
$soal2 = $_POST['soal2'];
$soal3 = $_POST['soal3'];
$soal4 = $_POST['soal4'];
$soal5 = $_POST['soal5'];
$soal6 = $_POST['soal6'];

$query = "UPDATE paket1 set soal1='$soal1', soal2='$soal2', soal3='$soal3', soal4='$soal4', soal5='$soal5', soal6='$soal6' where id='4'";

include ('../koneksi.php');
$hasil = mysqli_query($koneksi, $query);

if(!$hasil) {
    die("Gagal Mengubah data Soal " . mysqli_query($koneksi));
}

else{
    echo "<script>
        alert('Soal Berhasil di Ubah')
        document.location.href='update_paket4.php';
        </script>
        ";
}