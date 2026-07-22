"use client";

import { useActionState } from "react";

import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

// input/textarea share this treatment: MUI's floating standard-variant label/underline was
// simplified to a static label + a plain bottom border (see Phase 11 plan notes for why) —
// focus color (#1976d2) is MUI's own stock, unthemed primary, measured on the live old site's
// focused underline, same "unthemed primary" family as the Phase 6/7/8 link-color findings.
const FIELD_CLASSES =
  "block w-full border-b-2 border-muted-light bg-transparent text-base-content outline-none focus:border-[#1976d2]";

// A "use server" file may only export async functions, so this plain object lives here
// instead of alongside submitContactForm in app/actions/contact.ts.
const INITIAL_STATE: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, INITIAL_STATE);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 pt-8 text-center">
        <p className="text-[2rem] leading-[2.1rem] text-white min-[900px]:text-[2.2rem] min-[900px]:leading-[2.3rem]">
          Thank you!
        </p>
        {/* success.light in MUI's (unthemed) default palette is #4caf50 — this project's own
            --color-secondary happens to already be the exact same hex (custom.green.main). */}
        <p className="text-[1.5rem] leading-[1.6rem] text-secondary min-[900px]:text-[1.6rem] min-[900px]:leading-[1.7rem]">
          Your form has successfully been submitted!
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="text-justify text-base-content">
        Need a web site/app done or just saying &quot;HI&quot;? Leave your input below and you&apos;ll get a
        response from me within the next 24 hours
      </p>

      <form action={formAction} className="flex flex-col gap-6">
        <div className="flex flex-row items-start gap-[15px]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="mt-2.5 h-[35px] w-[35px] shrink-0 text-muted-light"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <div className="flex-1">
            <label htmlFor="name" className="text-base-content">
              Your name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              required
              minLength={2}
              maxLength={20}
              pattern="[A-Za-z\s'\-]+"
              title="Only characters from the latin alphabet are allowed"
              className={FIELD_CLASSES}
            />
            {state.errors?.name && <p className="text-sm text-muted-light">{state.errors.name}</p>}
          </div>
        </div>

        <div className="flex flex-row items-start gap-[15px]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="mt-2.5 h-[35px] w-[35px] shrink-0 text-muted-light"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <div className="flex-1">
            <label htmlFor="email" className="text-base-content">
              Your email address *
            </label>
            <input id="email" name="email" type="email" autoComplete="off" required className={FIELD_CLASSES} />
            {state.errors?.email && <p className="text-sm text-muted-light">{state.errors.email}</p>}
          </div>
        </div>

        <div className="flex flex-row items-start gap-[15px]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="mt-2.5 h-[35px] w-[35px] shrink-0 text-muted-light"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.83.699 2.53 0l7.243-7.243c.699-.699.699-1.83 0-2.53L13.432 3.659A2.25 2.25 0 0 0 11.84 3H9.568ZM7.5 7.5h.008v.008H7.5V7.5Z"
            />
          </svg>
          <div className="flex-1">
            <label htmlFor="subject" className="text-base-content">
              Subject *
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              autoComplete="off"
              required
              minLength={2}
              maxLength={40}
              className={FIELD_CLASSES}
            />
            {state.errors?.subject && <p className="text-sm text-muted-light">{state.errors.subject}</p>}
          </div>
        </div>

        <div className="flex flex-row items-start gap-[15px]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="mt-3 h-[35px] w-[35px] shrink-0 text-muted-light"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <div className="flex-1">
            <label htmlFor="message" className="text-base-content">
              Your message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              autoComplete="off"
              required
              minLength={10}
              className={FIELD_CLASSES}
            />
            {state.errors?.message && <p className="text-sm text-muted-light">{state.errors.message}</p>}
          </div>
        </div>

        {state.status === "error" && state.message && (
          <p className="rounded-[20px] bg-black/50 py-2 text-center text-error">{state.message}</p>
        )}

        <div className="flex flex-row justify-center">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex cursor-pointer items-center gap-2 rounded bg-primary px-[22px] py-2 text-[15px] font-medium text-primary-content uppercase shadow-[0_4px_5px_-2px_rgba(0,0,0,0.2),0_7px_10px_1px_rgba(0,0,0,0.14),0_2px_16px_1px_rgba(0,0,0,0.12)] disabled:cursor-not-allowed disabled:bg-primary/50 disabled:text-primary-content/50 disabled:shadow-none"
          >
            {isPending ? "Sending..." : "Send"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
