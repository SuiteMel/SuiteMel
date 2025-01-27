<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Young+Serif&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import image from '$lib/assets/frontend-mentor/image-omelette.jpeg';
  const recipe = {
    photo: {
      src: image,
      alt: 'Image of an omelette on a plate stuffed with spinach, dill, mushroom, cheese, salmon and other fillings. Served with a red pepper hummus on the side.'
    },
    name: 'Simple Omelette Recipe',
    description: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
    time: {
      'Total': 'Approximately 10 minutes',
      'Preparation': '5 minutes',
      'Cooking': '5 minutes'
    },
    ingredients: [
      '2-3 large eggs',
      'Salt, to taste',
      'Pepper, to taste',
      '1 tablespoon of butter or oil',
      'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
    ],
    instructions: {
      'Beat the eggs' : 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
      'Heat the pan': 'Place a non-stick frying pan over medium heat and add butter or oil.',
      'Cook the omelette': 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
      'Add fillings (optional)': 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
      'Fold and serve': 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
      'Enjoy': 'Serve hot, with additional salt and pepper if needed.',
    },
    nutrition: {
      'disclaimer': 'The table below shows nutritional values per serving without the additional fillings.',
      'values': {
        'Calories': '277kcal',
        'Carbs': '0g',
        'Protein': '20g',
        'Fat': '22g'
      }
    }
  }
</script>

<section class="recipe-page grid items-center grow md:py-20 font-['Outfit'] bg-white md:bg-[--stone-light] text-[--stone-medium]">
  <div class="w-full px-8 pb-10 mx-auto bg-white md:p-10 rounded-3xl box">
    <div class="-mx-8 md:mx-0">
      <img class="md:rounded-xl" src="{recipe.photo.src}" alt="{recipe.photo.alt}">
    </div>
    
    <h2 class="hdg-1 text-[--stone-dark] mt-10">{recipe.name}</h2>
    <p class="mt-6">{recipe.description}</p>

    <div class="bg-[--rose-light] p-6 my-8 rounded-xl">
      <h3 class="mb-4 hdg-3 text-[--rose-dark]">Preparation time</h3>
      <ul class="ml-2 pl-4 space-y-2 list-disc text-[--rose-dark]">
        {#each Object.entries(recipe.time) as [type, value]}
          <li class="pl-4"><p class="text-[--stone-medium]"><span class="font-bold">{type}</span>: {value}</p></li>
        {/each}
      </ul>
    </div>

    <h3 class="hdg-2 text-[--brown] mb-6">Ingredients</h3>
    <ul class="ml-2 pl-4 space-y-2 list-disc text-[--brown] border-b border-[--stone] mb-8 pb-8">
      {#each Object.entries(recipe.ingredients) as [key, ingredient]}
        <li class="pl-4"><p class="text-[--stone-medium]">{ingredient}</p></li>
      {/each}
    </ul>

    <h3 class="hdg-2 text-[--brown] mb-6">Instructions</h3>
    <ol class="ml-2 pl-4 list-decimal space-y-2 text-[--brown] font-bold border-b border-[--stone] mb-8 pb-8">
      {#each Object.entries(recipe.instructions) as [intro, instruction]}
        <li class="pl-4"><p class="text-[--stone-medium]">{intro}<span class="font-normal">: {instruction}</span></p></li>
      {/each}
    </ol>

    <h3 class="hdg-2 text-[--brown] mb-6">Nutrition</h3>
    <p class="my-6">{recipe.nutrition.disclaimer}</p>
    <ul class="divide-y divide-[--stone] -mb-3">
      {#each Object.entries(recipe.nutrition.values) as [type, value]}
        <li class="px-8">
          <p class="grid grid-cols-2 my-3 gap-x-4">
            <span class="">{type}</span>
            <span class="font-bold text-[--brown]">{value}</span>
          </p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .recipe-page {
    --rose-dark: #7A284E;
    --rose-light: #FFF7FB;
    --stone-dark: #312E2C;
    --stone-medium: #5F564D;
    --stone: #E3DDD7;
    --stone-light: #F3E5D7;
    --brown: #854632;
  }

  .hdg-1 {
    font-size: 2.25rem;
    line-height: 1;
    font-family: 'Young Serif';
    
    @screen md {
      font-size: 2.5rem;
    }
  }

  .hdg-2 {
    font-size: 1.75rem;
    line-height: 1;
    font-family: 'Young Serif';
  }

  .hdg-3 {
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 600;
  }

  .box {
    max-width: 46rem;
  }
</style>