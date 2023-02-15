<script>
	// import 'zoomwall.js/lib/zoomwall.css';
	import * as zoomwall from 'zoomwall.js';
	import { afterUpdate, onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	onMount(() => {
		// zoomwall.create(document.getElementById('2018'), true);
		requestIdleCallback(() => {
			zoomwall.create(document.getElementById('2021'), true);
			zoomwall.create(document.getElementById('2020'), true);
			zoomwall.create(document.getElementById('2019'), true);
			zoomwall.create(document.getElementById('2018'), true);
		});
	});
	afterUpdate(() => {
		// zoomwall.create(document.getElementById('2018'), true);
	});
	afterNavigate(() => {
		// zoomwall.create(document.getElementById('2018'), true);
	});
</script>

<svelte:head>
	<title>Our Glorious Past | Adhyaaya'23</title>
</svelte:head>

<!-- zoomwall.js -->

<div
	class="events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-[50vh] scroll-smooth"
>
	<div class="flex flex-col items-center justify-center pb-28">
		<h1 class="text-4xl font-bold text-center text-white myfont">Gallery</h1>
	</div>

	<div class="flex flex-col items-center justify-center pb-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2021</h1>
	</div>
	<div class="zoomwall" id="2021">
		<img src="/gallery/2021/0.jpeg" alt="" />
		<img src="/gallery/2021/1.jpeg" alt="" />
		<img src="/gallery/2021/2.jpeg" alt="" />
		<img src="/gallery/2021/3.jpeg" alt="" />
		<img src="/gallery/2021/4.jpeg" alt="" />
		<img src="/gallery/2021/5.jpeg" alt="" />
		<img src="/gallery/2021/6.jpeg" alt="" />
		<img src="/gallery/2021/7.jpeg" alt="" />
		<img src="/gallery/2021/8.jpeg" alt="" />
		<img src="/gallery/2021/9.jpeg" alt="" />
		<img src="/gallery/2021/10.jpeg" alt="" />
		<img src="/gallery/2021/11.jpeg" alt="" />
	</div>
	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2020</h1>
	</div>
	<div class="zoomwall" id="2020">
		<img src="/gallery/2020/0.jpg" alt="" />
		<img src="/gallery/2020/1.jpg" alt="" />
		<img src="/gallery/2020/2.jpg" alt="" />
		<img src="/gallery/2020/3.jpg" alt="" />
		<img src="/gallery/2020/4.jpg" alt="" />
		<img src="/gallery/2020/5.jpg" alt="" />
		<img src="/gallery/2020/6.jpg" alt="" />
		<img src="/gallery/2020/7.jpg" alt="" />
		<img src="/gallery/2020/8.jpg" alt="" />
		<img src="/gallery/2020/9.jpg" alt="" />
		<img src="/gallery/2020/10.jpg" alt="" />
		<img src="/gallery/2020/11.jpg" alt="" />
	</div>
	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2019</h1>
	</div>
	<div class="zoomwall" id="2019">
		<img src="/gallery/2019/0.jpg" alt="" />
		<img src="/gallery/2019/1.jpg" alt="" />
		<img src="/gallery/2019/2.jpg" alt="" />
		<img src="/gallery/2019/3.jpg" alt="" />
		<img src="/gallery/2019/4.jpg" alt="" />
		<img src="/gallery/2019/5.jpg" alt="" />
		<img src="/gallery/2019/6.jpg" alt="" />
		<img src="/gallery/2019/7.jpg" alt="" />
		<img src="/gallery/2019/8.jpg" alt="" />
		<img src="/gallery/2019/9.jpg" alt="" />
		<img src="/gallery/2019/10.jpg" alt="" />
		<img src="/gallery/2019/11.jpg" alt="" />
	</div>
	<div class="flex flex-col items-center justify-center pb-12 pt-12">
		<h1 class="text-2xl font-bold text-center text-white nunu">2018</h1>
	</div>
	<div class="zoomwall" id="2018">
		<img src="/gallery/2018/0.jpg" alt="" />
		<img src="/gallery/2018/1.jpg" alt="" />
		<img src="/gallery/2018/2.jpg" alt="" />
		<img src="/gallery/2018/3.jpg" alt="" />
		<img src="/gallery/2018/4.jpg" alt="" />
		<img src="/gallery/2018/5.jpg" alt="" />
		<img src="/gallery/2018/6.jpg" alt="" />
		<img src="/gallery/2018/7.jpg" alt="" />
		<img src="/gallery/2018/8.jpg" alt="" />
		<img src="/gallery/2018/9.jpg" alt="" />
		<img src="/gallery/2018/10.jpg" alt="" />
		<img src="/gallery/2018/11.jpg" alt="" />
	</div>
</div>

<style>
	/* @import 'zoomwall.js/lib/zoomwall.css'; */

	.zoomwall {
		font-size: 0;
		overflow: hidden;
	}

	.zoomwall img {
		display: inline-block;
		width: auto;
		height: 15vw;
		opacity: 1;
		vertical-align: top;
		transform-origin: 0% 0%;
		transition-property: transform, opacity;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}

	.zoomwall.lightbox img {
		opacity: 0.3;
		transition-timing-function: ease-in;
	}

	.zoomwall.lightbox img.active {
		opacity: 1;
	}
</style>
