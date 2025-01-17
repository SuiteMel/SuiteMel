<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700" rel="stylesheet">
</svelte:head>

<script>
  import avatar from '$lib/assets/frontend-mentor/social-links-avatar.jpeg';
  const name = 'Melissa Waltner';
  const location = 'Kansas City, Missouri';
  const tagline = '"Passionate about web development."';

  const socials = [
    {
      'name': 'GitHub',
      'url': 'https://github.com/SuiteMel'
    },
    {
      'name': 'Frontend Mentor',
      'url': 'https://www.frontendmentor.io/profile/SuiteMel'
    },
    {
      'name': 'LinkedIn',
      'url': 'https://linkedin.com/in/melissawaltner/'
    }
  ]
</script>

<section class="social-links-profile grow py-20 px-6 grid items-center bg-[--black] text-white font-['Inter']">
  <div class="w-full p-6 mx-auto text-center sm:p-10 box rounded-xl">
    <div class="picture rounded-full mx-auto mb-6 bg-[--gray] overflow-hidden">
      <img src="/icon-big.png" alt="" class="object-cover object-center w-full h-full">
    </div>

    <h2 class="text-2xl">{name}</h2>
    <p class="text-[--green] text-sm font-bold mt-1">{location}</p>
    <p class="my-6">{tagline}</p>

    {#each socials as social}
      <a class="block p-3 mt-4 text-sm font-bold duration-200 rounded-lg link" href="{social.url}" target="_blank">{social.name}</a>
    {/each}
  </div>

</section>

<style>
  .social-links-profile {
    --black: #141414;
    --dark-gray: #1F1F1F;
    --gray: #333333;
    --green: #C4F82A;
  }

  .box {
    background-color: var(--dark-gray);
    max-width: 24rem;
  }

  .picture {
    width: 5.5rem;
    height: 5.5rem;
  }

  .link {
    background-color: var(--gray);

    &:hover {
      background-color: var(--green);
      color: var(--gray);
    }
  }
</style>