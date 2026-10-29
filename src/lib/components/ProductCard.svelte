<script lang="ts">
	import type { Product } from '#lib/types.ts';

	interface Props {
		product: Product;
		onadd: (product: Product) => void;
	}
	let { product, onadd }: Props = $props();
</script>

<div class="shadow-mid card bg-base-100">
	<figure>
		<img
			src={product.image}
			alt={product.name}
			loading="lazy"
			class="aspect-square w-full object-cover"
		/>
	</figure>
	<div class="card-body">
		<div class="badge badge-outline">{product.category}</div>
		<h2 class="card-title">
			<a href="/products/{product.id}" class="link link-hover">{product.name}</a>
		</h2>
		<p>{product.description}</p>
		<div class="item-center card-actions justify-between">
			<span class="text-lg font-bold">${product.price}</span>
			<button class="btn btn-primary btn-sm" onclick={() => onadd(product)}> Add to Cart </button>
		</div>
	</div>
</div>
