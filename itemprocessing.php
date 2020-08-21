<?php 
session_start();
// $message = "connected!";
//echo "<script type='text/javascript'>alert('$message');</script>";

if(isset($_POST['placeorder'])){
    $_SESSION["fname"] = $_POST['fname'];
    $_SESSION["lname"] = $_POST['lname'];
    $_SESSION["address"] = $_POST['address'];
    $_SESSION["shippingcompany"] = $_POST['shippingcompany'];
    $_SESSION["city"] = $_POST['city'];
    $_SESSION["postal"] = $_POST['postal'];
    $_SESSION["state"] = $_POST['state'];
    $_SESSION["phone"] = $_POST['phone'];

    header("Location: confirm.php");
    
       }























//  if($_POST['phpJson']){
//    
//     $jSONtoPhp = json_decode($_POST['phpJson']); 
//
//     foreach($jSONtoPhp as $items){
//            $newName = trim($items->name);
//            $newPrice = trim($items->totalprice);
//            $newImg = trim($items->img);    
//            $orderid = trim($items->orderid); 
//               
//            echo $orderid;
//            $_SESSION["orderid"] = $_POST['fname'];
//            //print_r($items->name);
//         
//        $sql = "INSERT INTO testorder (name, price, img)
//        VALUES ('$newName', '$newPrice', '$newImg')";
//            
//    // Check connection
//        if (mysqli_query($conn, $sql)) {
//            
//          //echo "New record created successfully";
//        } else {
//          //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
//        }
//         
//    }
//}


    
?>

<script src="check.js">  </script>