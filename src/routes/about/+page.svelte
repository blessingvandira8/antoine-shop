<script lang="ts">
	import PageSection from '#lib/components/PageSection.svelte';
	import { shop } from '#lib/shop.ts';
	import { InformationCircle } from 'svelte-heros-v2';

	const message = encodeURIComponent(`Hello ${shop.name}, I would like to order.`);
	const whatsappLink = `https://wa.me/${shop.whatsapp}?text=${message}`;
</script>

<PageSection>
	{#snippet header()}
		<InformationCircle class="h-8 w-8" />
		<h1>About {shop.name}</h1>
	{/snippet}
	<div class="max-w-2xl space-y-8">
		<section>
			<h2 class="mb-2 text-xl font-semibold">Our story</h2>
			<p>{shop.story}</p>
		</section>
		<section>
			<h2 class="text xl mb-2 font-semibold">Delivery</h2>
			<ul class="list-disc space-y-1 pl-5">
				{#each shop.delivery as line}
					<li>{line}</li>
				{/each}
			</ul>
		</section>
		<section>
			<h2 class="mb-2 text-xl font-semibold">Contact us</h2>
			<p class="mb-3">Questions or special orders? Message us on WhatsApp.</p>
			<a href={whatsappLink} target="_blank" rel="noopener noreferrer" class="btn btn-success">
				Chat on WhatsApp
			</a>
		</section>
	</div>
</PageSection>
