<script>
  import { page, navigating } from '$app/stores';
  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const closeMenu = () => {
    isOpen = false;
  }

  function clickOutside(node) {
  
    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('click_outside', node)
        )
      }
    }

    document.addEventListener('click', handleClick, true);
    
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    }
  }
</script>

<nav class="absolute min-w-fit w-1/6 -translate-x-full transition duration-300" class:isOpen use:clickOutside on:click_outside={closeMenu}>
  <button on:click={toggleMenu} class="absolute top-0 left-full border-brand-primary rounded-br border-r-2 border-b-2 p-1 bg-white -ml-0.5 h-10 w-10">
    <img class="" aria-hidden="true" src="/icon-big.png" alt="SuiteMel menu icon">
    <span class="sr-only">Menu</span>
  </button>
  
  <div class="bg-white py-8 px-6 rounded-br border-brand-primary border-r-2 border-b-2">
    <ul class="space-y-3">
      <li>
        <a class="link-item" on:click={toggleMenu} href="/">Home</a>
      </li>
      
      <li>
        <a class="link-item" on:click={toggleMenu} href="/frontend-mentor">Frontend Mentor Challenges</a>
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

    &:focus {
      outline: theme('colors.brand.secondary') solid 1px ;
    }
  }

  .isOpen {
    transform: translateX(0);
  }
</style>