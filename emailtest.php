<?php

    $FromName = "Kason";
    $FromEmail = "kason@kason.info";
    $ReplyTo = "kason@kason.info";
    $ToEmail = "kason@kason.info";
    $Subject = "MW Test";

    if(($Content = file_get_contents("mw.html")) === false) {
        $Content = "";
    }

    $Headers  = "MIME-Version: 1.0\n";
    $Headers .= "Content-type: text/html; charset=iso-8859-1\n";
    $Headers .= "From: ".$FromName." <".$FromEmail.">\n";
    $Headers .= "Reply-To: ".$ReplyTo."\n";
    $Headers .= "X-Sender: <".$FromEmail.">\n";
    $Headers .= "X-Mailer: PHP\n"; 
    $Headers .= "X-Priority: 1\n"; 
    $Headers .= "Return-Path: <".$FromEmail.">\n";  

    if(mail($ToEmail, $Subject, $Content, $Headers) == false) {
        //Error
    }
?>