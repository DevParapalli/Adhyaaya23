<script lang="ts">
    import type { PageData } from './$types';
  
    export let data: PageData;
    import { openModal } from 'svelte-modals';
    import EventInfoModal from '$lib/components/events/EventInfoModal.svelte';
	import { EVENTS } from '$lib/data/events';
    let technical = data.events.filter(event => event.category === 'technical');
    let non_technical = data.events.filter(event => event.category === 'non-technical');
    let workshops = data.events.filter(event => event.category === 'workshops');
  
    import MainCards from '$lib/components/events/MainCards.svelte';
  
  </script>

<svelte:head>
    <title>Events :{`)`} | Adhyaaya'23</title>
</svelte:head>

<div class="events-container grid grid-cols-1 pt-28">
    <div class="section-header min-h-screen w-full flex items-center justify-center flex-wrap gap-4 transition-all duration-500 ease-in-out">
      <MainCards color={3}/>
      <MainCards color={0}/>
      <MainCards color={1}/>
    </div>
    
</div>

<!-- <button class="button" on:click={() => {openModal(EventInfoModal, {event: EVENTS[0]})}}>BUTTTON</button> -->