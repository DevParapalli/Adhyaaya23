import { supabase } from '$lib/supabaseClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const { data, error } = await supabase
		.from('registrations')
		.select('*')
		.neq('rzp_status', 'PAID');
	if (data) {
		return { data };
	} else throw error;
};
