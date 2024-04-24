<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import image from '$lib/assets/frontend-mentor/illustration-article.svg';
  import avatar from '$lib/assets/frontend-mentor/image-blog-avatar.webp';
</script>

<section class="blog-preview-card font-['Figtree'] bg-[--yellow] grow py-20 grid items-center text-[--black] font-medium">
  <div class="container">
    <a href="./blog-preview-card" class="contents">
      <article class="group max-w-sm bg-white rounded-[1.25rem] border border-[--black] mx-auto p-6 shadow-[8px_8px_0_0] hover:shadow-[16px_16px_0_0] duration-300">
        <img src="{image}" alt="" class="rounded-[0.625rem] mb-6">
        
        <p class="bg-[--yellow] font-extrabold w-fit px-3 py-1 rounded mb-3">Learning</p>
  
        <p class="mb-3 text-xs md:text-sm">Published 21 Dec 2023</p>
      
        <h2 class="mb-3 text-xl font-extrabold md:text-2xl group-hover:text-[--yellow] duration-300">HTML & CSS foundations</h2>
      
        <p class="text-[--gray] md:text-base text-sm">These languages are the backbone of every website, defining structure, content, and presentation.</p>
      
        <div class="flex items-center mt-6 text-xs font-extrabold md:text-sm gap-x-3">
          <img src="{avatar}" alt="" class="w-8 h-8">
          <p>Greg Hooper</p>
        </div>
      </article>
    </a>
  </div>
</section>

<style>
  .blog-preview-card {
    --yellow: #F4D04E;
    --black: #111111;
    --gray: #7F7F7F;
  }
</style>