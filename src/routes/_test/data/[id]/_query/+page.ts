import { supabase } from '$lib/supabaseClient';
import type { DBRegistration } from '$lib/types';
import type { PostgrestError } from '@supabase/supabase-js';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({params}) => {
    const {data, error}: {data: DBRegistration[] | null, error: PostgrestError | null } = await supabase.from('registrations').select('*').eq('event_id', params.id);
    if (data) {
        const count_paid = data?.filter((item) => item['rzp_status'] == 'PAID').length;
    const count_unpaid = data?.length - count_paid;
    return {data, error, count_paid, count_unpaid};
    }
    else throw error;
};