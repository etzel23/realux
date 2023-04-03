
<script>
import { onMount } from 'svelte';
  
  let animationProgress = 0;
  console.log(animationProgress);
  
  onMount(() => {
    const container = document.querySelector('.contact');
    const containerHeight = container.offsetHeight;
    const windowHeight = window.innerHeight;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      
      if (containerTop < scrollTop + windowHeight / 2 && containerTop + containerHeight > scrollTop + windowHeight / 2) {
        animationProgress = 1;
        console.log("entre");
        return
      } else {
        animationProgress = 0;
        console.log("sli");
      }
    });
  });
    
</script>

<section class="fdo-negro py-5 contact" id="contact">
    <div class="fdo-verde py-xl-5 container" class:full = {animationProgress == 1}>
        <div class="py-5 d-flex flex-column justify-content-center align-items-center">
            <h2 class="mt-5 text-center txt-titulo-x bold fam-anton text-uppercase">Ready to <br>collaborate?</h2>
            <div class="d-sm-flex justify-content-center mt-5 w-100 text-center">
                <a href="https://api.whatsapp.com/send?phone=5215523439103&text=Hello%20Realux" target="_blank" class="btn btn-negro d-flex justify-content-between align-items-center">Start project <i class="bi bi-arrow-right-circle-fill txt-verde txt-destacado"></i></a>
                <a href="mailto:hello@realux.com.mx" class="btn btn-blanco d-flex justify-content-between align-items-center">hello@realux.com.mx <i class="bi bi-arrow-right-circle txt-destacado"></i></a>
            </div>
        </div>
    </div>
</section>

<style>

    section {
        position: relative;
        z-index: 10;
    }
    .container{
        border-radius: 50px;
    }
    a {
        max-width: 500px;
        width: 350px;
        margin: 0px 10px;
    }
    .btn-blanco:hover{
        background-color: var(--color-negro);
        color: var(--color-blanco);
    }
    .contact .container{
        transition: all 1.5s;
        transform: scale(0.3);
        opacity: 0;
    }
    .contact .container.full{
        transform: scale(1);
        opacity: 1;
    }



@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@media only screen and (max-width: 992px) {
  a {
        max-width: 500px;
        width: 300px;
        margin: 0px 10px;
    }
}

@media only screen and (max-width: 768px) {
  a {
        max-width: 500px;
        width: 230px;
        margin: 0px 10px;
        padding-left: 15px;
        padding-right: 15px;
    }
}

@media only screen and (max-width: 576px) {
  a {
        max-width: 250px;
        width: 100%;
        
        padding-left: 15px;
        padding-right: 15px;
        margin: 0px auto;
        margin-top: 20PX;
    }
}
    
</style>

