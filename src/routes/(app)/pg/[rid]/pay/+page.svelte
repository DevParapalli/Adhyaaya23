<!-- Route used to pay for the rid. -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_RZP_KEY } from '$env/static/public';
	import type { PGHandlerErrorResponse, PGHandlerSuccessResponse } from '$lib/types';
	import { onMount } from 'svelte/types/runtime/internal/lifecycle';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		const options = {
			key: PUBLIC_RZP_KEY, // Enter the Key ID generated from the Dashboard
			amount: data.db.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: 'INR',
			name: "Adhyaaya'23 | GCOEN",
			description: `Payment for ${data.db.name} for ${data.db.event_id}`,
			image: 'https://adhyaaya.org/favicon.png',
			order_id: data.pg.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			// "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
			prefill: {
				name: data.db.name,
				email: data.db.email,
				contact: data.db.phone
			},
			notes: {
				address: 'Government College of Engineering, Nagpur - 440010'
			},
			theme: {
				color: '#3399cc'
			},
			handler: function (e: PGHandlerSuccessResponse) {
				// debugger;
				goto(
					`/pg/check_status?rzp_pid=${e.razorpay_payment_id}&rzp_oid=${data.pg.id}&rzp_sig=${e.razorpay_signature}`
				);
			}
		};
		const rzp1 = new Razorpay(options);
		rzp1.on('payment.failed', function (e: PGHandlerErrorResponse) {
			alert(e.error.description);
		});
		rzp1.open();
	});
</script>
