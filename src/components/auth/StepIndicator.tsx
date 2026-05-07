"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Account", "Personal", "Goals", "Activity", "Profile"];

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full px-6 pt-6 pb-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-[var(--orange)] tracking-widest uppercase">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-xs text-white/40 font-medium">
          {stepLabels[currentStep - 1]}
        </span>
      </div>

      <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--orange), var(--orange-bright))",
            boxShadow: "0 0 12px oklch(0.65 0.22 35 / 0.6)",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="flex items-center justify-between mt-3">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepNum = i + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <motion.div
                animate={{
                  scale: isCurrent ? 1.2 : 1,
                  backgroundColor:
                    isCompleted || isCurrent
                      ? "oklch(0.65 0.22 35)"
                      : "oklch(0.25 0.01 20)",
                  borderColor:
                    isCompleted || isCurrent
                      ? "oklch(0.65 0.22 35)"
                      : "oklch(0.35 0.01 20)",
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
              >
                {isCompleted ? (
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                ) : (
                  <span
                    className={`text-[10px] font-black ${isCurrent ? "text-white" : "text-white/30"}`}
                  >
                    {stepNum}
                  </span>
                )}
              </motion.div>
              <span
                className={`text-[9px] font-medium hidden sm:block ${
                  isCurrent
                    ? "text-[var(--orange)]"
                    : isCompleted
                      ? "text-white/50"
                      : "text-white/20"
                }`}
              >
                {stepLabels[i]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
