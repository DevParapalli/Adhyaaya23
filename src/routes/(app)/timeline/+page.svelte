<script lang="ts">
	enum Mode {
		ONLINE = 'Online',
		OFFLINE = 'Offline'
	}

	let TIMELINE: { time: string; name: string; mode: Mode }[][] = [
		// Day 1
		[
			{ time: '10:00AM to 12:00PM', name: 'Inauguration', mode: Mode.OFFLINE },
			{ time: '12:00PM onwards', name: 'Bridge-O-Craft (M_Gymkhana)', mode: Mode.OFFLINE },
			{ time: '1:00PM onwards', name: 'Bornpsycos (Campus)', mode: Mode.OFFLINE },
			{ time: '1:00PM onwards', name: 'Virtual Placement Round 1', mode: Mode.OFFLINE },
			{ time: '3:00PM onwards', name: 'Virtual Placement Round 2', mode: Mode.OFFLINE },
			{ time: '1:15PM onwards', name: 'Vaad Vivad Round 1', mode: Mode.OFFLINE },
			{ time: '3:15PM onwards', name: 'Vaad Vivad Round 2', mode: Mode.OFFLINE },
			{ time: '2:00PM onwards', name: 'Cad-O-Shop', mode: Mode.ONLINE },
			{ time: '2:00PM onwards', name: 'Stargaze (M218)', mode: Mode.ONLINE },
			{ time: '2:00PM onwards', name: 'Stargaze (M218)', mode: Mode.ONLINE }
		],
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
						<div class="text-center font-bold nunu">{i + 1}</div>
						<div class="text-center nunu">{item.time}</div>
						<div class="text-center nunu">{item.name}</div>
						<div class="text-center nunu">{item.mode}</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
