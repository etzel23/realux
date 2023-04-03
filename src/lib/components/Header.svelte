<script>
    let scrollY;
    let width;
    let menu = false
     //$: console.log(scrollY);
    $: console.log(menu);
</script>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={width}/>

<header class=" py-4" class:transparente={scrollY > 10}>
    <div class="container d-flex justify-content-between">
        <img src="../../images/logotipo-realux.svg" alt="Realux" class="logo">
        {#if width < 769}
            <div class="menu txt-blanco" on:click={() =>{menu = !menu}}><i class="bi bi-list"></i></div>
        {/if}
        
        
        <nav class:visible = {menu != true}>
            <a class="mx-2 txt-blanco" href="/" on:click={() =>{menu = !menu}}>Home</a>
            <a class="mx-2 txt-blanco" href="#about" on:click={() =>{menu = !menu}}>About</a>
            <a class="mx-2 txt-blanco" href="#customers" on:click={() =>{menu = !menu}}>Customers </a>
            <a class="mx-2 txt-blanco" href="#services" on:click={() =>{menu = !menu}}>Services</a>
            <a class="mx-2 txt-blanco" href="#contact" on:click={() =>{menu = !menu}}>Contat Us</a>
        </nav>
        <div class="cont-menu" class:close = {menu != true}></div>
    </div>

</header>




<style>
    header{
        position: fixed;
        width: 100%;
        z-index: 14;
        transition: all 0.5s;
        top: 0px;
    }
    header.transparente{
        background-color: var(--color-negro);
    }
    a:hover{
        color: var(--color-verde) !important;
    }
    @media only screen and (max-width: 768px) {
        .container {
            position: relative;
        }
        .menu, .logo{
            position: relative;
            z-index: 15;
        }
        nav.visible{
           
            opacity: 0;
            transition: all 0.5s;
            pointer-events: auto;
            height: 0px;
            pointer-events: none;
        }
        nav{
            display: flex;
            opacity: 1;
            position: fixed;
            z-index: 14;
            flex-direction: column;
            width: 100%;
            left: 0px;
            top: 70px;
            height: calc(100% - 70px);
            justify-content: center;
            align-items: center;
            transition: all 1s;
            pointer-events: all;
        }
        nav a{
            margin: 20px 0px;
            color: var(--color-negro) !important;
            font-weight: bold;
            font-size: 40px;            
        }
       
        .cont-menu{
            background-color: var(--color-verde);
            width: 100%;
            height: 100%;
            min-width: 2000px;
            min-height: 2000px;
            position: fixed;
            right: calc(50% - 1000px);
            top: calc(50% - 1000px);
            z-index: 13;
            transition: all 0.5s;
            border-radius: 50%;
            transition-timing-function: cubic-bezier(0.405, 0.00, 0.165, 1.000);
        }
        .cont-menu.close{
            background-color: var(--color-verde);
            min-width: 40px;
            min-height: 40px;
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            right: 0px;
            top: -10px; 
        }
    }
</style>