<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import { openModal } from 'svelte-modals';
	import EventInfoModal from '$lib/components/events/EventInfoModal.svelte';
	import { EVENTS } from '$lib/data/events';
	let technical = data.events.filter((event) => event.category === 'technical');
	let non_technical = data.events.filter((event) => event.category === 'non-technical');
	let workshops = data.events.filter((event) => event.category === 'workshops');
	import MainCards from '$lib/components/events/MainCards.svelte';
//   import img from '$lib/assets/backgrounds/8.png';
	import EventCard from '$lib/components/events/EventCard.svelte';


	let canvas: HTMLCanvasElement;

  
</script>

<svelte:head>
	<title>Events | Adhyaaya'23</title>
</svelte:head>

<svelte:window on:resize={() => {}} />

<!-- <canvas bind:this={canvas} class="orb-canvas -z-50 fixed bg-white !h-screen !w-screen" /> -->
<!-- <img src="{img}" class="-z-50 fixed h-screen w-screen object-cover"> -->
<div class="bg-gradient-to-b md:bg-gradient-to-r from-[#7e1212] to-[#2812FF] via-[#A23AF4] fixed h-screen w-screen -z-50"></div>
<div class="events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-screen scroll-smooth">
	<div
		class="section-header h-full min-h-[calc(100vh-7rem)] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4"
	>
		<MainCards color={3} href="#technical" />
		<MainCards color={2} href="#non-technical" />
		<MainCards color={0} href="#workshops" />
	</div>

  <div id="technical" class="h-full min-h-screen flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4">
    {#each technical as t}
      <EventCard data={t} />
    {/each}
  </div>

  <div id="non-technical" class="h-full min-h-screen flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4">
    {#each non_technical as nt}
      <EventCard data={nt} />
    {/each}
  </div>

  <div id="workshops" class="h-full min-h-screen flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4">
    {#each workshops as w}
      <EventCard data={w} />
    {/each}
  </div>
</div>

<!-- <button class="button" on:click={() => {openModal(EventInfoModal, {event: EVENTS[0]})}}>BUTTTON</button> -->
