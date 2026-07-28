"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// The old site's yup schema used /[a-zA-z]/i (note the lowercase trailing "z") with no
// anchors — a bug that both widened the character range past A-Z/a-z and only checked that
// a latin letter appears *somewhere* in the string, not that the whole string is latin.
// Fixed properly here rather than ported: full-string match, letters/spaces/hyphens/apostrophes.
const LATIN_NAME_REGEX = /^[A-Za-z\s'\-]+$/;

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Your name should be at least 2 characters long")
    .max(20, "Your name should be at most 20 characters long")
    .regex(LATIN_NAME_REGEX, "Only characters from the latin alphabet are allowed"),
  email: z.email("Email address should be in valid format"),
  subject: z
    .string()
    .trim()
    .min(2, "Subject should be at least 2 characters long")
    .max(40, "Subject should be at most 40 characters long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export interface ContactFormState {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<keyof ContactFormValues, string>>;
  message?: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error).fieldErrors;
    return {
      status: "error",
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: `PORTFOLIO SITE <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL!,
      // Not in the old code — lets Ariel hit "reply" and land in the submitter's inbox
      // instead of his own FROM_EMAIL, which the old backend's missing replyTo didn't support.
      replyTo: email,
      subject: "PORTFOLIO SITE SUBMISSION",
      text: "PORTFOLIO FORM SUBMISSION",
      html: `
        <h2>You have a new form submission on Ariel Behar's portfolio site!</h2>
        <h3>Submission Details</h3>
        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Subject:</b> ${subject}</li>
          <li><b>Message:</b> ${message}</li>
        </ul>
      `,
    });

    // The Resend SDK returns { error } for API-level failures (bad domain, auth, etc.)
    // instead of throwing — only a network-level failure would land in the catch below.
    if (error) {
      console.error("Contact form submission failed:", error.name, error.statusCode, error.message);
      return {
        status: "error",
        message: "An error occurred while attempting to process your message.",
      };
    }

    return { status: "success" };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return {
      status: "error",
      message: "An error occurred while attempting to process your message.",
    };
  }
}
