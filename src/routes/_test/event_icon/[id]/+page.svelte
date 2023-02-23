<script>
	import { EVENTS } from '$lib/data/events';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	const capture = async () => {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		const video = document.createElement('video');

		try {
			const captureStream = await navigator.mediaDevices.getDisplayMedia();
			video.srcObject = captureStream;
			if (context) {
				context.drawImage(video, 0, 0, window.width, window.height);
				const frame = canvas.toDataURL('image/png');
				captureStream.getTracks().forEach((track) => track.stop());
				window.open(frame, '_blank');
			} else throw new Error('Context is null');
		} catch (err) {
			console.error('Error: ' + err);
		}
	};

    // onMount(capture)
</script>

{#each EVENTS as event}
	<div class="flex items-center justify-center gap-8">
			<div class="h-150 w-150 border border-white mt-64">
				{#if event.icon.includes('url::')}
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
	</div>
{/each}

{#each EVENTS.filter(e => e.is_active) as event}
    <span class="text-white">https://www.adhyaaya.org/events?view={event.id}</span><br>
{/each}
