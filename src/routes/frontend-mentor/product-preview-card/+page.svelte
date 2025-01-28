<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import imgDesktop from '$lib/assets/frontend-mentor/image-product-desktop.jpg';
  import imgMobile from '$lib/assets/frontend-mentor/image-product-mobile.jpg';
</script>

<section class="product-preview-card grid items-center px-4 py-7 md:py-20 grow font-[Montserrat] font-medium text-[--gray] bg-[--cream]">
  <div class="w-full mx-auto box rounded-[0.625rem] overflow-hidden md:grid md:grid-cols-2">
    <picture>
      <source media="(max-width: 768px)" srcset="{imgMobile}" />
      <source media="(min-width: 769px)" srcset="{imgDesktop}" />
      <img src="{imgDesktop}" alt="Perfume bottle">
    </picture>

    <div class="p-6 bg-white md:p-8">
      <p class="text-xs leading-tight uppercase tracking-[5px] mb-3 md:mb-5">Perfume</p>
    
      <h2 class="font-[Fraunces] font-bold text-[--black] leading-none text-[2rem] mb-4 md:mb-6">Gabrielle Essence Eau De Parfum</h2>
    
      <p class="mb-6 text-sm leading-relaxed">
        A floral, solar and voluptuous interpretation composed by Olivier Polge, 
        Perfumer-Creator for the House of CHANEL.
      </p>
    
      <div class="flex items-center gap-4 mb-5 md:my-7">
        <p class="font-[Fraunces] font-bold text-[--light-green] text-[2rem] leading-none">$149.99</p>
        <p class="text-sm line-through">$169.99</p>
      </div>
    
      <a class="text-sm font-bold text-white bg-[--light-green] py-4 block rounded-lg text-center hover:bg-[--green] duration-200" href="#add">Add to Cart</a>
    </div>
  </div>
</section>

<style>
  .product-preview-card {
    --gray: #6C7289;
    --cream: #F2EAE2;
    --light-green: #3D8168;
    --green: #1A4032;
    --black: #1C232B;
  }

  .box {
    max-width: 37.5rem;
  }
</style>