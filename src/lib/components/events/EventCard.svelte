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
	class="p-6 border border-white rounded-lg text-white bg-white/10 bg-blur-xl flex flex-col items-center gap-4 w-52 h-64"
>
<img height="150" width="150" src="https://via.placeholder.com/150x150" alt="">
<span>{data.name}</span>

</button>
