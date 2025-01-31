<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import Icon from '$lib/components/icon.svelte';
  import imgDesktop from '$lib/assets/frontend-mentor/image-product-desktop.jpg';
  import imgMobile from '$lib/assets/frontend-mentor/image-product-mobile.jpg';
</script>
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
  <symbol id="icon-cart" viewBox="0 0 30 32">
    <path fill="#fff" style="fill: var(--color1, #fff)" d="M28.766 20.776c-0.007-2.008-1.248-3.725-3.004-4.433l-0.032-0.011 2.988-11.186c0.033-0.121 0.052-0.26 0.052-0.404 0-0.373-0.128-0.717-0.342-0.989l0.003 0.003c-0.295-0.344-0.731-0.561-1.216-0.561-0.016 0-0.032 0-0.048 0.001l0.002-0h-21.894l-0.528-2.014c-0.19-0.686-0.809-1.182-1.544-1.182-0.002 0-0.004 0-0.006 0h-3.196v3.196h1.966l3.964 14.8c0.191 0.686 0.81 1.181 1.544 1.181 0.019 0 0.038-0 0.057-0.001l-0.003 0h16.444c0.859 0.031 1.543 0.735 1.543 1.599s-0.684 1.568-1.541 1.599l-0.003 0h-20.776c-0.024-0.001-0.052-0.002-0.080-0.002-0.884 0-1.6 0.716-1.6 1.6s0.716 1.6 1.6 1.6c0.028 0 0.056-0.001 0.084-0.002l-0.004 0h1.886c-0.182 0.486-0.287 1.048-0.287 1.634 0 2.648 2.146 4.794 4.794 4.794s4.794-2.146 4.794-4.794c0-0.586-0.105-1.148-0.298-1.667l0.011 0.033h3.77c-0.183 0.487-0.288 1.050-0.288 1.637 0 2.648 2.146 4.794 4.794 4.794s4.794-2.146 4.794-4.794c0-0.879-0.237-1.703-0.65-2.412l0.012 0.023c1.35-0.86 2.235-2.347 2.24-4.041v-0.001zM22.52 15.98h-13.73l-2.654-9.588h18.954l-2.57 9.59zM9.59 28.764c-0.024 0.001-0.052 0.002-0.080 0.002-0.884 0-1.6-0.716-1.6-1.6s0.716-1.6 1.6-1.6c0.028 0 0.056 0.001 0.084 0.002l-0.004-0c0.849 0.044 1.52 0.742 1.52 1.598s-0.671 1.554-1.516 1.598l-0.004 0zM22.376 28.764c-0.024 0.001-0.052 0.002-0.080 0.002-0.884 0-1.6-0.716-1.6-1.6s0.716-1.6 1.6-1.6c0.028 0 0.056 0.001 0.084 0.002l-0.004-0c0.849 0.044 1.52 0.742 1.52 1.598s-0.671 1.554-1.516 1.598l-0.004 0z"></path>
  </symbol>
  </defs>
</svg>

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
    
      <a class="text-sm font-bold text-white bg-[--light-green] py-4 block rounded-lg text-center hover:bg-[--green] duration-200" href="#add">
        <Icon name="cart" class="w-4 h-4 mr-3" />
        Add to Cart
      </a>
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