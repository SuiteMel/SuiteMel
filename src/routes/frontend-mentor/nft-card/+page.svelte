<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import nft from '$lib/assets/frontend-mentor/image-equilibrium.jpg';
  import avatar from '$lib/assets/frontend-mentor/image-avatar.png';
  import Icon from '$lib/components/icon.svelte';
  import symbols from '$lib/assets/frontend-mentor/nft-card-symbol-defs.svg?raw';
</script>
{@html symbols}

  <section class="nft-card grid items-center grow py-20 bg-[color:var(--dark-blue)] font-['Outfit']">
    <div class="container">

      <div class="mx-auto max-w-sm">
        <div class="bg-[color:var(--blue)] p-6 rounded-xl">
          <div class="aspect-square rounded-lg bg-blue-700 relative mb-5 overflow-hidden ">
            <a href="/" class="block after:block after:bg-[color:var(--cyan)] after:opacity-0 hover:after:opacity-50 after:absolute after:inset-0 group">
              <img src="{nft}" alt="Equilibrium #3429 NFT" class="object-cover h-full w-full">

              <Icon name="view" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 opacity-0 group-hover:opacity-100"/>
            </a>
          </div>
  
          <a href="/" class="font-semibold text-white text-2xl mb-5 hover:text-[color:var(--cyan)] block"><h2>Equilibrium #3429</h2></a>
      
          <p class="text-lg text-[color:var(--soft-blue)] font-light mb-4">Our Equilibrium collection promotes balance and calm.</p>
        
          <div class="flex justify-between">
            <p class="text-[color:var(--cyan)] font-semibold flex items-center">
              <Icon name="ethereum" class="mr-1" />
              0.041 ETH
            </p>
            
            <p class="flex items-center text-[color:var(--soft-blue)]">
              <Icon name="clock" class="mr-2"/>
              3 days left
            </p>
          </div>
          
          <div class="border-t border-[color:var(--soft-blue)] mt-5 pt-4 flex items-center">
            <div class="aspect-square rounded-full border border-white w-8">
              <img src="{avatar}" alt="" class="object-cover h-full w-full">
            </div>
            <p class="ml-4 text-[color:var(--soft-blue)]">Creation of <a href="/" class="text-white hover:text-[color:var(--cyan)]">Jules Wyvern</a></p>
          </div>
        </div>
      </div>
      
    </div>
  </section>

<style>
.nft-card {
  --soft-blue: hsl(215, 51%, 70%);
  --cyan: hsl(178, 100%, 50%);
  --dark-blue: hsl(217, 54%, 11%);
  --blue: hsl(216, 50%, 16%);
  --medium-blue: hsl(215, 32%, 27%);
}
</style>