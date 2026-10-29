<script lang="ts">
	import PageSection from '#lib/components/PageSection.svelte';
	import { ShoppingBag } from 'svelte-heros-v2';
	import ProductCard from '#lib/components/ProductCard.svelte';
	import { cart } from '#lib/cart.svelte.ts';
	import type { PageProps } from './$types';
	import type { Product } from '#lib/types.ts';
	import { products } from '#lib/data/products.ts';

	let { data }: PageProps = $props();
	let search = $state('');
	let selectedCategory = $state('All');
	const categories = $derived(['All', ...new Set(data.products.map((p) => p.category))]);
	const filtered = $derived(
		data.products.filter((p) => {
			const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
			const matchesSearch = p.name.toLowerCase().includes(search.trim().toLowerCase());
			return matchesCategory && matchesSearch;
		})
	);

	function addToCart(product: Product) {
		cart.add(product);
	}

	function clearFilters() {
		search = '';
		selectedCategory = 'All';
	}
</script>

<PageSection>
	{#snippet header()}
		<ShoppingBag class="h-8 w-8" />
		<h1>Our Products</h1>
	{/snippet}
	<div class="mb-6 space-y-4">
		<input
			type="search"
			class="input w-full max-w-md"
			placeholder="Search products..."
			bind:value={search}
		/>
		<div class="flex flex-wrap gap-2">
			{#each categories as category (category)}
				<button
					class="btn btn-sm {selectedCategory === category ? 'btn-primary' : 'btn-outline'}"
					onclick={() => (selectedCategory = category)}
				>
					{category}
				</button>
			{/each}
		</div>
		<p class="text-sm">Showing {filtered.length} of {data.products.length} products</p>
	</div>
	{#if filtered.length === 0}
		<div class="alert">
			<span>No products match your search.</span>
			<button class="btn btn-sm" onclick={clearFilters}>clear filters</button>
		</div>
	{:else}
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as product (product.id)}
				<ProductCard {product} onadd={addToCart} />
			{/each}
		</div>
	{/if}
</PageSection>
