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
	class="p-6 border border-white rounded-lg text-white bg-white/10 bg-blur-xl flex flex-col items-center justify-evenly gap-4 w-52 h-64"
>
{#if data.icon.includes('url::')} 
<img height="150" width="150" src="{data.icon.replace('url::', '')}" alt="" class="min-h-[150px] object-contain">
{:else}
<iconify-icon icon="{data.icon}" class="text-[10rem]" />
{/if}
<span>{data.name}</span>

</button>
