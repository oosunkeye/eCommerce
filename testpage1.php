<?php 
session_start();
require('dbconnect.php');   

$fname = $_SESSION["fname"];
$lname = $_SESSION["lname"];
$address = $_SESSION["address"];
$shippingcompany = $_SESSION["shippingcompany"];
$city = $_SESSION["city"];
$postal = $_SESSION["postal"];
$state = $_SESSION["state"];
$phone = $_SESSION["phone"];

  if($_POST['phpJson']){
      
      if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
      
     $jSONtoPhp = json_decode($_POST['phpJson']); 
     foreach($jSONtoPhp as $items){
            $orderid = trim($items->orderid);
            $desc = trim($items->name);
            $price = trim($items->totalprice);
            $img = trim($items->img);          
            echo "$orderid \r\n";
            echo "$lname";
            //print_r($items->name);
         
         $sql = "INSERT INTO ordertest (orderid, description, price, img, firstname, lastname, address, shippingcompany, city, postal, state, phone)
       VALUES ('$orderid', '$desc', '$price', '$img', '$fname', '$lname', '$address', '$shippingcompany', '$city', '$postal', '$state', '$phone')";
        
        if (mysqli_query($conn, $sql)) {
          //echo "New record created successfully";
        } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
         
    }
  }

