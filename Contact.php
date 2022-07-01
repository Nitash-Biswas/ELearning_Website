<?php

    //get data from form  
    $name = $_POST['name'];
    $email= $_POST['email'];
    $mobile= $_POST['mobile'];
    $message= $_POST['message'];


    $email_from = "Ehustlers@abc.com";
    $to = "nitash.nb@gmail.com";

    $subject = "Your Response has been recorded";
    $txt ="Name = ". $name . "\r\n  Mobile Number = " . $mobile ."\r\n  Email = " . $email . "\r\n Message =" . $message;
    $headers = "From: $email_from\r\n";

    if(mail($to,$subject,$message,$email)){
        echo "Message sent\n";
    }
    else
    die("error");
    
?>
 

