<script>
  import "../app.css";
  import Menu from "$lib/components/menu.svelte";
  
  let { children } = $props();
</script>

<Menu />

{@render children?.()}