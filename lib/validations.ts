import { z } from "zod";

export const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

export const leadSchema = z.object({
  serviceCategory: z.string().min(1, "Please select a service category"),
  timeframe: z.string().min(1, "Please select a timeframe"),
  details: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(/^\+?[0-9\s\-\(\)]{7,15}$/, "Please enter a valid phone number"),
  website: z.string().max(0).optional(), // honeypot
});

export type LeadFormData = z.infer<typeof leadSchema>;

