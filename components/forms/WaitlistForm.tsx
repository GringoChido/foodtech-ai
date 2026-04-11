"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

const LOCATION_VALUES = ["1-3", "4-7", "8-15", "16+"] as const;

export const WaitlistForm = () => {
  const t = useTranslations("form");
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const schema = z.object({
    name: z.string().min(1, t("errorName")),
    email: z.string().email(t("errorEmail")),
    company: z.string().min(1, t("errorCompany")),
    locations: z.string().min(1, t("errorLocations")),
  });

  type FormData = z.infer<typeof schema>;

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
      setServerError(t("errorServer"));
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 text-center" role="status">
        <p className="font-heading text-2xl font-bold text-white">
          {t("successTitle")}
        </p>
        <p className="mt-2 text-white/60">{t("successMessage")}</p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-white/20 bg-navy px-4 py-3 text-white placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/60 min-h-[48px]";
  const errorClasses = "mt-1 text-sm text-red-400";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto max-w-md space-y-4 text-left"
    >
      <div>
        <label htmlFor="wl-name" className="sr-only">{t("name")}</label>
        <input
          id="wl-name"
          type="text"
          placeholder={t("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "wl-name-err" : undefined}
          className={inputClasses}
          {...register("name")}
        />
        {errors.name && (
          <p id="wl-name-err" className={errorClasses} role="alert">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="wl-email" className="sr-only">{t("email")}</label>
        <input
          id="wl-email"
          type="email"
          placeholder={t("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "wl-email-err" : undefined}
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p id="wl-email-err" className={errorClasses} role="alert">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="wl-company" className="sr-only">{t("company")}</label>
        <input
          id="wl-company"
          type="text"
          placeholder={t("company")}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "wl-company-err" : undefined}
          className={inputClasses}
          {...register("company")}
        />
        {errors.company && (
          <p id="wl-company-err" className={errorClasses} role="alert">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="wl-locations" className="sr-only">{t("locations")}</label>
        <select
          id="wl-locations"
          aria-invalid={!!errors.locations}
          aria-describedby={errors.locations ? "wl-loc-err" : undefined}
          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.4)%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m2%204%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat`}
          {...register("locations")}
        >
          <option value="">{t("locations")}</option>
          {LOCATION_VALUES.map((val) => (
            <option key={val} value={val}>{t(`locationOptions.${val}`)}</option>
          ))}
        </select>
        {errors.locations && (
          <p id="wl-loc-err" className={errorClasses} role="alert">{errors.locations.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-center text-sm text-red-600" role="alert">{serverError}</p>
      )}

      <Button type="submit" variant="secondary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
};
