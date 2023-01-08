<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	// import 'swiper/css/mousewheel';

	// import required modules
	import { Pagination, Mousewheel, Keyboard, EffectCoverflow, EffectCreative } from 'swiper';
	import type { PaginationOptions } from 'swiper/types';
	import EventChangeModal from '$lib/components/EventChangeModal.svelte';
	import { onMount, SvelteComponent } from 'svelte';
	import { tweened } from 'svelte/motion';
	import type Sketch from '$lib/components/DNA/Sketch';


	let sketch: Sketch;
	const duration = tweened(0, { duration: 1000 });
	
	let slide_index = 0;
	let _Swiper: Swiper;


	function onProgress(e: CustomEvent<[swiper: any, progress: number]>) {
		const [_, progress] = e.detail;
		slide_index = Math.trunc(progress * PAGES.length - 0.001);
		duration.set(progress + 0.5);
		setTimeout(() => {
			duration.set(0);
		}, 2000)
	}
	function changePage(index: number) {
		if (_Swiper) _Swiper.slideTo(index, 1000, true);
	}
	function onSwiper(e: any) {
		const [swiper] = e.detail as any as [Swiper];
		_Swiper = swiper;
	}

	const PAGES = [
		{ name: 'Home', component: "Home" },
		{ name: 'About', component: 'About' },
		{ name: 'Contact', component: 'Contact' },
		{ name: 'Services', component: 'Services' }
	];

	let pagination: PaginationOptions = {
		type: 'progressbar',
		progressbarOpposite: true
	};
	onMount(async () => {
		const bg = await import('$lib/components/DNA/Sketch');
		const canvas = document.getElementById('dna-bg');
		sketch = new bg.default(canvas);
		sketch.loadObjects();
		duration.set(2);
		function animate() {
			if (sketch) {
				sketch.duration += $duration
			}
			requestAnimationFrame(animate);
		}
		animate();
	});
</script>

<div id="dna-bg" class="fixed h-screen w-screen -z-50 bg-white" />

<Swiper
	class="swiper-v"
	direction={'vertical'}
	spaceBetween={50}
	effect={'coverflow'}
	{pagination}
	mousewheel={{ forceToAxis: true }}
	modules={[Pagination, Mousewheel, Keyboard, EffectCoverflow]}
	coverflowEffect={{
		rotate: 10,
		stretch: 0,
		depth: 10,
		modifier: 1,
		slideShadows: false
	}}
	on:progress={onProgress}
	on:swiper={onSwiper}
>
	{#each PAGES as page}
		<SwiperSlide>
			{#if typeof page.component === 'string'}
				{page.component}
			{:else}
				<svelte:component this={page.component} />
			{/if}
		</SwiperSlide>
	{/each}
</Swiper>

<div class="pagination-container absolute md:visible left-10 top-1/2 flex flex-col gap-4 z-50">
	{#each PAGES as page, i}
		<span
			on:click={() => {
				changePage(i);
			}}
			class="uppercase mono cursor-pointer {i == slide_index ? 'text-white' : ''}">{page.name}</span
		>
	{/each}
</div>
