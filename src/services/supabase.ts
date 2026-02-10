// SUPABASE //
import { createClient } from "@supabase/supabase-js";

// TYPES //
import type { Lead, LeadInsertData, LeadUpdate, LeadStatus } from "@/types/leads";

// Initialize Supabase client
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// ============================================
// AUTHENTICATION
// ============================================
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
export async function getSession() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  return { session, error };
}
export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return { user, error };
}
// ============================================
// LEADS QUERIES
// ============================================
/**
 * Fetch all leads, sorted by newest first
 */
export async function fetchLeads(): Promise<{ data: Lead[] | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  return { data, error };
}
/**
 * Fetch a single lead by ID
 */
export async function fetchLeadById(
  id: string,
): Promise<{ data: Lead | null; error: Error | null }> {
  const { data, error } = await supabase.from("leads").select("*").eq("id", id).single();

  return { data, error };
}
/**
 * Insert a new lead (from contact form)
 */
export async function insertLead(
  lead: LeadInsertData,
): Promise<{ data: Lead | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("leads")
    .insert({
      name: lead.name,
      email: lead.email,
      phone: lead.phone || null,
      subject: lead.subject || null,
      message: lead.message || null,
      status: lead.status || "Stale",
    })
    .select()
    .single();

  return { data, error };
}
/**
 * Update a lead's status
 */
export async function updateLeadStatus(
  id: string,
  status: LeadStatus,
): Promise<{ data: Lead | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}
/**
 * Update a lead with partial data
 */
export async function updateLead(
  id: string,
  updates: LeadUpdate,
): Promise<{ data: Lead | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("leads")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}
/**
 * Delete a lead
 */
export async function deleteLead(id: string): Promise<{ error: Error | null }> {
  const { error } = await supabase.from("leads").delete().eq("id", id);

  return { error };
}
/**
 * Fetch leads by status
 */
export async function fetchLeadsByStatus(
  status: LeadStatus,
): Promise<{ data: Lead[] | null; error: Error | null }> {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("status", status)
    .order("created_at", { ascending: false });

  return { data, error };
}
