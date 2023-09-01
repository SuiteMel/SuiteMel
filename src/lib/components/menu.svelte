<script>
  let toggled = false;

  function toggleMenu() {
    toggled = !toggled;
  }

  export function closeMenu() {
    toggled = false;
  }
</script>

<nav class="absolute min-w-fit w-1/6 -translate-x-full transition duration-300" class:toggled>
  <button on:click={toggleMenu} class="absolute top-0 left-full border-brand-primary rounded-br border-r-2 border-b-2 p-1 bg-white -ml-0.5 h-10 w-10">
    <img class="" aria-hidden="true" src="/icon-big.png" alt="SuiteMel menu icon">
    <span class="sr-only">Menu</span>
  </button>
  <div class="bg-white py-8 px-6 rounded-br border-brand-primary border-r-2 border-b-2">
    <ul class="space-y-3">
      <li>
        <a class="link-item" href="/">Home</a>
      </li>
      
      <li>
        <a class="link-item" href="/frontend-mentor">Frontend Mentor Challenges</a>
      </li>
    </ul>
  </div>
</nav>

<style>
  .link-item {
    text-decoration: underline;
    text-underline-offset: 0.25rem;
    text-decoration-thickness: 2px;
    text-decoration-color: theme('colors.brand.secondary');
    font-weight: 500;

    &:hover {
      text-decoration-color: transparent;
    }
  }

  .toggled {
    transform: translateX(0);
  }
</style>