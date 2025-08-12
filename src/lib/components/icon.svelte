<script>
  let { ...props } = $props();
</script>

<svg class="icon icon-{props.name} {props.class}" viewBox="0 0 32 32">
  <use xlink:href={`#icon-${props.name}`} />
</svg>