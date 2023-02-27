<script lang="ts">
	import type { AdhyaaayaTeamMember } from '$lib/data/team';
	import type { DBRegistrationTeam } from '$lib/types';
	import Grid from 'gridjs-svelte';
	import type { PageData } from '../$types';
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

<div class="pt-28 px-3">
    <div class="py-8 px-3 text-center">
        <span>Paid : {data.count_paid}</span><br />
        <span>Unpaid : {data.count_unpaid}</span><br />
        <span>Total : {data.data.length}</span>
    </div>
	<Grid {columns} sort search fixedHeader pagination={{limit: 25}} data={data.data} />
</div>
