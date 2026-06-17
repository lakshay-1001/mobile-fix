import { supabase } from "../lib/supabase";

export async function getApprovedReviews() {
  return await supabase
    .from("reviews")
    .select("*")
    .eq("approved", true)
    .order("created_at", {
      ascending: false,
    });
}

export async function createReview(
  customer_name: string,
  review: string,
  rating: number
) {
  return await supabase
    .from("reviews")
    .insert([
      {
        customer_name,
        review,
        rating,
      },
    ]);
}