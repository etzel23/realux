
<section class="fdo-blanco py-5" id="customers">
    <div class="container d-flex flex-column justify-content-center">
        <hr class="fdo-negro mb-5">
        <div class="row slider">
            <div class="slider-track">
                <div class="slide"><img src="../../images/banco-autofin.png" alt="Banco Autofin" class=""></div>
                <div class="slide"><img src="../../images/bbva.png" alt="BBVA" class=""></div>
                <div class="slide"><img src="../../images/totalplay.png" alt="Totalplay" class=""></div>
                <div class="slide"><img src="../../images/banco-azteca.png" alt="Banco Azteca" class=""></div>
                <div class="slide"><img src="../../images/entre-particulares.png" alt="Entre Particulares" class=""></div>

                <div class="slide"><img src="../../images/banco-autofin.png" alt="Banco Autofin" class=""></div>
                <div class="slide"><img src="../../images/bbva.png" alt="BBVA" class=""></div>
                <div class="slide"><img src="../../images/totalplay.png" alt="Totalplay" class=""></div>
                <div class="slide"><img src="../../images/banco-azteca.png" alt="Banco Azteca" class=""></div>
                <div class="slide"><img src="../../images/entre-particulares.png" alt="Entre Particulares" class=""></div>
            </div>
        </div>
        <hr class="fdo-negro mt-5">
    </div>
</section>

<style>

    hr{
        width: 100%;
        border: 1px solid var(--color-negro);
        opacity: 1;
        margin: 0px;
    }

    section {
        position: relative;
        z-index: 10;
    }
    @keyframes scroll{
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(calc(-250px *5)) ;
        }
    }
    .slider{
        overflow: hidden;
        display: block;
    }
    .slider .slider-track{
        animation: scroll 20s linear infinite;
        width: calc(250px * 10);
        min-width: 2500px;
        display: flex;
        align-items: center;
    }
    .slider .slide{
        width: 250px;
    }
    img{
        width: 130px;
    }
</style>

