import { supabase } from '$lib/supabaseClient';
import { error, redirect } from '@sveltejs/kit';
import { sha256 } from 'js-sha256';
import { RZP_SECRET } from '$env/static/private';
import type { RequestHandler } from './$types';

// alert(e.razorpay_payment_id);
// alert(e.razorpay_order_id);
// alert(e.razorpay_signature)

export const GET: RequestHandler = async ({ url }) => {
	const rzp_pid = url.searchParams.get('rzp_pid');
	const rzp_oid = url.searchParams.get('rzp_oid');
	const rzp_sig = url.searchParams.get('rzp_sig');

	console.log('rzp_pid', rzp_pid);
	console.log('rzp_oid', rzp_oid);
	console.log('rzp_sig', rzp_sig);

	if (rzp_pid && rzp_oid && rzp_sig) {
		const { data } = await supabase
			.from('registrations')
			.select('*')
			.eq('rzp_oid', rzp_oid)
			.limit(1)
			.single();
		if (!data) throw error(404, 'Order ID not found');
		const generated = sha256.hmac(RZP_SECRET, rzp_oid + '|' + rzp_pid);
		console.log('generated', generated);
		console.log('rzp_sig', rzp_sig);
		if (generated === rzp_sig) {
			const { data: _data } = await supabase
				.from('registrations')
				.update({ rzp_pid, rzp_sig, rzp_status: 'PAID' })
				.eq('rzp_oid', rzp_oid)
				.select()
				.single();
			// return json({data: _data});
			// TODO: Include the email sending logic here...
			throw redirect(307, `/pg/${_data.id}/success`);
		} else {
			throw error(400, 'Invalid signature');
		}
	} else {
		throw error(400, 'Invalid Credentials');
	}
};
