<svelte:head>
    <title>Our Sponsors | Adhyaaya'23</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';
  
    const sponsors = [
      {
        id: 1,
        title: 'Title Sponsor',
        image: 'https://via.placeholder.com/600x400'
      },
      {
        id: 2,
        title: 'Sponsor 1',
        image: 'https://via.placeholder.com/200x200'
      },
      {
        id: 3,
        title: 'Sponsor 2',
        image: 'https://via.placeholder.com/200x200'
      },
      {
        id: 4,
        title: 'Sponsor 3',
        image: 'https://via.placeholder.com/200x200'
      }
    ];
  
    let titleSponsor = {};
    onMount(() => {
      titleSponsor = sponsors.shift();
    });
  </script>
  
  <style>
    /* add Tailwind CSS styles here */
  </style>
  
 <div class="flex items-center flex-col pt-28">
    <div class="text-4xl font-bold text-center">Sponsors</div>
  
    <div class="mt-12">
      <div class="text-3xl font-bold mb-4">{titleSponsor.title}</div>
      <img src={titleSponsor.image} alt={titleSponsor.title} />
    </div>
    
    <div class="mt-12">
      {#each sponsors as sponsor}
        <div class="max-w-sm mx-auto mt-8">
          <img src={sponsor.image} alt={sponsor.title} />
          <div class="mt-2 text-lg font-bold">{sponsor.title}</div>
        </div>
      {/each}
    </div>
 </div>