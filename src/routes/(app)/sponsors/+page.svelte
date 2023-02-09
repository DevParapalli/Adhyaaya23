<svelte:head>
    <title>Our Sponsors | Adhyaaya'23</title>
</svelte:head>

<script lang="ts">
    import { onMount } from 'svelte';
    import {SPONSORS} from '$lib/data/sponsors';
    const TITLE_SPONSOR = SPONSORS.find(sponsor => sponsor.category === 'TITLE');
    
    function shuffle(array: typeof SPONSORS) {
		array = array.slice();
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
        return array;
	}
    const SPONSORS_LIST = shuffle(SPONSORS.filter(sponsor => sponsor.category != 'TITLE'));
  </script>
  
  <style>
    /* add Tailwind CSS styles here */
  </style>
  
 <div class="flex items-center flex-col pt-28 px-4">
    <div class="text-4xl font-bold text-center">Sponsors</div>
  
    <div class="mt-12">
      <div class="text-3xl font-bold mb-4">{TITLE_SPONSOR?.title}</div>
      <img src={TITLE_SPONSOR?.image} alt={TITLE_SPONSOR?.title} />
    </div>
    
    <div class="mt-12 flex flex-row flex-wrap items-center gap-10 px-4">
      {#each SPONSORS_LIST as sponsor}
        <div class="max-w-sm mx-auto mt-8">
          <img src={sponsor.image} alt={sponsor.title} />
          <div class="mt-2 text-lg font-bold">{sponsor.title}</div>
        </div>
      {/each}
    </div>
 </div>