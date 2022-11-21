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

    <div class="kotak">
    <a href="../update/update_paket3.php">Ubah Soal</a>
    <a href="../index.html">Back</a>
        <div class="container">
            <h2>Soal Paket 3</h2>
            <div class="soal">
            <table>
            <?php
            $query = "SELECT * FROM paket1 WHERE id='3'";
            $hasil = mysqli_query($koneksi, $query);

            while($row = mysqli_fetch_assoc($hasil)){          
            ?>
            <tr>
                <td>1. <?php echo $row ['soal1']?></td>
            </tr>
            <tr>
                <td>2. <?php echo $row ['soal2']?></td>
            </tr>
            <tr>
                <td>3. <?php echo $row ['soal3']?></td>
            </tr>
            <tr>
                <td>4. <?php echo $row ['soal4']?></td>
            </tr>
            <tr>
                <td>5. <?php echo $row ['soal5']?></td>
            </tr>
            <tr>
                <td>6. <?php echo $row ['soal6']?></td>
            </tr>
            <?php
            }
            ?>
            </div>
            </table>
        </div>
    </div>


<script src="d3.v3.min.js"></script>
<!-- partial -->
  <script  src="script.js"></script>

</body>
</html>
