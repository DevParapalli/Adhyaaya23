<script lang="ts">
    import type { PageData } from './$types';
  
    export let data: PageData;
    import { openModal } from 'svelte-modals';
    import EventInfoModal from '$lib/components/EventInfoModal.svelte';
	import { EVENTS } from '$lib/data/events';
    let technical = data.events.filter(event => event.category === 'technical');
    let non_technical = data.events.filter(event => event.category === 'non-technical');
    let workshops = data.events.filter(event => event.category === 'workshops');
  </script>


<div class="events-container">
    <div class="section-header">
        <div class="technical-card">

        </div>
        <div class="non-technical-card">

        </div>
        <div class="workshops-card">

        </div>
    </div>
</div>

<button class="button" on:click={() => {openModal(EventInfoModal, {event: EVENTS[0]})}}>BUTTTON</button>