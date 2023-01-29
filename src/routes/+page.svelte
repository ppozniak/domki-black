<script lang="ts">
  import type { PageData } from './$types';

  import Hero from '../partials/hero.svelte';

  export const prerender = true;
  export let data: PageData;
</script>

<Hero />