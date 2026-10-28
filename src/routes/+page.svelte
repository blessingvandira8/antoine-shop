<script lang="ts">
	import PageSection from '#lib/components/PageSection.svelte';
	import { ShoppingBag } from 'svelte-heros-v2';
	import ProductCard from '#lib/components/ProductCard.svelte';
	import { cart } from '#lib/cart.svelte.ts';
	import type { PageProps } from './$types';
	import type { Product } from '#lib/types.ts';
	import { products } from '#lib/data/products.ts';

	let { data }: PageProps = $props();

	function addToCart(product: Product) {
		cart.add(product);
	}
</script>

<PageSection>
	{#snippet header()}
		<ShoppingBag class="h-8 w-8" />
		<h1>Our Products</h1>
	{/snippet}
	<div class="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.products as product (product.id)}
			<ProductCard {product} onadd={addToCart} />
		{/each}
	</div>
</PageSection>
