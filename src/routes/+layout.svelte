<script>
  import "../app.css";
  import { onMount } from "svelte";
  import Menu from "../lib/components/menu.svelte"

  onMount(() => {
    Menu.closeMenu(); // Call a function to close the menu
    console.log( 'mounted' );
  });
</script>

<Menu />

<slot />