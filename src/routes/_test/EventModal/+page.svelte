<script>
    import EventInfoModal from '$lib/components/EventInfoModal.svelte';
    import {EVENTS} from '$lib/data/events';
</script>

<EventInfoModal event={EVENTS[1]} isOpen />