<script lang="ts">
	import type { Product } from '#lib/types.ts';
	import StarRating from './StarRating.svelte';

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
			<div class="item-center card-actions justify-between">
				<div>
					<span class="text-lg font-bold">${product.price}</span>
					<StarRating rating={product.rating} />
				</div>
				<button
					class="btn btn-primary btn-sm"
					disabled={product.stock === 0}
					onclick={() => onadd(product)}
				>
					{product.stock === 0 ? `Sold out` : `Add to Cart`}
				</button>
			</div>
		</div>
	</div>
</div>
