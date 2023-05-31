<?php	
$servername="localhost";
$username="root";
$password="";
$dbname="kanin";

$conn = mysqli_connect($servername, $username,$password,$dbname);
	if (!$conn) {
		die("Could Not Connect MySQL Server:" .mysql_error());
	}
	else {
		echo("<h1>Welcome to Kanin!</h1>");
	}
?>
<?php	
include_once 'database.php';
if(isset($_POST['submit']))
{
	$username = $_POST['username'];
	$password = $_POST['password'];
	$sql = "INSERT INTO website(username,password) 
	VALUES('$username','$password')";
	if (mysqli_query($conn, $sql)) {
		echo "New record has been added successfully!";
	}
	else {
		echo "Error:" . $sql . ":-" . mysqli_error($conn);
	}
mysqli_close($conn);
}
?>