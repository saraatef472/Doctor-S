<?php

// Username is root
$user = 'root';
$password = '';

// Database name is gfg
$database = 'userdb';

// Server is localhost with
// port number 3308
$servername='localhost';
$mysqli = new mysqli($servername, $user,
                $password, $database);

// Checking for connections
if ($mysqli->connect_error) {
    die('Connect Error (' .
    $mysqli->connect_errno . ') '.
    $mysqli->connect_error);
}


$sql = "SELECT * FROM usert ";
$result = $mysqli->query($sql);
$mysqli->close();
?>
<!DOCTYPE html>
<html>

    <head>
    <link rel="stylesheet" href="../Admin/sitephp.css">
    </head>
    <body>
    <section>
        <h1>Orders emergency </h1>
        <!-- TABLE CONSTRUCTION-->
        <table>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>ID number</th>
                <th class="ds">Describtion</th>
                <th>Address</th>
                <th>Periority</th>
                <th>Fake requests</th>
            </tr>
            <!-- PHP CODE TO FETCH DATA FROM ROWS-->
            <?php   // LOOP TILL END OF DATA
                while($rows=$result->fetch_assoc())
                {
             ?>
            <tr>
                <!--FETCHING DATA FROM EACH
                    ROW OF EVERY COLUMN-->

                <td><?php echo $rows['Name'];?></td>
                <td><?php echo $rows['Phone'];?></td>
                <td><?php echo $rows['ID_num'];?></td>
                <td><p><?php echo $rows['Describtion'];?></p></td>
                <td><?php echo $rows['Address'];?></td>

                <td><textarea name="" id="" cols="2" rows="2"></textarea></td>

                <td><textarea name="" id="" cols="2" rows="2"></textarea></td>
            </tr>
            <?php
                };
             ?>
        </table>
    </section>
















    </body>
</html>
