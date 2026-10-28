<script lang="ts">
	import { cart } from '#lib/cart.svelte.ts';
	import type { PageProps } from './$types';
	import { ArrowLeft } from 'svelte-heros-v2';

	let { data }: PageProps = $props();
</script>

<div class="mx-auto max-w-xl p-6">
	<a href="/" class="btn mb-4 btn-ghost btn-sm"> <ArrowLeft class="h-4 w-4" />Back to products</a>
	<div class="md card bg-base-100 shadow">
		<figure class="bg-base-200-py-16 text-8xl">{data.product.emoji}</figure>
		<div class="card-body">
			<div class="badge badge-outline">{data.product.category}</div>
			<h1 class="card-title text-3xl">{data.product.name}</h1>
			<p>{data.product.description}</p>
			<div class="card-action item-center justify-between">
				<span class="text-2xl font-bold">${data.product.price}</span>
				<button class="btn btn-primary" onclick={() => cart.add(data.product)}>Add to Cart</button>
			</div>
		</div>
	</div>
</div>
