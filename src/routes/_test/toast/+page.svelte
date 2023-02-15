<script lang="ts">
	import { toastError, toastInfo, toastSuccess, toastWarning } from '$lib/util';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	onMount(() => {
		switch (data.toast) {
			case 'e':
				toastError('Error');
				break;
			case 's':
				toastSuccess('Success');
				break;
			case 'i':
				toastInfo('Info');
				break;
			case 'w':
				toastWarning('Warning');
				break;
			default:
				break;
		}
	});
</script>
