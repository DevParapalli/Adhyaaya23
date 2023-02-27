import { supabase } from '$lib/supabaseClient';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({params}) => {
    const {data, error} = await supabase.from('registrations').select('*').eq('event_id', params.id);
    if (data) {
        const count_paid = data?.filter((item) => item['rzp_status'] == 'PAID').length;
    const count_unpaid = data?.length - count_paid;
    return {data, error, count_paid, count_unpaid};
    }
    else throw error;
};