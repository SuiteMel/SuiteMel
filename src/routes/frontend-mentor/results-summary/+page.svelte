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

<section class="results-summary grid items-center text-lg font-['Hanken_Grotesk'] grow bg-[color:var(--pale-blue)] font-medium">
  <div class="container">
    <div class="bg-white rounded-3xl flex max-w-[50%] mx-auto">
      <div class="bg-gradient w-1/2 rounded-3xl px-16 text-center py-8">
        <p class="text-[color:var(--light-lavender)] font-bold text-xl">Your Result</p>

        <div class="rounded-full aspect-square circle-gradient my-8 flex flex-col items-center justify-center">
          <p class="text-7xl text-white">
            {result}
          </p>
          <p class="text-[color:var(--light-lavender)]">
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

      <div class="px-8 py-8 w-1/2">
        <p class="font-bold text-xl">Summary</p>
        {#each data.results as { category, score, icon }}
          <div class="flex justify-between">
            <p>
              <Icon name="{icon}" class="mr-2" />
              <span>{category}</span>
            </p>

            <p>
              {score} / 100
            </p>
          </div>
        {/each}
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
    --light-lavender: hsl(241, 100%, 89%);
    --dark-gray-blue: hsl(224, 30%, 27%);
  }

  .bg-gradient {
    background: linear-gradient(var(--light-slate-blue), var(--light-royal-blue))
  }

  .circle-gradient {
    background: linear-gradient(var(--violet-blue), var(--persian-blue));
  }
</style>