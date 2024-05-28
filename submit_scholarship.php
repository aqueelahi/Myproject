<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $institution = $_POST['institution'];
  $gpa = $_POST['gpa'];
  $portfolio = $_POST['portfolio'];
  $essay = $_POST['essay'];

  // Process the data (e.g., save to a database, send an email, etc.)
  // For demonstration, we'll just echo the data
  echo "Name: $name<br>";
  echo "Email: $email<br>";
  echo "Institution: $institution<br>";
  echo "GPA: $gpa<br>";
  echo "Portfolio: $portfolio<br>";
  echo "Essay: $essay<br>";
}
?>
