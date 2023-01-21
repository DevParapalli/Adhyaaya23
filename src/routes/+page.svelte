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
	// import Nav from '$lib/components/Nav.svelte';

	import Home from '$lib/components/index/Home.svelte';
	import Events from '$lib/components/index/Events.svelte';
	import ContactUs from '$lib/components/index/ContactUs.svelte';
	import AboutUs from '$lib/components/index/AboutUs.svelte';
	import Sponsors from '$lib/components/index/Sponsors.svelte';
	import Footer from '$lib/components/index/Footer.svelte';

	import {cubicInOut} from 'svelte/easing';
	import {hasScrolled} from '$lib/stores/UI';
	
	let sketch: Sketch;
	const duration = tweened(0, { duration: 1500});

	let slide_index = 0;
	let _Swiper: Swiper;

	// const scrollPosition = tweened(0.25, { duration: 1500, easing: cubicInOut });

	function onProgress(e: CustomEvent<[swiper: any, progress: number]>) {
		const [_, progress] = e.detail;
		slide_index = Math.trunc(progress * PAGES.length - 0.001); 
		if (slide_index >= 1) {
			hasScrolled.set(true);
		}
		duration.set(0.5);
		setTimeout(() => {
			duration.set(0);
		}, 1000);
		// scrollPosition.set(scrollMapping(progress));
	}
	function changePage(index: number) {
		if (_Swiper) _Swiper.slideTo(index, 1000, true);
	}
	function onSwiper(e: any) {
		const [swiper] = e.detail as any as [Swiper];
		_Swiper = swiper;
	}

	const PAGES: { name: string; component: string | typeof SvelteComponent }[] = [
		{ name: 'Home', component: Home },
		{ name: 'Events', component: Events },
		{ name: 'About Us', component: AboutUs },
		{ name: 'Sponsors', component: Sponsors },
		{ name: 'Contact Us', component: ContactUs },
		{ name: 'Sitemap', component: Footer }
	];

	let pagination: PaginationOptions = {
		type: 'progressbar',
		progressbarOpposite: false
	};

	// function scrollMapping(percentScroll: number) {
    // const positionRange = (6 - (-1));
    // return (percentScroll * positionRange) + (-1);
  	// }
  	
	let loaded = false;

	// $: {
	// 	if (sketch) {
	// 		sketch.camera.position.set(-2, $scrollPosition, 5);
	// 	}
	// }

	onMount(async () => {
		const bg = await import('$lib/components/DNA/Sketch');
		const canvas = document.getElementById('dna-bg') ?? document.createElement('canvas');
		sketch = new bg.default(canvas);
		sketch.loadObjects();
		duration.set(2.5);
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
		class="pagination-container absolute invisible md:visible left-4 md:left-10 top-1/2 flex flex-col gap-1 md:gap-2 z-50 -translate-y-1/2"
	>
		{#each PAGES as page, i}
			<span
				on:click={() => {
					changePage(i);
				}}
				class="uppercase mono cursor-pointer text-xs px-2 py-0 max-w-xs w-full md:text-base relative after:absolute after:w-0 after:h-full after:bg-white after:mix-blend-difference after:top-0 after:left-0  after:transition-all after:duration-300 after:ease-in-out {i == slide_index
					? 'text-white after:w-full'
					: ''}">{page.name}</span
			>
		{/each}
	</div>
{/if}

<div id="dna-bg" class="fixed h-screen w-screen -z-50 bg-black" />
<!-- <Nav /> -->
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
			<svelte:component this={page.component} {hasScrolled} />
			{/if}
		</SwiperSlide>
	{/each}
</Swiper>

<style>
	#dna-bg {
		filter: saturate(1.2) brightness(1.1) contrast(1.2);
	}
</style>