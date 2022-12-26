import type { PageServerLoad } from "./$types";
// import { events } from "$lib/data/events";
import { error } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";
import { RZP_SECRET } from "$env/static/private";
import { PUBLIC_RZP_KEY } from "$env/static/public";


export const load: PageServerLoad = async (event) => {
    let { data } = await supabase
      .from("registrations")
      .select("*")
      .eq("id", event.params.rid)
      .single();
    // POST TO RZP
    const _req = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(PUBLIC_RZP_KEY + ":" + RZP_SECRET),
      },
      credentials: "include",
      body: JSON.stringify({
        amount: data.amount,
        currency: "INR",
      }),
    });
    const _data = await _req.json();
    ({ data } = await supabase
      .from("registrations")
      .update({ rzp_oid: _data.id })
      .eq("id", data.id)
      .select()
      .single());
    if (data && _data) return { db: data, pg: _data };
    else throw error(404, "Registration ID not found");
  };

export const sample = {
    id: "order_KUnUYh5c6C9Nvb",
    entity: "order",
    amount: 10400,
    amount_paid: 0,
    amount_due: 10400,
    currency: "INR",
    receipt: null,
    offer_id: null,
    status: "created",
    attempts: 0,
    notes: [],
    created_at: 1666000629,
  };