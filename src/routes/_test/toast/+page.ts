export const prerender = false;
import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
    return {toast:event.url.searchParams.get('t')};
};