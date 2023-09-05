<script>
  // import { navigating } from '$app/stores';
  import { page } from '$app/stores';
  import favicon from '$lib/assets/frontend-mentor/favicon-32x32.png';
  export let data;

  $: url = $page.url.pathname;
  $: current = Object.keys(data.sections).find(( key ) => url.includes(key) );

  const sections = data.sections;
</script>

<svelte:head>
  <link rel="icon" type="image/png" sizes="32x32" href="{favicon}">
  <title>Frontend Mentor{sections[current] ? ' | '+sections[current] : ''}</title>
</svelte:head>

<main class="flex flex-col">
  {#if sections[current] }
    <section class="container">
      <h1 class="text-2xl font-semibold mb-10 mt-6 text-purple-700">
          {sections[current]}
        </h1>
    </section>
  {/if}

  <slot />
</main>

<footer class="bg-violet-100 py-2">
  <div class="container">
    <div class="text-xs">
      Challenge by <a class="text-violet-700 underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a class="text-violet-700 underline" href="https://github.com/SuiteMel" target="_blank">SuiteMel</a>.
    </div>
  </div>
</footer>

<style>
main {
  min-height: calc(100vh - 2rem);
}
</style>