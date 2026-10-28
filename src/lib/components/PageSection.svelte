<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		header: Snippet;
		children: Snippet;
	}
	let { header, children }: Props = $props();
</script>

<section class="p-6">
	<div class="mb-4 flex items-center gap-2 text-3xl font-bold">
		{@render header()}
	</div>
	{@render children()}
</section>
