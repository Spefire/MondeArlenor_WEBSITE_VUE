/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorAPI } from "@/models/ArlenorAPI";
import { createClient } from "@supabase/supabase-js";

const url = process.env.VUE_APP_SUPABASE_URL || "";
const key = process.env.VUE_APP_SUPABASE_ANON_KEY || "";
const supabase = createClient(url, key);

const requestGet = async(target: string): Promise<any[]>  => {
  const { data } = await supabase.from(target).select();
  console.warn("requestGet", data);
  return (data || []);
};

const requestPostAll = async(target: string, items: ArlenorAPI[]): Promise<any[]> => {
  const newItems: any[] = [];
  items.forEach(item => {
    const newItem: any = Object.assign({}, item);
    delete newItem["id"];
    newItems.push(newItem);
  });
  const { data } = await supabase.from(target).insert(newItems).select();
  console.warn("requestPostAll", data);
  return (data || []);
};

const requestPost = async(target: string, item: ArlenorAPI): Promise<number> => {
  const newItem: any = Object.assign({}, item);
  delete newItem["id"];
  const { data } = await supabase.from(target).insert([newItem]).select();
  const id = (data && data[0].id) ? data[0].id : 0;
  console.warn("requestPost", id);
  return id;
};

const requestPut = async(target: string, item: ArlenorAPI): Promise<boolean> => {
  await supabase.from(target).update(item).eq("id", item.id).select();
  console.warn("requestPut");
  return true;
};

const requestDelete = async(target: string, id: number | null): Promise<boolean> => {
  await supabase.from(target).delete().eq("id", id).select();
  console.warn("requestDelete");
  return true;
};

export default {
  requestGet,
  requestPostAll,
  requestPost,
  requestPut,
  requestDelete
};