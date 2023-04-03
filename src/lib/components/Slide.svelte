
<section class="slide fdo-negro">
    <div class="container h-100 d-flex flex-column justify-content-center">
        <h1 class="txt-blanco txt-titulo-x bold fam-anton ">
            <span class="txt-blanco">We Work</span><img class="ms-3"src="../../images/we-work-for-real-users.png" alt=""><br/>
            <img class="me-3"src="../../images/the-best-experiences.png" alt=""><span class="txt-blanco fam-playfair">The Best Experiencies</span><br/>
            <span class="text-uppercase txt-blanco">FOR REAL USERS</span> <img class="ms-3"src="../../images/realux.png" alt="">
        </h1>
        <div class="d-sm-flex align-items-end mt-4">
            <div>
                <i class="bi bi-arrow-up-right txt-subtitulo txt-verde"></i>
                <hr class="fdo-blanco">
            </div>
            <div class="ms-sm-3 me-sm-5">
                <p class="txt-blanco txt-destacado">applied to digital <br/>
                    <span class="txt-verde"><u>products</u></span> and <span class="txt-verde"><u>brands</u></p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5215523439103&text=Hello%20Realux" target="_blank" class="btn btn-verde mt-sm-0 mt-4">Contact Us</a>
        </div>
    </div>
    <spline-viewer class="spline" url="https://prod.spline.design/OEqHY7rSiUoRQM3O/scene.splinecode"></spline-viewer>
    <div class="hide-logo"></div>

</section>

<style>
    .container {
        position: relative;
        z-index: 11;
    }
    .slide {
        height: 100vh;
    }
    .spline{
        position: fixed;
        top: 0px;
        z-index: 1;
    }
    hr{
        width: 180px;
        border: 1px solid var(--color-blanco);
        opacity: 1;
        margin: 0px;
    }
    .hide-logo{
        height: 100px;
        width: 300px;
        background-color: black;
        position: fixed;
        bottom: 0px;
        right: 0;
        z-index: 10;
    }
    @media only screen and (max-width: 992px) {
        .slide {
            height: auto;
            margin-top: 120px;
            margin-bottom: 80px;
        }
    }
    @media only screen and (max-width: 768px) {
        img{
            width: 20%;
        }
        hr{
            width: 80px;
        }
    }
    @media only screen and (max-width: 575px) {

        hr{
            width: 160px;
        }
    }
</style>

