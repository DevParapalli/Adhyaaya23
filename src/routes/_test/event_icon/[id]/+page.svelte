<script>
	import { EVENTS } from '$lib/data/events';
	import { page } from '$app/stores';
</script>

{#each EVENTS as event}
	<div class="flex items-center justify-center">
        {#if event.id == $page.params.id}
		<div class="h-150 w-150 border border-white mt-64">{#if event.icon.includes('url::')}
			<img
				height="150"
				width="150"
				src={event.icon.replace('url::', '')}
				alt=""
				class="min-h-[150px] object-contain"
			/>
		{:else}
			<iconify-icon icon={event.icon} class="text-[10rem]" />
		{/if}
    </div>
	{/if}
    </div>
{/each}
