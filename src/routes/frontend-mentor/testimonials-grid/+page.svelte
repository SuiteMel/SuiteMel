<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import Icon from '$lib/components/icon.svelte';
  const images = import.meta.glob(
		'$lib/assets/frontend-mentor/testimonials-grid/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
		}
	);

  const testimonials = [
    {
      image: 'daniel',
      name: 'Daniel Clifford',
      title: 'Verified Graduate',
      heading: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
      content: 'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
      classes: ''
    },
    {
      image: 'jonathan',
      name: 'Jonathan Walters',
      title: 'Verified Graduate',
      heading: 'The team was very supportive and kept me motivated',
      content: 'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.',
      classes: 'card--gray'
    },
    {
      image: 'jeanette',
      name: 'Jeanette Harmon',
      title: 'Verified Graduate',
      heading: 'An overall wonderful and rewarding experience',
      content: 'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.',
      classes: ''
    },
    {
      image: 'patrick',
      name: 'Patrick Abrams',
      title: 'Verified Graduate',
      heading: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
      content: 'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.',
      classes: 'card--dark-gray'
    },
    {
      image: 'kira',
      name: 'Kira Whittle',
      title: 'Verified Graduate',
      heading: 'Such a life-changing experience. Highly recommended!',
      content: 'Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!',
      classes: ''
    }
  ];
</script>
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
  <symbol id="icon-quotation" viewBox="0 0 33 32">
  <path fill="#a775f1" style="fill: var(--color1, #a775f1)" d="M32.627 32v-13.262h-6.239c0-1.842 0.216-3.508 0.649-4.999s1.073-2.914 1.922-4.27c0.848-1.357 2.071-2.487 3.668-3.391v-6.078c-3.061 1.34-5.557 3.098-7.487 5.275s-3.361 4.563-4.292 7.159c-0.932 2.595-1.398 6.372-1.398 11.328v8.238h13.176zM13.176 32v-13.262h-6.239c0-1.842 0.216-3.508 0.649-4.999s1.073-2.914 1.922-4.27c0.848-1.357 2.071-2.487 3.668-3.391v-6.078c-3.028 1.34-5.515 3.098-7.462 5.275s-3.386 4.563-4.317 7.159c-0.932 2.595-1.398 6.372-1.398 11.328v8.238h13.176z"></path>
  </symbol>
  </defs>
</svg>
  
<section id="content" class="grid items-center py-20 testimonials-grid grow bg-[--light-gray] font-['Barlow_Semi_Condensed'] text-[0.8125rem] font-medium">
  <div class="grid px-6 mx-auto gap-y-6 gap-x-8 cards">
    {#each testimonials as card, i}
    <div class="px-8 pt-6 pb-8 bg-white rounded-lg relative z-0 card {card.classes}">
        {#if i === 0}
        <Icon name="quotation" class="absolute right-0 top-0 md:mr-20 mr-6 w-[6.5rem] h-[6.5rem] -z-10" />
        {/if}
        <div class="flex gap-4 mb-4">
          <img src="{images['/src/lib/assets/frontend-mentor/testimonials-grid/image-'+card.image+'.jpg'].default}" alt="Picture of {card.name}" class="rounded-full h-7 w-7">
          <div class="leading-none">
            <p class="mb-1">{card.name}</p>
            <p class="text-[0.6875rem] opacity-50">{card.title}</p>
          </div>
        </div>

        <p class="mb-4 text-xl font-semibold">{card.heading}</p>
        <p class="opacity-70">“{card.content}”</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .testimonials-grid {
    --light-gray: #ECF2F8;
    --gray: #48556A;
    --dark-gray: #19202D;
    --purple: #733FC8;
    --light-purple: #A775F1;
  }

  .cards {
    max-width: 69.375rem;

    & > :nth-child(1) {
      background-color: var(--purple);
      color: white;

      img {
        outline: 2px solid var(--light-purple);
      }
    }

    & > :nth-child(2) {
      background-color: var(--gray);
      color: white;
    }

    & > :nth-child(4) {
      background-color: var(--dark-gray);
      color: white;

      img {
        outline: 2px solid var(--purple);
      }
    }
    
    @screen md {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "a b" "c d" "e e";
      
      & > :nth-child(1) {
        grid-area: a;
      }
  
      & > :nth-child(2) {
        grid-area: b;
      }
  
      & > :nth-child(3) {
        grid-area: c;
      }
  
      & > :nth-child(4) {
        grid-area: d;
      }
  
      & > :nth-child(5) {
        grid-area: e;
      }
    }

    @screen lg {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas: "a a b e" "c d d e";
    }
  }

  .card {
    box-shadow: 40px 60px 50px -47px rgb(from var(--gray) r g b / 25%);
  }
</style>