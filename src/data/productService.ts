import { supabase } from "../lib/supabase";

export interface ProductPart {
  id: number;
  product_id: number;
  part_name: string;
  price: number;
  created_at?: string;
}

export interface Product {
  id: number;
  name: string;
  search_keywords?: string | null;
  created_at?: string;

  product_parts?: ProductPart[];
}

export async function getProducts() {
  return await supabase
    .from("products")
    .select(`
      *,
      product_parts(*)
    `)
    .order("name");
}

export async function createProduct(
  name: string,
  search_keywords = ""
) {
  return await supabase
    .from("products")
    .insert([
      {
        name,
        search_keywords,
      },
    ])
    .select()
    .single();
}

export async function updateProduct(
  id: number,
  name: string,
  search_keywords = ""
) {
  return await supabase
    .from("products")
    .update({
      name,
      search_keywords,
    })
    .eq("id", id);
}

export async function deleteProduct(
  id: number
) {
  return await supabase
    .from("products")
    .delete()
    .eq("id", id);
}

export async function getParts(
  productId: number
) {
  return await supabase
    .from("product_parts")
    .select("*")
    .eq("product_id", productId)
    .order("part_name");
}

export async function createPart(
  productId: number,
  partName: string,
  price: number
) {
  return await supabase
    .from("product_parts")
    .insert([
      {
        product_id: productId,
        part_name: partName,
        price,
      },
    ]);
}

export async function updatePart(
  id: number,
  partName: string,
  price: number
) {
  return await supabase
    .from("product_parts")
    .update({
      part_name: partName,
      price,
    })
    .eq("id", id);
}

export async function deletePart(
  id: number
) {
  return await supabase
    .from("product_parts")
    .delete()
    .eq("id", id);
}