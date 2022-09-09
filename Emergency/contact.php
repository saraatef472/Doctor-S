
  <?php 
$dsn = 'mysql:host=localhost;dbname=userdb'; //data source name
$user = 'root'; //the user connect with local host
$pass = ''; // password of this user

$con = mysqli_connect('localhost', 'root', '','userdb');
$iName = $_POST['Name'];
$idnumber = $_POST['ID_num'];
$phonenumber = $_POST['Phone'];
$descrition = $_POST['Describtion'];
$address = $_POST['Address'];



$sql= "INSERT INTO `usert` (`ID_num`, `Phone`, `Describtion`, `Location`, `Address`,`Name`)
 VALUES (' $idnumber', ' $phonenumber', ' $descrition', '', '$address','$iName')";

$rs = mysqli_query($con, $sql);
include ('../index.html');

?>
   
    
    
    