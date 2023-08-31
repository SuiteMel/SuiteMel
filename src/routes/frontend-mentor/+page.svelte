<script>
  export let data;
  let sections = data.sections;
</script>

<section class="container">
  <h1 class="font-headings text-5xl mt-10">Frontend Mentor Challenges</h1>

  <p class="mt-5">
    Frontend Mentor challenges help you improve your coding skills by building realistic projects.
  </p>

  <ul class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 mt-10">
    {#each Object.entries(sections) as [slug, title]}
      <li>
        <a class="rounded-lg border px-4 pb-4 pt-20 block text-xl font-medium text-brand-light bg-gradient-to-tr from-brand-primary from-30% via-brand-tiertiary to-brand-secondary group h-full" href="frontend-mentor/{slug}">
          <span class="group-hover:decoration-white underline decoration-transparent duration-300 transition">{title}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>