<script>
	import EventsCarousel from '$lib/components/index/EventsCarousel.svelte';
</script>

<div
	class="mini-events-container flex flex-col h-full w-full justify-evenly items-center md:px-20 lg:px-40"
>
	<EventsCarousel />

	<div class="middle-container text-xl lg:text-3xl flex items-center flex-col">
		<!-- <button class="max-w-lg w-full bg-red-500 p-12">EXPLORE OUR EVENTS</button> -->
		<!-- <a class="btn cta">So Click-a-licious</a> -->
		<a
			href="/events"
			class="da-button relative p-4 lg:p-8 max-w-xs lg:max-w-lg text-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 active:opacity-90 inline-flex items-center justify-center gap-3 mx-8 mb-8"
			><span>EXPLORE OUR EVENTS</span> <iconify-icon icon="mdi:arrow-right" /></a
		>
		<!-- <a href="/timeline" class="da-button-2 relative p-4 lg:p-8 max-w-xs lg:max-w-lg text-center bg-gradient-to-r from-purple-500 via-red-500 to-red-900 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 active:opacity-90 inline-flex items-center justify-center gap-3 mx-8"><span>TIMELINE</span> <iconify-icon icon="mdi:arrow-right" /></a> -->
	</div>

	<EventsCarousel alt />
</div>

<style>
	@keyframes move-da-button {
		0%,
		100% {
			background-position: left center;
		}
		50% {
			background-position: right center;
		}
	}

	.da-button {
		background-size: 200% auto;
		animation: move-da-button 10s ease infinite;
	}

	.da-button-2 {
		background-size: 200% auto;
		animation: move-da-button 10s ease infinite;
	}

	.da-button::before {
		background-size: 200% auto;
		animation: move-da-button 10s ease infinite;
		z-index: -1;
		content: '';
		@apply absolute h-full w-full blur-lg opacity-50 p-4 max-w-lg text-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500 rounded-xl transition-all duration-300 scale-105;
	}

	.da-button-2::before {
		background-size: 200% auto;
		animation: move-da-button 10s ease infinite;
		z-index: -1;
		content: '';
		@apply absolute h-full w-full blur-lg opacity-50 p-4 max-w-lg text-center bg-gradient-to-r from-purple-500 via-red-500 to-red-900 rounded-xl transition-all duration-300 scale-105;
	}
</style>
