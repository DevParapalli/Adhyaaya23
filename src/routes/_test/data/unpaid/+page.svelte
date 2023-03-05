<script lang="ts">
	import type { AdhyaaayaTeamMember } from '$lib/data/team';
	import type { DBRegistrationTeam } from '$lib/types';
	import Grid from 'gridjs-svelte';
	import type { PageData } from './$types';
	let columns = [
		'id',
		'event_id',
		{
			name: 'created_at',
            formatter: (cell: string) => {
                return new Date(cell).toLocaleString();
            },
            
		},
		'name',
		'phone',
		'email',
        {
            name: 'team',
            formatter: (cell: DBRegistrationTeam[]) => {
                if (cell.length > 0) {
                    return cell.map((teamMember: DBRegistrationTeam) => {
                        return teamMember.name;
                    }).join(',\n');
                } else {
                    return '--x--';
                }
            }
        },
        'edu_institute',
        {
            name: 'amount',
            formatter: (cell: number) => {
                return `₹ ${cell / 100}`;
            }
        },
        'rzp_oid',
        'rzp_pid',
        'rzp_status',
	];
	export let data: PageData;
	// console.log(data.data[0]);
</script>

<div class="pt-28 px-3 pb-10">
	<Grid {columns} sort search fixedHeader data={data.data} />
</div>
