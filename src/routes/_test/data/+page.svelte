<script lang="ts">
    import {EVENTS} from '$lib/data/events';

</script>

<div class="pt-28 pb-10 px-10 flex flex-wrap gap-4">
    {#each EVENTS.filter(e => !e.id.includes('::')) as e}
        <a href="/_test/data/{e.id}" class="mb-10 rounded-lg bg-white/10 p-4">
            <h2 class="text-2xl font-bold">{e.name}</h2>
        </a>
    {/each}
</div>