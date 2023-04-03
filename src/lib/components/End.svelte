
                       
<script>
    import { onMount } from 'svelte';
      
      let animationProgress = 0;
      console.log(animationProgress);
      
      onMount(() => {
        const container = document.querySelector('.slide-end ');
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        
        window.addEventListener('scroll', () => {
          const scrollTop = window.scrollY;
          const containerTop = container.offsetTop;
          
          if (containerTop < scrollTop + windowHeight / 2 -100 && containerTop + containerHeight  > scrollTop + windowHeight / 2 - 100) {
            animationProgress = 1;
            return
          } else {
            animationProgress = 0;
          }
        });
      });
        
    </script>
<section class="slide-end fdo-negro">
    <div class="container h-100 d-flex flex-column justify-content-center">
        <h2 class="txt-blanco text-uppercase txt-titulo-x bold fam-anton ">
            <span class="txt-blanco">When science <br/>& design</span><br/>
            <span class=" outline">Collaborate</span>
            {#if animationProgress == 1}
            <lottie-player class="svgLoti" src="https://lottie.host/07cd013e-95aa-4ec0-9343-a7c6343d6af4/movy8ehthP.json"  background="transparent"  speed="2"  style="width: 600px; height: 400px;" autoplay></lottie-player>
            {/if}
            
        </h2>
|   </div>
    <spline-viewer class="spline" url="https://prod.spline.design/pGAm-IkHxUHw0ZMj/scene.splinecode"></spline-viewer>
    <div class="hide-logo"></div>
</section>

<style>
    .container {
        position: relative;
        z-index: 11;
    }
    .slide-end  {
        height: 100vh;
    }
    .spline{
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .outline{
        color: transparent;
        -webkit-text-stroke: 0.5px var(--color-blanco);
    }
    section{
        position: relative;
        z-index: 10;
    }
    h2{
        position: relative;
    }
    .svgLoti{
        position: absolute;
        bottom: -140px;
        left: 0;
        z-index: 1;
    }
    .hide-logo{
        height: 100px;
        width: 300px;
        background-color: black;
        position: absolute;
        bottom: 0px;
        right: 0;
        z-index: 10;
    }
    @media only screen and (max-width: 992px) {
        .svgLoti{
            bottom: -100px;
            left: 0px;
            width: 400px !important;
            height: 300px !important;
        }
    }
    @media only screen and (max-width: 768px) {
        .svgLoti{
            bottom: -100px;
            left: -00px;
            width: 300px !important;
            height: 250px !important;
        }
        .hide-logo{
            width: 100%;
        }
    }

</style>

