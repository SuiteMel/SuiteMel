<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap" rel="stylesheet">
</svelte:head>

<script>
  export let data;
  const mean = data => {
  if (data.length < 1) {
    return;
  }
  return data.reduce((prev, current) => prev + current) / data.length;
  };
  const scores = data.results.map(value => value.score);
  const result = Math.round( mean(scores) );
  const resultText = 'Great';
  const resultCopy = 'You scored higher than 65% of the people who have taken these tests.';
  import Icon from '$lib/components/icon.svelte';
  import symbols from '$lib/assets/frontend-mentor/results-summary-symbol-defs.svg?raw';
</script>
{@html symbols}

<!-- TODO: Active states and mobile -->
<section class="results-summary grid items-center text-lg font-['Hanken_Grotesk'] grow bg-[color:var(--pale-blue)] font-medium">
  <div class="lg:container">
    <div class="bg-white lg:rounded-3xl grid lg:grid-cols-2 lg:w-8/12 xl:w-1/2 mx-auto">
      <div class="bg-gradient rounded-b-3xl lg:rounded-t-3xl px-14 text-center py-8">
        <p class="text-[color:var(--light-lavender)] font-bold text-xl">Your Result</p>

        <div class="rounded-full aspect-square mx-10 circle-gradient my-8 flex flex-col items-center justify-center font-bold">
          <p class="text-6xl text-white">
            {result}
          </p>
          <p class="text-[color:var(--light-lavender)] opacity-60">
            of 100
          </p>
        </div>

        <p class="text-white text-2xl font-bold mb-5">
          {resultText}
        </p>

        <p class="text-[color:var(--light-lavender)]">
          {resultCopy}
        </p>
      </div>

      <div class="px-8 py-8">
        <p class="font-bold text-xl">Summary</p>

        <div class="space-y-3 mt-7 mb-10">
          {#each data.results as { category, score, icon, color }}
            <div class="font-bold flex justify-between bg-gray-400/50 rounded-lg px-4 py-3 {color}">
              <p>
                <Icon name="{icon}" class="mr-2" />
                <span>{category}</span>
              </p>
  
              <p class="text-[color:var(--dark-gray-blue)]">
                {score} <span class="opacity-60">/ 100</span>
              </p>
            </div>
          {/each}
        </div>

        <a href="/" class="bg-[color:var(--dark-gray-blue)] text-white w-full inline-block text-center rounded-3xl py-3 px-4">
          Continue
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .results-summary {
    --light-slate-blue: hsl(252, 100%, 67%);
    --light-royal-blue: hsl(241, 81%, 54%);

    --violet-blue: hsla(256, 72%, 46%, 1);
    --persian-blue: hsla(241, 72%, 46%, 0);

    --white: hsl(0, 0%, 100%);
    --pale-blue: hsl(221, 100%, 96%);
    --light-lavender: hsl(241 100% 89%);
    --dark-gray-blue: hsl(224, 30%, 27%);

    --opacity: 10%;
  }

  .bg-gradient {
    background: linear-gradient(var(--light-slate-blue), var(--light-royal-blue))
  }

  .circle-gradient {
    background: linear-gradient(var(--violet-blue), var(--persian-blue));
  }

  .results-summary .red {
    color: hsla(0 100% 67% / 100%);
    background-color: hsla(0 100% 67% / var(--opacity));
  }

  .yellow {
    color: hsla(39 100% 56% / 100%);
    background-color: hsla(39 100% 56% / var(--opacity));
  }

  .green {
    color: hsla(166 100% 37% / 100%);
    background-color: hsla(166 100% 37% / var(--opacity));
  }

  .blue {
    color: hsla(234 85% 45% / 100%);
    background-color: hsla(234 85% 45% / var(--opacity));
  }
</style>