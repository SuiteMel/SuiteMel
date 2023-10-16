<script>
  import { fade } from 'svelte/transition';
  import { enhance } from '$app/forms';
  export let form;

  import star from '$lib/assets/frontend-mentor/icon-star.svg';
  import thankYou from '$lib/assets/frontend-mentor/illustration-thank-you.svg';
</script>

<section class="bg-[color:var(--very-dark-blue)] grow text-white font-['Overpass'] flex flex-col px-6">
  <div class="max-w-[26rem] min-h-[26rem] mx-auto my-auto box px-6 pt-6 pb-8 md:p-8 rounded-[1.875rem] grid">
    <!-- Rating state start -->
    {#if !form?.success}
      <div transition:fade class="row-start-1 col-start-1 my-auto">
        <div class="h-10 w-10 md:h-12 md:w-12 bg-[--dark-blue] flex justify-center items-center rounded-full mb-7">
          <img src="{star}" alt="star">
        </div>

        <p class="text-2xl md:text-[1.75rem] font-bold mb-1.5">
          How did we do?
        </p>
      
        <p class="text-sm md:text-[0.9375rem] leading-relaxed text-[--light-gray]">
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>
      
        <form class="mt-6" method="POST" use:enhance>
          {#if form?.missing}<p class="mb-3 text-sm text-red-500">Please select a rating.</p>{/if}
          <fieldset class="flex justify-between">
            {#each {length: 5} as _, i }
              <div>
                <input type="radio" name="rating" id="rating-{i+1}" value="{i+1}" class="peer sr-only">
                <label class="flex items-center justify-center w-[2.625rem] h-[2.625rem] md:w-[3.1875rem] md:h-[3.1875rem] bg-[--dark-blue] rounded-full text-[--medium-gray] peer-checked:bg-[--medium-gray] peer-checked:text-white hover:bg-[--orange] hover:text-white hover:cursor-pointer text-sm md:text-base" for="rating-{i+1}">{i+1}</label>
              </div>
            {/each}
          </fieldset>
        
          <button class="bg-[--orange] uppercase text-sm md:text-[0.9375rem] tracking-[0.125rem] font-bold py-2.5 px-8 block w-full rounded-3xl mt-8 leading-[normal] hover:bg-white hover:text-[--orange]">Submit</button>
        </form>
      
      </div>
    {:else if form?.success}
      <div transition:fade class="text-center row-start-1 col-start-1 my-auto">
        <img src="{thankYou}" alt="" class="mb-6 md:mb-8 mx-auto">

        <p class="mb-6 md:mb-8 bg-[--dark-blue] rounded-3xl text-[--orange] py-2 md:pt-3 md:pb-2 px-3 md:px-5 text-sm md:leading-none md:text-[0.9375rem] w-fit mx-auto">You selected {form?.rating} out of 5</p>
      
        <p class="text-2xl md:text-[1.75rem] font-bold mb-1.5">Thank you!</p>
      
        <p class="text-sm md:text-[0.9375rem] leading-relaxed text-[--light-gray]">
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </p>
      </div>
    {/if}
  
    <!-- Thank you state end -->
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');

  :root {
    --orange: #FC7614;
    --very-dark-blue: #131518;
    --dark-blue: #262E38;
    --medium-gray: #7C8798;
    --light-gray: #969FAD;
    --black-gradient: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
  }

  .box {
    background: var(--black-gradient);
  }

</style>