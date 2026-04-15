"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export const WhatsAppFloating = () => {
  const t = useTranslations("whatsapp");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Hover chat preview */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-72 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-whatsapp/20">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-whatsapp">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.329 0-4.502-.744-6.28-2.007l-.364-.264-3.088 1.035 1.035-3.088-.264-.364A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                {/* Online dot */}
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-base bg-whatsapp" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Voztre AI</p>
                <p className="text-[10px] text-whatsapp/70">online</p>
              </div>
            </div>

            {/* Chat preview */}
            <div className="px-4 py-4">
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.03] px-3.5 py-2.5">
                <p className="text-[13px] leading-relaxed text-white/70">
                  {t("hoverMessage")}
                </p>
                <p className="mt-1 text-right text-[10px] text-white/20">now</p>
              </div>
            </div>

            {/* Input hint */}
            <div className="border-t border-white/[0.04] px-4 py-3">
              <div className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
                <p className="text-[11px] text-white/15">Reply...</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.a
        href="https://wa.me/521234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("ariaLabel")}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp cursor-pointer"
        style={{ animation: "whatsapp-pulse 2.5s ease-in-out infinite" }}
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.329 0-4.502-.744-6.28-2.007l-.364-.264-3.088 1.035 1.035-3.088-.264-.364A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>

        {/* Notification badge */}
        <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-lg">
          {t("notification")}
        </span>
      </motion.a>
    </div>
  );
};
