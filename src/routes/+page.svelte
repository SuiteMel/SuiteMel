<svelte:head>
  <title>SuiteMel</title>
</svelte:head>

<script>
  const projectData = [
    {
      src: '/auschwitz-unionstation.png',
      alt: 'Auschwitz Digital Exhibit Site Intro',
      link: 'https://auschwitz.unionstation.org',
      title: 'Auschwitz Digital Exhibit',
      content: '<p>Winner of the A17 Design Awards Microsites category and Jurors Choice Award.</p>',
    },
    {
      src: '/mowersnow.png',
      alt: 'Homepage of Mowers Now',
      link: 'https://mowers-now.com',
      title: 'Mowers Now',
    },
    {
      src: '/sorinc.png',
      alt: 'Homepage of SOR Inc',
      link: 'https://www.sorinc.com',
      title: 'SOR Inc.',
      content: '<p>Developed for ADA compliancy.</p>'
    }
  ]
</script>

<div class="px-8">
  <h1 class="font-headings text-5xl text-center mt-10">Passionate about web development</h1>

  <section class="mt-10">
    <div class="lg:w-10/12 mx-auto">
      <div class="grid md:grid-cols-2 gap-y-5 gap-x-8">
        <h2 class="font-headings text-3xl">Hi, I'm Melissa Waltner</h2>
    
        <p class="">
          I am self-driven web developer committed to crafting quality code for both others and myself. With expertise in HTML, CSS, JavaScript, and frameworks, I create seamless user experiences that reflect innovation and precision. I find joy in collaborating with diverse teams, leveraging our combined strengths to deliver exceptional results while adhering to my personal standards of excellence. Web development isn't just my profession—it's a fulfilling journey of continuous improvement, leaving a positive impact on the digital landscape.
        </p>
      </div>
    </div>
  </section>

  <section class="mt-16 mb-10">
    <h2 class="text-2xl font-headings font-bold text-center mb-8">Featured Projects</h2>

    <div class="grid md:grid-cols-3 gap-10">
      {#each projectData as card}
        <article>
          <img src="{card.src}" alt="{card.alt}" class="mb-4 rounded-lg mx-auto">
        
          <a class="underline text-brand-primary hover:no-underline" href="{card.link}">
            <h3 class="text-2xl font-headings font-bold">
              {card.title}
            </h3>
          </a>
        
          {#if card.content}
            <div class="mt-3">
              {@html card.content}
            </div>
          {/if}
        </article>
      {/each}
    </div>
  </section>
</div>