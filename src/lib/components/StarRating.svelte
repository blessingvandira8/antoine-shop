<script lang="ts">
	interface Props {
		rating: number;
	}
	let { rating }: Props = $props();

	const stars = [1, 2, 3, 4, 5];
	const percent = $derived(Math.min(100, Math.max(0, (rating / 5) * 100)));
</script>

<div class="items center flex gap-2">
	<div class="relative inline-flex" role="img" aria-label="Rated{rating} out of 5">
		<div class="flex">
			{#each stars as star (star)}
				<div class="mask h-5 w-5 shrink-0 bg-gray-300 mask-star-2"></div>
			{/each}
		</div>
		<div class="insert-y-0 absolute left-0 overflow-hidden" style="width: {percent}%">
			<div class="flex">
				{#each stars as star (star)}
					<div class="mask h-5 w-5 shrink-0 bg-orange-400 mask-star-2"></div>
				{/each}
			</div>
		</div>
	</div>
	<span class="text-sm">{rating}</span>
</div>
