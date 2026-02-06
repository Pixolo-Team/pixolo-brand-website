// TypeScript types for the Leads Admin Panel
export type LeadStatus = "Stale" | "Connected" | "Did not respond";
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string | null;
  status: LeadStatus;
  created_at: string;
  updated_at: string;
}
export interface LeadInsertData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  status?: LeadStatus;
}
export interface LeadUpdate {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  status?: LeadStatus;
}
// Database response types
export interface LeadsResponse {
  data: Lead[] | null;
  error: Error | null;
}
export interface LeadResponse {
  data: Lead | null;
  error: Error | null;
}
