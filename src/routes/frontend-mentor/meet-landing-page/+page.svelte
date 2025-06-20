<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import Grid from '$lib/components/grid.svelte';
    import imgDesktop from '$lib/assets/frontend-mentor/meet-landing-page/image-footer--desktop.jpg';
    import imgTablet from '$lib/assets/frontend-mentor/meet-landing-page/image-footer--tablet.jpg';
    import imgMobile from '$lib/assets/frontend-mentor/meet-landing-page/image-footer--mobile.jpg';

    import photo1 from '$lib/assets/frontend-mentor/meet-landing-page/image-woman-in-videocall.jpg';
    import photo2 from '$lib/assets/frontend-mentor/meet-landing-page/image-women-videochatting.jpg';
    import photo3 from '$lib/assets/frontend-mentor/meet-landing-page/image-men-in-meeting.jpg';
    import photo4 from '$lib/assets/frontend-mentor/meet-landing-page/image-man-texting.jpg';
    const photoCollage = [
      photo1, photo2, photo3, photo4
    ];

    import imgHero from '$lib/assets/frontend-mentor/meet-landing-page/image-hero.png';
    import heroLeft from '$lib/assets/frontend-mentor/meet-landing-page/image-hero-left.png';
    import heroRight from '$lib/assets/frontend-mentor/meet-landing-page/image-hero-right.png';

    import logo from '$lib/assets/frontend-mentor/meet-landing-page/logo.svg';
</script>

<div id="content" class="grid items-center meet-landing-page grow bg-[--white] font-['Red_Hat_Display'] text-style-4 text-center">
  <!-- Grid overlay to compare layout to design, hidden in production -->
  <Grid hidden="1" containerClasses="xl:px-40 md:px-11 xl:gap-8 md:gap-6 gap-4"/>

  <div class="pt-12 xl:pt-20">
    <img src="{logo}" alt="meet logo" class="mx-auto">
  </div>

  <section class="pt-16 pb-8 overflow-hidden">
    <div class="-mx-7 xl:hidden">
      <img src="{imgHero}" alt="" class="mx-auto xl:hidden">
    </div>

    <div class="container xl:flex xl:justify-center xl:gap-8 xl:px-40 md:px-11">
      <div class="self-start hidden pr-24 xl:block"><img src="{heroLeft}" alt="" class="max-w-none"></div>
      
      <div class="mt-12 space-y-6 md:mt-[4.5rem] xl:space-y-8 md:max-w-md self-center shrink-0 xl:my-6">
        <h1 class="text-style-1 text-[--slate-900]">Group Chat for Everyone</h1>
        
        <p class="text-[--slate-600]">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
        
        <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
          <button class="button blue">Download <span>v1.3</span></button>
          <a href="#top" class="button purple">What is it?</a>
        </div>
      </div>

      <div class="self-end hidden pl-24 xl:block"><img src="{heroRight}" alt="" class="max-w-none"></div>
    </div>
  </section>
  
  <section class="pt-8 pb-16">
    <div class="container space-y-16 xl:px-40 md:px-11">
      <span class="mx-auto text-style-5 number">01</span>
      <div class="grid grid-cols-2 gap-4 md:gap-6 xl:gap-8 md:grid-cols-4">
        {#each photoCollage as photo}
          <img src="{photo}" alt="" class="rounded-lg">
        {/each}
      </div>
      <div class="-mx-4">
        <div class="px-4 mx-auto space-y-8 xl:w-1/2 md:w-3/4">
          <h2 class="text-style-3 text-[--cyan-600]">Built for modern use</h2>
          
          <h3 class="text-style-2 text-[--slate-900]">Smarter meetings, all in one place</h3>
          
          <p class="text-[--slate-600]">
            Send messages, share files, show your screen, and record your meetings — all in one 
            workspace. Control who can join with invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <span class="z-20 mx-auto text-style-5 number -mb-7">02</span>
  <section class="py-16 text-[--white] relative z-0">
    <div class="absolute inset-0 bg-[--cyan-600-90]">
      <picture class="">
        <source media="(min-width: 1280px)" srcset="{imgDesktop}" />
        <source media="(min-width: 769px)" srcset="{imgTablet}" />
        <source media="(max-width: 768px)" srcset="{imgMobile}" />
        <img class="relative object-cover object-top w-full h-full -z-10" src="{imgDesktop}" alt="Woman listening to music">
      </picture>
    </div>
    <div class="container relative xl:px-40 md:px-11 xl:text-left">
      <div class="flex flex-wrap -mx-4 gap-y-6">
        <h2 class="w-full px-4 text-style-2 md:mx-auto xl:mx-0 md:w-3/4 xl:w-5/12">Experience more together</h2>
        <p class="w-full px-4 md:mx-auto xl:mx-0 md:w-3/4 xl:w-4/12">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        
        <div class="w-full px-4 md:mx-auto xl:mx-0 md:w-3/4 xl:text-right xl:w-3/12"><button class="button purple">Download <span>v1.3</span></button></div>
      </div>
      </div>
  </section>
</div>

<style>
  .meet-landing-page {
    --cyan-600: #4D96A9;
    --cyan-600-90: rgba(77, 150, 169, 0.9);
    --cyan-400: #71C0D4;
    --cyan-300: #8FE3F9;
    --purple-600: #855FB1;
    --purple-400: #B18BDD;
    --purple-300: #D9B8FF;
    --slate-900: #28283D;
    --slate-600: #87879D;
    --slate-300: #D1D1DF;
    --white: #FAFAFA;
  }

  .text-style-4 {
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 500;
  }

  .text-style-1 {
    font-size: 2.5rem;

    @screen md {
      font-size: 3rem;
    }

    @screen xl {
      font-size: 4rem;
    }
    
    line-height: 1.1;
    font-weight: 900;
  }

  .text-style-2 {
    font-size: 2rem;

    @screen md {
      font-size: 2.25rem;
    }

    @screen xl {
      font-size: 2.5rem;
    }
    
    line-height: 1.1;
    font-weight: 900;
  }

  .text-style-3 {
    font-size: 0.75rem;

    @screen md {
      font-size: 0.875rem;
    }

    @screen xl {
      font-size: 1rem;
    }

    line-height: 1.1;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 900;
  }

  .text-style-5 {
    font-size: 1rem;
    line-height: 1;
    font-weight: 900;
  }

  .number {
    &::before {
      content: "";
      display: block;
      width: 1px;
      height: theme('space.20');
      background-color: var(--slate-300);
      position: absolute;
      bottom: 100%;
    }

    margin-top: theme('space.20');
    display: flex;
    position: relative;
    height: theme('space.14');
    width: theme('space.14');
    border: solid 1px var(--slate-300);
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    color: var(--slate-600);
    background-color: var(--white);
  }

  .button {
    display: inline-block;
    font-size: 1rem;
    line-height: 1;
    font-weight: 900;
    border-radius: 1.75rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    color: var(--white);
    transition: 0.3s;
  }

  .button.purple {
    background-color: var(--purple-600);

    span {
      color: var(--purple-300)
    }

    &:hover {
      background-color: var(--purple-400);
    }
  }

  .button.blue {
    background-color: var(--cyan-600);

    span {
      color: var(--cyan-300)
    }

    &:hover {
      background-color: var(--cyan-400);
    }
  }
</style>