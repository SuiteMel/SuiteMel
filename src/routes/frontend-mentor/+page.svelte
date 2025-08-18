<script>
  let { data } = $props();
  let sections = data.sections;
</script>

<section class="container">
  <h1 class="mt-10 text-5xl font-headings">Frontend Mentor Challenges</h1>

  <p class="mt-5">
    Frontend Mentor challenges help you improve your coding skills by building realistic projects.
  </p>

  <ul class="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
    {#each Object.entries(sections) as [slug, title]}
      <li>
        <a class="block h-full px-4 pt-20 pb-4 text-xl font-medium border rounded-lg text-brand-light bg-linear-to-tr/srgb from-brand-primary from-30% via-brand-tiertiary via-65% to-brand-secondary to-100% group" href="frontend-mentor/{slug}">
          <span class="underline transition duration-300 group-hover:decoration-white decoration-transparent">{title}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>