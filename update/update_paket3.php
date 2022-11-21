<?php
include('../koneksi.php');

?>

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Paket 3</title>
  <link rel="stylesheet" href="style.css">

</head>
<body>

    <form action="proses_update_paket3.php" method="POST">
    <div class="kotak">
    <a href="../paket3">Back</a>
        <div class="container">
            <h2>Ubah Soal Paket 3</h2>
            <div class="soal">
            <?php
            $query = "SELECT * FROM paket1 WHERE id='3'";
            $hasil = mysqli_query($koneksi, $query);

            while($row = mysqli_fetch_assoc($hasil)){          
            ?>
        <div class="kolom">
            <input type="text" class="form-control" id="floatingInput" autocomplete="off" required name="soal1" value="<?php echo $row['soal1']; ?>">
        </div>
        <div class="kolom">
            <input type="text" class="form-control" id="floatingInput" autocomplete="off" required name="soal2" value="<?php echo $row['soal2']; ?>">
        </div>
        <div class="kolom">
            <input type="text" class="form-control" id="floatingInput" autocomplete="off" required name="soal3" value="<?php echo $row['soal3']; ?>">
        </div>
        <div class="kolom">
            <input type="text" class="form-control" id="floatingInput" autocomplete="off" required name="soal4" value="<?php echo $row['soal4']; ?>">
        </div>
        <div class="kolom">
            <input type="text" class="form-control" id="floatingInput" autocomplete="off" required name="soal5" value="<?php echo $row['soal5']; ?>">
        </div>
        <div class="kolom">
            <input type="text" class="form-control" id="floatingInput" autocomplete="off" required name="soal6" value="<?php echo $row['soal6']; ?>">
        </div>
        <center>
        <input type="submit" class="update" value="UBAH">
        </center>
            <?php
            }
            ?>
            </div>
        </div>
    </div>
    </form>

<script src="d3.v3.min.js"></script>
<!-- partial -->
  <script  src="script.js"></script>

</body>
</html>
