/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArlenorAPI } from "@/models/ArlenorAPI";
import { createClient } from "@supabase/supabase-js";

const url = process.env.VUE_APP_SUPABASE_URL || "";
const key = process.env.VUE_APP_SUPABASE_ANON_KEY || "";
const supabase = createClient(url, key);

const requestGet = async(target: string): Promise<any[]>  => {
  const { data } = await supabase.from(target).select();
  return (data || []);
};

const requestPostAll = async(target: string, items: ArlenorAPI[]): Promise<any[]> => {
  const { data } = await supabase.from(target).insert(items).select();
  return (data || []);
};

const requestPost = async(target: string, item: ArlenorAPI): Promise<any[]> => {
  const { data } = await supabase.from(target).insert([item]).select();
  return (data || []);
};

const requestPut = async(target: string, item: ArlenorAPI): Promise<any[]> => {
  const { data } = await supabase.from(target).update(item).eq("id", item.id).select();
  return (data || []);
};

const requestDelete = async(target: string, id: string): Promise<any[]> => {
  const { data } = await supabase.from(target).delete().eq("id", id).select();
  return (data || []);
};

export default {
  requestGet,
  requestPostAll,
  requestPost,
  requestPut,
  requestDelete
};