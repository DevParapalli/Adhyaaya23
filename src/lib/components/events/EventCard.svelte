<script lang="ts">
	import type { AdhyaayaEvent } from "$lib/data/events";
    import { openModal } from "svelte-modals";
    import EventInfoModal from "$lib/components/events/EventInfoModal.svelte";

    export let data: AdhyaayaEvent;
</script>

<button on:click="{() => {
    openModal(EventInfoModal, {event: data})
}}" class="card card-compact md:card-normal bg-[#2d0028] text-white/80 hover:text-white transition-all duration-500 ease-in-out">
    <div class="card-body">
      <h2 class="card-title">{data.name}</h2>
      <p>{data.description}</p>
      <div class="card-actions justify-end">
        <button class="btn">Explore</button>
      </div>
    </div>
  </button>