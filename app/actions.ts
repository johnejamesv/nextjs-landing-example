"use server";

/**
 * Server Actions Demo
 * 
 * Server Actions allow form mutations without API routes.
 * They run securely on the server and can revalidate pages.
 * 
 * Benefits for navigation:
 * - No API route boilerplate
 * - Progressive enhancement (works without JS)
 * - Automatic revalidation
 * - Type-safe data mutations
 */

import { revalidatePath } from "next/cache";

interface SubscribeResult {
  success: boolean;
  message: string;
}

/**
 * Newsletter Subscription Action
 * 
 * Demonstrates:
 * - Form data handling on server
 * - Validation
 * - Cache revalidation
 * - Error handling
 */
export async function subscribeToNewsletter(formData: FormData): Promise<SubscribeResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  
  // Server-side validation
  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    };
  }
  
  if (!name || name.length < 2) {
    return {
      success: false,
      message: "Please provide your name.",
    };
  }
  
  // Simulate database write
  console.log(`Subscribing: ${name} <${email}>`);
  
  // Revalidate the about page to show updated subscriber count
  revalidatePath("/about");
  
  return {
    success: true,
    message: `Thanks, ${name}! You've been subscribed to our newsletter.`,
  };
}

/**
 * Contact Form Action
 * 
 * Another example of server-side form handling.
 */
export async function submitContactForm(formData: FormData): Promise<SubscribeResult> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  
  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    };
  }
  
  if (!message || message.length < 10) {
    return {
      success: false,
      message: "Message must be at least 10 characters.",
    };
  }
  
  console.log(`Contact form from: ${email}`);
  
  return {
    success: true,
    message: "Message sent successfully! We'll get back to you soon.",
  };
}
