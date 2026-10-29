<script lang="ts">
	import { cart } from '#lib/cart.svelte.ts';
	import StarRating from '#lib/components/StarRating.svelte';
	import type { PageProps } from './$types';
	import { ArrowLeft } from 'svelte-heros-v2';

	let { data }: PageProps = $props();
</script>

<div class="mx-auto max-w-xl p-6">
	<a href="/" class="btn mb-4 btn-ghost btn-sm"> <ArrowLeft class="h-4 w-4" />Back to products</a>
	<div class="md card bg-base-100 shadow">
		<figure>
			<img
				src={data.product.image}
				alt={data.product.name}
				class="aspect-square w-full object-cover"
			/>
		</figure>
		<div class="card-body">
			<div class="badge badge-outline">{data.product.category}</div>
			<h1 class="card-title text-3xl">{data.product.name}</h1>
			<p>{data.product.description}</p>
			<div class="flex items-center gap-2">
				<StarRating rating={data.product.rating} />
				{#if data.product.stock === 0}
					<span class="badge badge-error">Sold Out</span>
				{:else if data.product.stock <= 5}
					<span class="badge badge-warning">Only {data.product.stock} left</span>
				{:else}
					<span class="badge badge-success">In stock</span>
				{/if}
			</div>
			<div>
				<p class="mb-1 font-semibold">Colors</p>
				<div class="flex flex-wrap gap-2">
					{#each data.product.colors as color}
						<span class="badge badge-outline">{color}</span>
					{/each}
				</div>
			</div>
			<div class="card-action item-center justify-between">
				<span class="text-2xl font-bold">${data.product.price}</span>
				<button
					class="btn btn-primary"
					disabled={data.product.stock === 0}
					onclick={() => cart.add(data.product)}
				>
					{data.product.stock === 0 ? `Sold out` : `Add to Cart`}
				</button>
			</div>
		</div>
	</div>
</div>
