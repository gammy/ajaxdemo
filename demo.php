<?php

$id = $_GET['id'];

$data['message'] = "This text was made in demo.php as it received request with id $id!";

// Demo a way to return an error
if($id < 500)
	$data['error'] = 'Error: id is less than 500!';

echo json_encode($data);

?>
