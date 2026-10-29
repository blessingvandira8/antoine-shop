<script lang="ts">
	import { shop, whatsappLink } from '#lib/shop.ts';

	const year = new Date().getFullYear();
	const link = whatsappLink(`Hello ${shop.name}, I have a question.`);
</script>

<footer class="footer footer-center bg-base-200 p-6 text-base-content">
	<nav class="flex flex-wrap justify-center gap-4">
		<a href="/" class="link link-hover">Shop</a>
		<a href="/about" class="link link-hover">About</a>
		<a href={link} target="_blank" rel="noopener noreferrer" class="link link-hover">WhatsApp</a>
	</nav>

	<aside>
		<p>&copy {year} {shop.name}, {shop.location}. All rights reserved.</p>
		<p class="text-sm">Designed &amp; developed by Blessing</p>
	</aside>
</footer>
