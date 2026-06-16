import { supabase } from "../lib/supabase";

export const getProducts = async () => {
  return await supabase
    .from("products")
    .select("*")
    .order("id");
};

export const getReviews = async () => {
  return await supabase
    .from("reviews")
    .select("*")
    .order("created_at", {
      ascending: false,
    });
};

export const addProduct = async (
  brand: string,
  model: string
) => {
  return await supabase
    .from("products")
    .insert([
      {
        brand,
        model,
        category: "mobile",
      },
    ]);
};

export const updateProduct = async (
  id: number,
  brand: string,
  model: string
) => {
  return await supabase
    .from("products")
    .update({
      brand,
      model,
    })
    .eq("id", id);
};

export const approveReview = async (
  id: number,
  approved: boolean
) => {
  return await supabase
    .from("reviews")
    .update({
      approved,
    })
    .eq("id", id);
};