<script lang="ts">
	enum Mode {
		ONLINE = 'Online',
		OFFLINE = 'Offline'
	}

	let TIMELINE: { time: string; name: string; mode: Mode }[][] = [
		// Day 1
		[],
		// Day 2
		[],
		// Day 3
		[]
	];
</script>

<div class="pt-28">
	<h2 class="text-3xl font-bold text-center">Timeline</h2>
</div>
<div class="flex flex-col md:flex-row">
	{#each TIMELINE as DAY, i}
		<div class="w-full md:w-1/3 p-4">
			<div class="text-center font-bold text-xl">Day {i + 1}</div>
			<div class="flex flex-col">
				{#each DAY as item, i}
					<div class="w-full p-2 border border-gray-400">
						<div class="text-center font-bold">{i + 1}</div>
						<div class="text-center">{item.time}</div>
						<div class="text-center">{item.name}</div>
						<div class="text-center">{item.mode}</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
