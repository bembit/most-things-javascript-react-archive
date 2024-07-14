<?php 
    include('./includes/navitems.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/styles.css">
    <title>Template design</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.9.0/css/all.css" integrity="sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E" crossorigin="anonymous">
</head>
<body>

<!-- navigation -->
    
    <nav class="contact-bar">
    <div class="margined">
        <div>
            <i class="fas fa-phone-alt"></i>
            <a class="btn" href="#">1-555-555</a>
        </div>
        <div>
            <i class="fas fa-envelope"></i>
            <a class="btn" href="#">info@example.com</a>
        </div>
        <div>
            <i class="fas fa-map-marked-alt"></i>
            <a class="btn" href="#">15th Avenue Hungary</a>
        </div>
        <div>
            <i class="fab fa-facebook-square"></i>
            <a class="btn" href="#">Facebook</a>
        </div>
        <div>
            <i class="far fa-clock"></i>
            <a class="btn" href="#">Open: Mon - Fri 08:00 - 17:00</a>
        </div>
        
    </div>
    </nav>

    <nav class="navbar navbar-expand-md navbar-dark navigation-padding">

    <div class="margined">

        <a href="/beta/index.php" class="navbar-brand mb-0">
            <h3 class="mb-0">LOGO</h3>
        </a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#mainNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
            

                <?php include('./includes/nav.php'); ?>
            
            
        </div>
    </div>
    </nav>