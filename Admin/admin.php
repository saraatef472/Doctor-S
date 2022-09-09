<?php

$dsn = 'mysql:host=localhost;dbname=userdb'; //data source name
$user = 'root'; //the user connect with local host
$pass = ''; // password of this user

$con = mysqli_connect('localhost', 'root', '','admin');

  
// Now we check if the data from the login form was submitted, isset() will check if the data exists.
if ( !isset($_POST['username'], $_POST['password']) ) {
	// Could not get the data that should have been sent.
	exit('Please fill both the username and password fields!');
}

// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
if ($stmt = $con->prepare('SELECT id, password FROM username WHERE username = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
	$stmt->bind_param('s', $_POST['username']);
	$stmt->execute();
	// Store the result so we can check if the account exists in the database.
	$stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $password);
        $stmt->fetch();
        // Account exists, now we verify the password.
        // Note: remember to use password_hash in your registration file to store the hashed passwords.
        if ($_POST['password'] === $password) {
            // Verification success! User has logged-in!
            // Create sessions, so we know the user is logged in, they basically act like cookies but remember the data on the server.
            // session_regenerate_id();
            // $_SESSION['loggedin'] = TRUE;
            // $_SESSION['name'] = $_POST['username'];
            // $_SESSION['id'] = $id;
            // echo 'Welcome ' . $_SESSION['name'] . '!';
           include("../Admin/Site.php");
        } else {
            // Incorrect password
            include("../Admin/Admin.html");

            echo '<script>alert("Incorrect username and/or password!")</script>';        

        };
    } else {
        // Incorrect username
        include("../Admin/Admin.html");

        echo '<script>alert("Incorrect username and/or password!")</script>';   
  
    };
    
	$stmt->close();
}

?>