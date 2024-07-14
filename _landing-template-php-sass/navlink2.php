<?php
    $thisPage="navlink2";
    include('./includes/header.php');
?>

    <section class="landing navlink2-page d-flex justify-content-center align-items-center">
        <div id="header" class="container text-white text-center">
           
            <h1 class="display-1">Navlink2 - Contact</h1>
            <p class="lead d-none d-md-block">Lorem ipsum dolor sit amet.<br>Lorem, ipsum dolor.</p>
        </div>
    </section>

    <section>
        <div class="container text-left">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="mb-5">Contact</h3>
                    <p class="lead">
                        Name of Business
                    </p>
                    <p class="lead">
                        Name of CEO/POC
                    </p>
                    <p class="lead">
                        Address Line 1
                        Address Line 2
                        Address Line 3
                    </p>
                    <div>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="gmap_canvas">
                        <iframe width="350" height="250" id="gmap_canvas" src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" SameSite="None" Secure></iframe>
                    </div>
                    <style>.mapouter{position:relative;text-align:center;height:350px;width:500px;}.gmap_canvas {overflow:hidden;background:none!important;height:auto;width:auto;text-align:center;}</style>
                </div>
            </div>
        </div>
    </section>
            <!-- POC row -->
    <section>
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="card text-white bg-secondary mb-3">
                        <img class="w-100 card-img-top img-fluid" src="./images/image3.jpg" alt="">
                        <!-- <img class="w-100" src="./images/image1.jpg" alt=""> -->
                        <!-- <div class="card-img-overlay"> -->
                        <div class="card-body">
                            <h5 class="card-title">Name of 1st Person</h5>
                            <p class="card-text">Title of first person</p>
                            <a href="#" class="btn btn-primary">1-555-555 Call now</a>
                        </div>
                    </div> 
                </div>
                <div class="col-md-4">
                    <div class="card text-white bg-secondary mb-3">
                        <img class="w-100 card-img-top img-fluid" src="./images/image2.jpg" alt="">
                        <!-- <img class="w-100" src="./images/image1.jpg" alt=""> -->
                        <!-- <div class="card-img-overlay"> -->
                        <div class="card-body">
                            <h5 class="card-title">Name of 2nd Person</h5>
                            <p class="card-text">Title of second person</p>
                            <a href="#" class="btn btn-primary">1-555-555 Call now</a>
                        </div>
                    </div> 
                </div>
                <div class="col-md-4">
                    <div class="card text-white bg-secondary mb-3">
                        <img class="w-100 card-img-top img-fluid" src="./images/image3.jpg" alt="">
                        <!-- <img class="w-100" src="./images/image1.jpg" alt=""> -->
                        <!-- <div class="card-img-overlay"> -->
                        <div class="card-body">
                            <h5 class="card-title">Name of 3rd Person</h5>
                            <p class="card-text">Title of third person</p>
                            <a href="#" class="btn btn-primary">1-555-555 Call now</a>
                        </div>
                    </div> 
                </div>

            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="card text-white bg-secondary mb-3">
                        <img class="w-100 card-img-top img-fluid" src="./images/image2.jpg" alt="">
                        <!-- <img class="w-100" src="./images/image1.jpg" alt=""> -->
                        <!-- <div class="card-img-overlay"> -->
                        <div class="card-body">
                            <h5 class="card-title">Name of 4th Person</h5>
                            <p class="card-text">Title of fourth person</p>
                            <a href="#" class="btn btn-primary">1-555-555 Call now</a>
                        </div>
                    </div> 
                </div>
                <div class="col-md-4">
                    <div class="card text-white bg-secondary mb-3">
                        <img class="w-100 card-img-top img-fluid" src="./images/image3.jpg" alt="">
                        <!-- <img class="w-100" src="./images/image1.jpg" alt=""> -->
                        <!-- <div class="card-img-overlay"> -->
                        <div class="card-body">
                            <h5 class="card-title">Name of 5th Person</h5>
                            <p class="card-text">Title of fifth person</p>
                            <a href="#" class="btn btn-primary">1-555-555 Call now</a>
                        </div>
                    </div> 
                </div>
                <div class="col-md-4">
                    <div class="card text-white bg-secondary mb-3">
                        <img class="w-100 card-img-top img-fluid" src="./images/image2.jpg" alt="">
                        <!-- <img class="w-100" src="./images/image1.jpg" alt=""> -->
                        <!-- <div class="card-img-overlay"> -->
                        <div class="card-body">
                            <h5 class="card-title">Name of 6th Person</h5>
                            <p class="card-text">Title of sixth person</p>
                            <a href="#" class="btn btn-primary">1-555-555 Call now</a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>

    <section class="contact-form">
        <div class="container">
            <?php
                include('./includes/generalform.php');
            ?>
        </div>
    </section>
           
        
   

<?php
    include('./includes/footer.php');
?>