<script lang="ts">
	import type { AdhyaayaEvent } from '$lib/data/events';
	import { openModal } from 'svelte-modals';
	import EventInfoModal from '$lib/components/events/EventInfoModal.svelte';

	export let data: AdhyaayaEvent;
</script>

<button
	on:click={() => {
		openModal(EventInfoModal, { event: data });
	}}
	class=""
>
{data.name}
</button>
