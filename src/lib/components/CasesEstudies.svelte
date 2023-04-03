
<script>
    //Swiper
	import {Swiper, SwiperSlide} from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/navigation';
	// Swiper modulos
	import {Navigation} from 'swiper';
</script>
<section class="fdo-blanco py-5">
    <div class="container d-flex flex-column justify-content-center">
        <div class="row d-flex align-items-lg-end">
            <div class="col-sm-6 pe-md-5 d-flex justify-content-between align-items-center">
                <h2 class="txt-negro txt-titulo bold fam-anton text-uppercase">Our lates cases studies</h2>
            </div>
            <div class="col-sm-6 d-flex justify-content-between align-items-center mt-sm-0 mt-5">
                <p class="ps-md-5 txt-negro lh-base">From emerging startups to established companies, our case studies reflect how our passion for innovation and our commitment to excellence have been the key to our clients' success. Get ready to be inspired by real stories of how we have solved complex challenges, overcome obstacles, and achieved remarkable results.</p>
            </div>
            
        </div>

        <div class="carrusel mt-5">
            <Swiper
				slidesPerView={1}
				spaceBetween={15}
				navigation={true}
				breakpoints={{
					'576': {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					'769': {
						slidesPerView: 3,
						spaceBetween: 25,
					},
					'993': {
						slidesPerView: 4,
						spaceBetween: 25,
					},
					'1200': {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					'1481': {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				modules={[Navigation]}
				class="carrusel">
				
					<SwiperSlide>
						<div>
                            <img src="../../images/tech-realux.png" alt="Tech" class="w-100">
                            <h3 class="text-uppercase txt-parrafo mt-4">Tech</h3>
                            <p class="text-uppercase fam-anton txt-destacado mt-3">We built the new way to sell your car online</p>
                        </div>
					</SwiperSlide>

                    <SwiperSlide>
						<div>
                            <img src="../../images/business-realux.png" alt="Business" class="w-100">
                            <h3 class="text-uppercase txt-parrafo mt-4">Business</h3>
                            <p class="text-uppercase fam-anton txt-destacado mt-3">Best allies to build your business model</p>
                        </div>
					</SwiperSlide>

                    <SwiperSlide>
						<div>
                            <img src="../../images/ux-realux.png" alt="UX" class="w-100">
                            <h3 class="text-uppercase txt-parrafo mt-4">UX</h3>
                            <p class="text-uppercase fam-anton txt-destacado mt-3">ux in vr | translate the experiences</p>
                        </div>
					</SwiperSlide>

                    <SwiperSlide>
						<div>
                            <img src="../../images/biohack-realux.png" alt="BIOHACK" class="w-100">
                            <h3 class="text-uppercase txt-parrafo mt-4">BIOHACK</h3>
                            <p class="text-uppercase fam-anton txt-destacado mt-3">Use chat gpt to work fast</p>
                        </div>
					</SwiperSlide>
				
			</Swiper>
        </div>

    </div>
</section>

<style>
    section {
        position: relative;
        z-index: 10;
    }
</style>

