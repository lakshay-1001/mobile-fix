import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function TestPage() {
  useEffect(() => {
    async function test() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      console.log("DATA", data);
      console.log("ERROR", error);
    }

    test();
  }, []);

  return <div>Supabase Connected</div>;
}