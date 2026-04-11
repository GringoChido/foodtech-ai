"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOCATION_OPTIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company name is required"),
  locations: z.string().min(1, "Please select a range"),
});

type FormData = z.infer<typeof schema>;

export const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-navy/10 p-8 text-center" role="status">
        <p className="font-heading text-2xl font-bold text-navy">
          You&apos;re on the list.
        </p>
        <p className="mt-2 text-navy/70">
          We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-navy/20 bg-navy px-4 py-3 text-white placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent min-h-[44px]";
  const errorClasses = "mt-1 text-xs text-red-600";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto max-w-md space-y-4 text-left"
    >
      <div>
        <label htmlFor="wl-name" className="sr-only">
          Full Name
        </label>
        <input
          id="wl-name"
          type="text"
          placeholder="Full Name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "wl-name-err" : undefined}
          className={inputClasses}
          {...register("name")}
        />
        {errors.name && (
          <p id="wl-name-err" className={errorClasses} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="wl-email" className="sr-only">
          Email
        </label>
        <input
          id="wl-email"
          type="email"
          placeholder="Email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "wl-email-err" : undefined}
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p id="wl-email-err" className={errorClasses} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="wl-company" className="sr-only">
          Company / Brand Name
        </label>
        <input
          id="wl-company"
          type="text"
          placeholder="Company / Brand Name"
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "wl-company-err" : undefined}
          className={inputClasses}
          {...register("company")}
        />
        {errors.company && (
          <p id="wl-company-err" className={errorClasses} role="alert">
            {errors.company.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="wl-locations" className="sr-only">
          Number of Locations
        </label>
        <select
          id="wl-locations"
          aria-invalid={!!errors.locations}
          aria-describedby={errors.locations ? "wl-loc-err" : undefined}
          className={`${inputClasses} appearance-none`}
          {...register("locations")}
        >
          {LOCATION_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.locations && (
          <p id="wl-loc-err" className={errorClasses} role="alert">
            {errors.locations.message}
          </p>
        )}
      </div>

      {serverError && (
        <p className="text-center text-sm text-red-600" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" variant="secondary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Join the Founding Pilot Waitlist"}
      </Button>
    </form>
  );
};
