<script>
	import '../app.postcss';
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { Toaster } from 'svelte-french-toast';
	import { Modals, closeModal } from 'svelte-modals'

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<slot />

<Toaster />

  
  <Modals>
	<button
	  slot="backdrop"
	  class="backdrop"
	  on:click={closeModal}
	/>
  </Modals>
  
  <style>
	.backdrop {
	  position: fixed;
	  top: 0;
	  bottom: 0;
	  right: 0;
	  left: 0;
	  background: rgba(0,0,0,0.50)
	}
  </style>