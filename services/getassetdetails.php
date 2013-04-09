<?php
include 'config.php';

$sql = "select * from assethyperlinks as e  " .
	   "where e.id=:id ";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("id", $_GET['id']);
	$stmt->execute();
	$Asset = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($Asset) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}
?>