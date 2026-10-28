<script lang="ts">
	import { cart } from '#lib/cart.svelte.ts';
	import { placeOrder } from '#lib/shop.remote.ts';
	import PageSection from '#lib/components/PageSection.svelte';
	import { ShoppingCart, Trash } from 'svelte-heros-v2';

	let name = $state('');
	let phone = $state('');
	let message = $state('');
	let sending = $state(false);

	async function SubmitOrder() {
		sending = true;
		message = '';

		try {
			const result = await placeOrder({
				name,
				phone,
				items: cart.items.map((item) => ({ id: item.id, qty: item.qty }))
			});
			message = `Thank you! Order #${result.orderId} received. Total: $${result.total}`;
			cart.clear();
			name = '';
			phone = '';
		} catch {
			message = `Something went wrong. Check your name and phone number and try again.`;
		} finally {
			sending = false;
		}
	}
</script>

<PageSection>
	{#snippet header()}
		<ShoppingCart class="h-8 w-8" />
		<h1>Your Cart</h1>
	{/snippet}
	{#if message}
		<div class="mb-4 alert alert-info">{message}</div>
	{/if}
	{#if cart.items.length === 0}
		<p>Your cart is empty. <a href="/" class="link">Go shopping</a></p>
	{:else}
		<ul class="mb-6 space-y-2">
			{#each cart.items as item (item.id)}
				<li class="item-center round-box flex justify-between bg-base-100 p-3 shadow">
					<span>{item.emoji} {item.name} x {item.qty}</span>
					<span class="flex items-center gap-3">
						${item.price * item.qty}
						<button
							class="btn btn-ghost btn-sm"
							aria-label="Remove {item.name}"
							onclick={() => cart.remove(item.id)}
						>
							<Trash class="h-4 w-4" />
						</button>
					</span>
				</li>
			{/each}
		</ul>
		<p class="mb-4 text-xl font-bold">Total: ${cart.total}</p>
		<div class="mx-w-sm space-y-3">
			<input class="input w-full" placeholder="Your name" bind:value={name} />
			<input class="input w-full" placeholder="Phone number" bind:value={phone} />
			<button class="btn w-full btn-primary" onclick={SubmitOrder} disabled={sending}>
				{sending ? 'Sending...' : 'Place order'}
			</button>
		</div>
	{/if}
</PageSection>
