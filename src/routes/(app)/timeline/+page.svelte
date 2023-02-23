<script lang="ts">
	enum Mode {
		ONLINE = 'Online',
		OFFLINE = 'Offline'
	}

	let TIMELINE: { time: string; name: string; mode: Mode }[][] = [
		// Day 1
		[
			{ time: '10:00AM to 12:00PM', name: 'Inauguration', mode: Mode.OFFLINE },
			{ time: '12:30PM onwards', name: 'Crickbash', mode: Mode.OFFLINE },
			{ time: '1:00PM onwards', name: 'Food-O-Holics', mode: Mode.OFFLINE },
			{ time: '1:00PM onwards', name: 'Avishkar', mode: Mode.OFFLINE },
			{ time: '1:00PM onwards', name: 'Stock Market Workshop', mode: Mode.OFFLINE },
			{ time: '3:00PM onwards', name: 'Jigyasa', mode: Mode.OFFLINE },
			{ time: '12:30PM onwards', name: 'Virtual Placement Round 1', mode: Mode.OFFLINE },
			{ time: '3:00PM onwards', name: 'Virtual Placement Round 2', mode: Mode.OFFLINE },
			{ time: '6:00PM onwards', name: 'COD and Chess', mode: Mode.ONLINE }
		],
		// Day 2
		[
			{ time: '11:00AM to 12:30PM', name: 'Vaad-vivaad Round 1', mode: Mode.OFFLINE },
			{ time: '1:30PM to 3:30PM', name: 'Vaad-vivaad Round 2', mode: Mode.OFFLINE },
			{ time: '4:30PM onwards', name: 'Vaad-vivaad Round 3', mode: Mode.OFFLINE },
			{ time: '11:00AM onwards', name: 'Virtual Placement Round 3', mode: Mode.OFFLINE },
			{ time: '11:00AM onwards', name: 'Food-O-Holics', mode: Mode.OFFLINE },
			{ time: '9:30AM onwards', name: 'Crickbash', mode: Mode.OFFLINE },
			{ time: '4:00PM onwards', name: 'Workshop on Stargaze', mode: Mode.OFFLINE },
			{ time: '6:30PM onwards', name: 'Stargazing', mode: Mode.OFFLINE },
			{ time: '11:00AM onwards', name: 'Cad-O-Shop', mode: Mode.ONLINE },
			{ time: '11:00AM onwards', name: 'Roborace', mode: Mode.OFFLINE }
		],
		// Day 3
		[
			{ time: '11:00AM onwards', name: 'Codeventure', mode: Mode.OFFLINE },
			{ time: '11:00AM onwards', name: 'GDSC Workshop', mode: Mode.OFFLINE },
			{ time: '10:00AM onwards', name: 'Born Psychos', mode: Mode.OFFLINE },
			{ time: '11:00AM onwards', name: 'Bridge-O-Craft', mode: Mode.OFFLINE },
			{ time: '12:00PM onwards', name: 'Caddiction', mode: Mode.OFFLINE },
			{ time: '4:00PM onwards', name: 'Valedictory', mode: Mode.OFFLINE },
			{ time: '6:00PM onwards', name: 'DJ Night', mode: MOde.OFFLINE }
		]
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
