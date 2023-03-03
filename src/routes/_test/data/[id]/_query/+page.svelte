<script lang="ts">
	import type { PageData } from "./$types";
    import type {DBRegistrationTeam} from '$lib/types'
    function get_team_string(team_obj: DBRegistrationTeam[]) {
        let team_string = ""
        for (let i = 0; i < team_obj.length; i++) {
            team_string += team_obj[i].name
            if (i != team_obj.length - 1) {
                team_string += " | "
            }
        }
        return team_string
    }
    export let data: PageData
</script>

<table>
    <thead>
        <tr>
            <th>id</th>
            <th>event-id</th>
            <th>created_at</th>
            <th>name</th>
            <th>phone</th>
            <th>email</th>
            <th>team</th>
            <th>edu_institute</th>
            <th>amount</th>
            <th>rzp_oid</th> 
            <th>rzp_pid</th>
            <th>rzp_status</th>
        </tr>
    </thead>
    <tbody>
        {#each data.data as registration}
            <tr>
                <td>{registration.id}</td>
                <td>{registration.event_id}</td>
                <td>{registration.created_at}</td>
                <td>{registration.name}</td>
                <td>{registration.phone}</td>
                <td>{registration.email}</td>
                <td>{get_team_string(registration.team)}</td>
                <td>{registration.edu_institute}</td>
                <td>{registration.amount}</td>
                <td>{registration.rzp_oid}</td>
                <td>{registration.rzp_pid}</td>
                <td>{registration.rzp_status}</td>
            </tr>
        {:else}
        <tr>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
            <td>~No Data~</td>
        </tr>
        {/each}

    </tbody>
</table>

<style>
    
</style>