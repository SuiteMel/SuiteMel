<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import image from '$lib/assets/frontend-mentor/image-stats.jpg';
</script>

<section class="subpixel-antialiased stats-preview grid items-center grow py-20 bg-[color:var(--dark-blue)] text-white font-['Inter']">
  <div class="container">
    <div class="grid overflow-hidden rounded-lg lg:grid-cols-2">
      <div class="text-center lg:text-left bg-[color:var(--navy)] pt-10 p-8 md:p-[4.5rem] lg:pr-24">
        <div>
          <h2 class="text-[1.75rem] md:text-[2.5rem] font-bold">Get <span class="text-[color:var(--purple)]">insights</span> that help your business grow.</h2>
          <p class="text-white/75 text-[0.9375rem] mt-6">
            Discover the benefits of data analytics and make better decisions regarding revenue, customer 
            experience, and overall efficiency.
          </p>
        </div>
    
        <ul class="lg:pt-[4.5rem] pt-10 flex lg:gap-6 lg:justify-between lg:flex-row flex-col gap-6">
          <li>
            <span class="stat">10k+</span> 
            <span class="stat-text">companies</span>
          </li>
          <li>
            <span class="stat">314 </span>
            <span class="stat-text">templates</span>
          </li>
          <li>
            <span class="stat">12M+</span> 
            <span class="stat-text">queries</span>
          </li>
        </ul>
      </div>
  
      <div class="order-first lg:order-none aspect-4/3 relative bg-[color:var(--purple)]">
        <img src="{image}" alt="" class="object-cover w-full h-full mix-blend-multiply">
      </div>
    </div>
  </div>
</section>

<style>
  .stats-preview {
    --purple: #AB5CDB;
    --dark-blue: #0A0C1C;
    --navy: #1B1937;
    display: block;
  }

  .stat {
    display: block;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .stat-text {
    font-family: "Lexend Deca";
    font-size: 0.75rem;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
    color: theme('colors.white / 60%');
  }
</style>