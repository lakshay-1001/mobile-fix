import { supabase } from "../lib/supabase";

export interface Review {
  id: number;
  customer_name: string;
  review: string;
  rating: number;
  approved: boolean;
}

export async function getReviews() {
  return await supabase
    .from("reviews")
    .select("*")
    .order("created_at", {
      ascending: false,
    });
}

export async function approveReview(
  id: number,
  approved: boolean
) {
  return await supabase
    .from("reviews")
    .update({
      approved,
    })
    .eq("id", id);
}

export async function deleteReview(
  id: number
) {
  return await supabase
    .from("reviews")
    .delete()
    .eq("id", id);
}