<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { onMount } from "svelte";
  import Menu from "../lib/components/menu.svelte"

  onMount(() => {
    $page.subscribe((newPage) => {
      Menu.closeMenu(); // Call a function to close the menu
    });
  });
</script>

<Menu />

<slot />