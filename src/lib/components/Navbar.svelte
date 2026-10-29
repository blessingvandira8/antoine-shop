<script lang="ts">
	import { cart } from '#lib/cart.svelte.ts';
	import { ShoppingCart } from 'svelte-heros-v2';
</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Antoine Shop</a>
		<a href="/about" class="btn btn-ghost">About</a>
	</div>
	<div class="flex-none items-center gap-3">
		<a href="/cart" class="ga-3 btn flex-none items-center btn-ghost"
			><ShoppingCart class="h-6 w-6" /></a
		>

		<span class="badge badge-primary">{cart.count} items</span>
		<span class="font-semibold">${cart.total}</span>
	</div>
</div>
