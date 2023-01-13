<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	// import 'swiper/css/mousewheel';

	// import required modules
	import { Pagination, Mousewheel, Keyboard } from 'swiper';
	import type { PaginationOptions } from 'swiper/types';
	import Loader from '$lib/components/Loader.svelte';
	import { onMount, SvelteComponent } from 'svelte';
	import { tweened } from 'svelte/motion';
	import type Sketch from '$lib/components/DNA/Sketch';
	import Nav from '$lib/components/Nav.svelte';

	let sketch: Sketch;
	const duration = tweened(0, { duration: 1000 });

	let slide_index = 0;
	let _Swiper: Swiper;

	function onProgress(e: CustomEvent<[swiper: any, progress: number]>) {
		const [_, progress] = e.detail;
		slide_index = Math.trunc(progress * PAGES.length - 0.001);
		duration.set(0.5);
		setTimeout(() => {
			duration.set(0);
		}, 1000);
	}
	function changePage(index: number) {
		if (_Swiper) _Swiper.slideTo(index, 1000, true);
	}
	function onSwiper(e: any) {
		const [swiper] = e.detail as any as [Swiper];
		_Swiper = swiper;
	}

	const PAGES: { name: string; component: string | typeof SvelteComponent }[] = [
		{ name: 'Home', component: 'Home' },
		{ name: 'Events', component: 'Mini Events' },
		{ name: 'About Us', component: 'About Us' },
		{ name: 'Sponsors', component: 'Sponsors' },
		{ name: 'Contact Us', component: 'Contact Us' },
		{ name: 'Sitemap', component: 'Footer' }
	];

	let pagination: PaginationOptions = {
		type: 'progressbar',
		progressbarOpposite: true
	};

	let loaded = false;
	onMount(async () => {
		const bg = await import('$lib/components/DNA/Sketch');
		const canvas = document.getElementById('dna-bg') ?? document.createElement('canvas');
		sketch = new bg.default(canvas);
		sketch.loadObjects();
		duration.set(2);
		setTimeout(() => {
			duration.set(0);
		}, 2000);
		function animate() {
			if (sketch) {
				sketch.duration += $duration;
			}
			requestAnimationFrame(animate);
		}
		animate();

		setTimeout(() => {
			loaded = true;
		}, 500);
	});
</script>

{#if !loaded}
	<Loader />
{:else}
	<div
		class="pagination-container absolute md:visible left-4 md:left-10 top-1/2 flex flex-col gap-1 md:gap-4 z-50"
	>
		{#each PAGES as page, i}
			<span
				on:click={() => {
					changePage(i);
				}}
				class="uppercase mono cursor-pointer text-xs md:text-base {i == slide_index
					? 'text-white'
					: ''}">{page.name}</span
			>
		{/each}
	</div>
{/if}

<div id="dna-bg" class="fixed h-screen w-screen -z-50 bg-black" />
<Nav />
<Swiper
	class="swiper-v"
	direction={'vertical'}
	spaceBetween={0}
	{pagination}
	mousewheel={{ forceToAxis: true }}
	modules={[Pagination, Mousewheel, Keyboard]}
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
