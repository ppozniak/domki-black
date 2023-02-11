<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class='container'>
  {#if form?.success}
	<p class="text--success">{form.success}</p>
  {/if}
  
  {#if form?.error}
	<p class="text--error">{form.error}</p>
  {/if}
  
  <a href="/#kontakt" class="link">Wróć na stronę główną</a>
</div>