<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import Icon from '$lib/components/icon.svelte';
    import symbols from '$lib/assets/frontend-mentor/four-card-feature-defs.svg?raw';

  const text = 'Reliable, efficient delivery';
  const text2 = 'Powered by Technology';
  const content = 'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful';
  
  const cards = [
    {
      title: 'Supervisor',
      text: 'Monitors activity to identify project roadblocks',
      icon: 'supervisor',
      color: 'before:bg-[--teal]',
      position: 'a'
    },
    {
      title: 'Team Builder',
      text: 'Scans our talent network to create the optimal team for your project',
      icon: 'team-builder',
      color: 'before:bg-[--red]',
      position: 'b'
    },
    {
      title: 'Karma',
      text: 'Regularly evaluates our talent to ensure quality',
      icon: 'karma',
      color: 'before:bg-[--yellow]',
      position: 'c'
    },
    {
      title: 'Calculator',
      text: 'Uses data from past projects to provide better delivery estimates',
      icon: 'calculator',
      color: 'before:bg-[--blue]',
      position: 'd'
    }
  ]
</script>
{@html symbols}

<section id="content" class="py-20 four-card-feature grow bg-[--white] text-[--gray] font-[Poppins]">
  <div class="px-8">
    <div class="mb-16 text-center">
      <h2 class="font-light heading">{text}</h2>
      <h2 class="font-semibold heading">{text2}</h2>
      <p class="mx-auto mt-4 content">{content}</p>
    </div>

    <div class="grid items-center justify-center gap-6 mx-auto card__grid">
      {#each cards as card}
        <div style="grid-area: {card.position};" class="">
          <div class="relative flex flex-col bg-white rounded-lg p-7 overflow-hidden card {card.color}">
            <div>
              <h3 class="card__title">{card.title}</h3>
              <p class="card__text">{card.text}</p>
            </div>
            
            <Icon name="icon-{card.icon}" class="mt-auto ml-auto h-14 w-14 lg:h-16 lg:w-16 shrink-0" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .four-card-feature {
    --white: #FAFAFA;
    --red: #EA5454;
    --teal: #44D3D2;
    --yellow: #FCAE4A;
    --blue: #549EF2;
    --gray: #4D4F62;
  }

  .heading {
    font-size: 1.5rem;
    letter-spacing: 0.16px;
    line-height: 1.5;

    @screen md {
      font-size: 2.25rem;
    }
  }

  .content {
    font-size: 0.9735rem;
    line-height: 1.65;
    letter-spacing: 0.1px;
    opacity: 0.5;
    max-width: 33.75rem;
  }

  .card__grid {
    max-width: 69.375rem;
    grid-template-areas: "a" "b" "c" "d";
    
    @screen lg {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 
        "a b d"
        "a c d";
    }
  }

  .card {
    box-shadow: 0 15px 30px -11px rgb(131 166 210 / 50%);
    aspect-ratio: 7 / 5;
    max-width: 21.875rem;

    &::before {
      content: "";
      display: block;
      height: 4px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .card__title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .card__text {
    font-size: 0.8125rem;
    line-height: 1.77;
    opacity: 0.5;
  }
</style>