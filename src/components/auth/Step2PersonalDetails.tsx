"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Ruler, Weight } from "lucide-react";
import { useAuthStore } from "@/store";
import type { Gender } from "@/types";

const schema = z.object({
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "non_binary", "prefer_not_to_say"]),
  heightCm: z.number().min(100).max(250),
  weightKg: z.number().min(30).max(300),
  weightUnit: z.enum(["kg", "lbs"]),
});

type FormData = z.infer<typeof schema>;

const genders: { value: Gender; label: string; emoji: string }[] = [
  { value: "male", label: "Male", emoji: "♂" },
  { value: "female", label: "Female", emoji: "♀" },
  { value: "non_binary", label: "Non-binary", emoji: "⚧" },
  { value: "prefer_not_to_say", label: "Prefer not to say", emoji: "—" },
];

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
}

export function Step2PersonalDetails({ onNext, onBack }: Step2Props) {
  const { updateOnboarding } = useAuthStore();
  const [unit, setUnit] = useState<"kg" | "lbs">("kg");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      heightCm: 170,
      weightKg: 70,
      weightUnit: "kg",
      gender: "male",
    },
  });

  const heightVal = watch("heightCm");
  const weightVal = watch("weightKg");
  const displayWeight =
    unit === "lbs" ? Math.round(weightVal * 2.205) : weightVal;
  const heightFt = `${Math.floor(heightVal / 30.48)}'${Math.round((heightVal % 30.48) / 2.54)}"`;

  const onSubmit = (data: FormData) => {
    updateOnboarding({
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      heightCm: data.heightCm,
      weightKg: data.weightKg,
      weightUnit: unit,
    });
    onNext();
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2
          className="text-3xl lg:text-4xl font-black uppercase text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Personal <span className="text-[var(--orange)]">Details</span>
        </h2>
        <p className="text-white/50 text-sm">
          Help us personalize your experience
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Date of Birth */}
        <div>
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-1.5">
            Date of Birth
          </label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
            <input
              {...register("dateOfBirth")}
              type="date"
              max={new Date().toISOString().split("T")[0]}
              className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border text-white text-sm focus:outline-none focus:bg-white/8 transition-all duration-200 [color-scheme:dark] ${
                errors.dateOfBirth
                  ? "border-red-500/60"
                  : "border-white/10 focus:border-[var(--orange)]/60"
              }`}
            />
          </div>
          {errors.dateOfBirth && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5"
            >
              ⚠ {errors.dateOfBirth.message}
            </motion.p>
          )}
        </div>

        {/* Gender pills */}
        <div>
          <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
            Gender
          </label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-2 gap-2">
                {genders.map((g) => (
                  <motion.button
                    key={g.value}
                    type="button"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => field.onChange(g.value)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      field.value === g.value
                        ? "border-[var(--orange)] bg-[var(--orange)]/15 text-white"
                        : "border-white/10 bg-white/5 text-white/50 hover:border-white/25 hover:text-white/80"
                    }`}
                  >
                    <span className="text-base">{g.emoji}</span>
                    {g.label}
                    {field.value === g.value && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-4 h-4 rounded-full bg-[var(--orange)] flex items-center justify-center text-white text-[10px]"
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
            )}
          />
        </div>

        {/* Height slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider flex items-center gap-1.5">
              <Ruler className="w-3.5 h-3.5" /> Height
            </label>
            <div className="flex items-baseline gap-1">
              <span
                className="text-2xl font-black text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {heightVal}
              </span>
              <span className="text-white/40 text-sm">cm</span>
              <span className="text-white/25 text-xs ml-1">({heightFt})</span>
            </div>
          </div>
          <div className="relative py-2">
            <input
              {...register("heightCm", { valueAsNumber: true })}
              type="range"
              min={140}
              max={220}
              step={1}
              className="w-full h-1.5 appearance-none rounded-full outline-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--orange) 0%, var(--orange) ${((heightVal - 140) / 80) * 100}%, oklch(0.25 0.01 20) ${((heightVal - 140) / 80) * 100}%, oklch(0.25 0.01 20) 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between text-white/20 text-xs mt-1">
            <span>140cm</span>
            <span>220cm</span>
          </div>
        </div>

        {/* Weight slider + unit toggle */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-white/60 uppercase tracking-wider flex items-center gap-1.5">
              <Weight className="w-3.5 h-3.5" /> Weight
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-baseline gap-1">
                <span
                  className="text-2xl font-black text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {displayWeight}
                </span>
                <span className="text-white/40 text-sm">{unit}</span>
              </div>
              <div className="flex rounded-lg border border-white/15 overflow-hidden">
                {(["kg", "lbs"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => {
                      setUnit(u);
                      setValue("weightUnit", u);
                    }}
                    className={`px-3 py-1 text-xs font-bold transition-all duration-200 ${unit === u ? "bg-[var(--orange)] text-white" : "bg-transparent text-white/40 hover:text-white/70"}`}
                  >
                    {u.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="relative py-2">
            <input
              {...register("weightKg", { valueAsNumber: true })}
              type="range"
              min={40}
              max={180}
              step={1}
              className="w-full h-1.5 appearance-none rounded-full outline-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--orange) 0%, var(--orange) ${((weightVal - 40) / 140) * 100}%, oklch(0.25 0.01 20) ${((weightVal - 40) / 140) * 100}%, oklch(0.25 0.01 20) 100%)`,
              }}
            />
          </div>
          <div className="flex justify-between text-white/20 text-xs mt-1">
            <span>40kg</span>
            <span>180kg</span>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-3.5 rounded-xl border border-white/15 text-white/60 font-bold text-sm hover:border-white/30 hover:text-white transition-all duration-200"
          >
            ← Back
          </button>
          <motion.button
            type="submit"
            disabled={!isValid}
            whileTap={{ scale: 0.98 }}
            className="flex-[2] py-3.5 rounded-xl font-bold text-base text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: isValid
                ? "linear-gradient(135deg, var(--orange), var(--orange-bright))"
                : "oklch(0.25 0.01 20)",
              boxShadow: isValid
                ? "0 0 30px oklch(0.65 0.22 35 / 0.3)"
                : "none",
            }}
          >
            Continue →
          </motion.button>
        </div>
      </form>
    </div>
  );
}
