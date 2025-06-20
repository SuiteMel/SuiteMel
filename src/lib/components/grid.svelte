<script>
  export let containerClasses = "";
  export let hidden = false;
  console.log(hidden);
</script>

{#if !hidden}
<div class="fixed inset-x-0 top-0 z-50 h-screen">
	<div class="container grid xl:grid-cols-12 md:grid-cols-8 grid-cols-6 {containerClasses}">
    {#each {length: 6} as _, i}
      <div class="h-screen bg-red-300/20" />
    {/each}
    {#each {length: 2} as _, i}
      <div class="hidden h-screen md:block bg-red-300/20" />
    {/each}
    {#each {length: 4} as _, i}
      <div class="hidden h-screen xl:block bg-red-300/20" />
    {/each}
  </div>
</div>
{/if}