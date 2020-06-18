<?php

session_start();

//Manually handle system error
function customError($errno, $errstr)
  {
  if (strpos($errstr, "contact LDAP") !== false) {
     echo 'Error. Unable to process your login via LDAP server. Please contact system administrator.<br>Click <a href="index.php">here</a> to return to login screen.';
     exit;
     }
  else 
     $err_code = 2;
		header("Location: index?err_code=" . $err_code);
  }

//set error handler
set_error_handler("customError");

//Login to LDAP server
$username=$_POST['username'];
$password=$_POST['password'];
$ldap=ldap_connect("idssldap.tm.com.my");
if($ldap){
 $bind_results=ldap_bind($ldap,"cn=".$username.", ou=users, o=data", $password) or die ();

  // Check username and password match
  if ($bind_results) {
        // Set username session variable
        $_SESSION['username'] = $username;
        unset($_SESSION['loginerror']); 
        // Jump to secured page
        header('Location: search');
  }
  else {
        $err_code = 2;
		header("Location: index?err_code=" . $err_code);
  }
}


?>