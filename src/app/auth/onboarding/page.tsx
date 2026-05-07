"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Target,
  Dumbbell,
  Calendar,
  CheckCircle2,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Flame,
  Trophy,
  Heart,
  Moon,
  Loader2,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  password: string;
  goals: string[];
  fitnessLevel: string;
  daysPerWeek: number;
  preferredTime: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const GOALS = [
  { id: "lose-weight", label: "Lose Weight", icon: Flame, color: "#FF6B35" },
  {
    id: "build-muscle",
    label: "Build Muscle",
    icon: Dumbbell,
    color: "#FF6B35",
  },
  {
    id: "improve-endurance",
    label: "Endurance",
    icon: Heart,
    color: "#FF6B35",
  },
  { id: "stay-active", label: "Stay Active", icon: Target, color: "#FF6B35" },
  { id: "stress-relief", label: "Stress Relief", icon: Moon, color: "#FF6B35" },
  { id: "compete", label: "Compete", icon: Trophy, color: "#FF6B35" },
];

const FITNESS_LEVELS = [
  {
    id: "beginner",
    label: "Beginner",
    desc: "Just getting started, less than 6 months experience",
  },
  {
    id: "intermediate",
    label: "Intermediate",
    desc: "Consistent for 1–2 years, know the basics",
  },
  {
    id: "advanced",
    label: "Advanced",
    desc: "3+ years, train with intensity and structure",
  },
  {
    id: "athlete",
    label: "Athlete",
    desc: "Competitive or professional level training",
  },
];

const TIMES = [
  "Early Morning",
  "Morning",
  "Afternoon",
  "Evening",
  "Late Night",
];

const STEP_LABELS = ["Account", "Goals", "Level", "Schedule", "Done"];

// ─── Step Components ──────────────────────────────────────────────────────────

function StepAccount({
  data,
  onChange,
  onNext,
  loading,
  error,
  onGoogle,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
  onNext: () => void;
  loading: boolean;
  error: string;
  onGoogle: () => void;
}) {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"signup" | "signin">("signup");

  return (
    <div className="space-y-6">
      <div>
        <h2
          className="text-3xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {mode === "signup" ? "Create your account" : "Welcome back"}
        </h2>
        <p className="text-white/50 mt-1 text-sm">
          {mode === "signup"
            ? "Join thousands of athletes on FitTrack"
            : "Sign in to continue your journey"}
        </p>
      </div>

      {/* Google */}
      <button
        onClick={onGoogle}
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white font-semibold text-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/30 text-xs uppercase tracking-widest">
          or
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Name (signup only) */}
      {mode === "signup" && (
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-semibold">
            Full Name
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Alex Johnson"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
          />
        </div>
      )}

      <div>
        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="alex@example.com"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-semibold">
          Password
        </label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            value={data.password}
            onChange={(e) => onChange("password", e.target.value)}
            placeholder="Min. 8 characters"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
          >
            {show ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
          {error}
        </p>
      )}

      <button
        onClick={onNext}
        disabled={loading}
        className="w-full py-3.5 bg-[#FF6B35] hover:bg-[#ff7f4f] text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {mode === "signup" ? "Create Account" : "Sign In"}{" "}
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-sm text-white/40">
        {mode === "signup"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <button
          onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
          className="text-[#FF6B35] hover:underline font-semibold"
        >
          {mode === "signup" ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}

function StepGoals({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string[]) => void;
}) {
  const toggle = (id: string) => {
    const current = data.goals;
    const updated = current.includes(id)
      ? current.filter((g) => g !== id)
      : [...current, id];
    onChange("goals", updated);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2
          className="text-3xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          What's your goal?
        </h2>
        <p className="text-white/50 mt-1 text-sm">
          Pick all that apply — we'll personalize your plan
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {GOALS.map((goal) => {
          const Icon = goal.icon;
          const selected = data.goals.includes(goal.id);
          return (
            <button
              key={goal.id}
              onClick={() => toggle(goal.id)}
              className={`relative flex flex-col items-start gap-3 p-4 rounded-xl border transition-all text-left ${
                selected
                  ? "border-[#FF6B35] bg-[#FF6B35]/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${selected ? "bg-[#FF6B35]" : "bg-white/10"}`}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span
                className={`text-sm font-bold uppercase tracking-wide ${selected ? "text-white" : "text-white/60"}`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {goal.label}
              </span>
              {selected && (
                <CheckCircle2 className="absolute top-3 right-3 w-4 h-4 text-[#FF6B35]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepLevel({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2
          className="text-3xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Your fitness level
        </h2>
        <p className="text-white/50 mt-1 text-sm">
          Be honest — we'll calibrate intensity to match you
        </p>
      </div>
      <div className="space-y-3">
        {FITNESS_LEVELS.map((level, i) => {
          const selected = data.fitnessLevel === level.id;
          return (
            <button
              key={level.id}
              onClick={() => onChange("fitnessLevel", level.id)}
              className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                selected
                  ? "border-[#FF6B35] bg-[#FF6B35]/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-2xl font-black tabular-nums ${selected ? "text-[#FF6B35]" : "text-white/20"}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  0{i + 1}
                </span>
                <div>
                  <p
                    className={`font-bold text-sm uppercase tracking-wider ${selected ? "text-white" : "text-white/60"}`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {level.label}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5">{level.desc}</p>
                </div>
              </div>
              {selected && (
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepSchedule({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (k: keyof FormData, v: string | number) => void;
}) {
  return (
    <div className="space-y-8">
      <div>
        <h2
          className="text-3xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Build your schedule
        </h2>
        <p className="text-white/50 mt-1 text-sm">
          Consistency beats intensity — let's find your rhythm
        </p>
      </div>

      {/* Days per week */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">
          Days per week
        </label>
        <div className="flex items-center gap-3">
          {[2, 3, 4, 5, 6, 7].map((d) => (
            <button
              key={d}
              onClick={() => onChange("daysPerWeek", d)}
              className={`flex-1 py-3 rounded-xl text-sm font-black uppercase transition-all ${
                data.daysPerWeek === d
                  ? "bg-[#FF6B35] text-white"
                  : "bg-white/5 border border-white/10 text-white/40 hover:border-white/20 hover:text-white/70"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {d}
            </button>
          ))}
        </div>
        <p className="text-white/30 text-xs mt-2">
          {data.daysPerWeek} day{data.daysPerWeek !== 1 ? "s" : ""} / week
          selected
        </p>
      </div>

      {/* Preferred time */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-white/40 mb-4 font-semibold">
          Preferred workout time
        </label>
        <div className="grid grid-cols-1 gap-2">
          {TIMES.map((time) => (
            <button
              key={time}
              onClick={() => onChange("preferredTime", time)}
              className={`w-full py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all text-left ${
                data.preferredTime === time
                  ? "bg-[#FF6B35]/10 border border-[#FF6B35] text-white"
                  : "bg-white/5 border border-white/10 text-white/40 hover:border-white/20"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepDone({ data }: { data: FormData }) {
  return (
    <div className="text-center space-y-6 py-4">
      <div className="relative inline-flex">
        <div className="w-24 h-24 rounded-full bg-[#FF6B35]/20 flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-[#FF6B35]" />
        </div>
        <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF6B35] rounded-full animate-ping opacity-60" />
      </div>
      <div>
        <h2
          className="text-4xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          You're all set{data.name ? `, ${data.name.split(" ")[0]}` : ""}!
        </h2>
        <p className="text-white/50 mt-2 text-sm max-w-xs mx-auto">
          Your personalized FitTrack plan is ready. Time to push your limits.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { label: "Goals", value: data.goals.length || "—" },
          { label: "Days/Week", value: data.daysPerWeek },
          {
            label: "Level",
            value: data.fitnessLevel
              ? data.fitnessLevel.charAt(0).toUpperCase() +
                data.fitnessLevel.slice(1)
              : "—",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white/5 border border-white/10 rounded-xl p-3"
          >
            <p
              className="text-2xl font-black text-[#FF6B35]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {stat.value}
            </p>
            <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    goals: [],
    fitnessLevel: "",
    daysPerWeek: 4,
    preferredTime: "Morning",
  });

  const updateField = (
    key: keyof FormData,
    value: string | string[] | number,
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  // Validate step 0
  const validateAccount = () => {
    if (!formData.email) return "Email is required";
    if (!formData.password || formData.password.length < 8)
      return "Password must be at least 8 characters";
    return "";
  };

  const handleAccountNext = async () => {
    const err = validateAccount();
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid credentials. Try again or create a new account.");
        setLoading(false);
        return;
      }
      goNext();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 4));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleFinish = () => {
    router.push("/dashboard");
  };

  // Can proceed on current step?
  const canProceed = () => {
    if (step === 1) return formData.goals.length > 0;
    if (step === 2) return !!formData.fitnessLevel;
    if (step === 3) return !!formData.preferredTime;
    return true;
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_20)] flex items-center justify-center p-4">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF6B35]/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 justify-center">
          <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span
            className="text-xl font-black tracking-wider text-white uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            FitTrack
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            {STEP_LABELS.map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    i < step
                      ? "bg-[#FF6B35] text-white"
                      : i === step
                        ? "bg-[#FF6B35]/20 border border-[#FF6B35] text-[#FF6B35]"
                        : "bg-white/5 border border-white/10 text-white/20"
                  }`}
                >
                  {i < step ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider hidden sm:block ${
                    i <= step ? "text-white/60" : "text-white/20"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#FF6B35] rounded-full"
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 backdrop-blur-sm overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {step === 0 && (
                <StepAccount
                  data={formData}
                  onChange={(k, v) => updateField(k, v as string)}
                  onNext={handleAccountNext}
                  loading={loading}
                  error={error}
                  onGoogle={handleGoogle}
                />
              )}
              {step === 1 && (
                <StepGoals
                  data={formData}
                  onChange={(k, v) => updateField(k, v)}
                />
              )}
              {step === 2 && (
                <StepLevel
                  data={formData}
                  onChange={(k, v) => updateField(k, v as string)}
                />
              )}
              {step === 3 && (
                <StepSchedule
                  data={formData}
                  onChange={(k, v) => updateField(k, v)}
                />
              )}
              {step === 4 && <StepDone data={formData} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {step > 0 && (
          <div className="flex items-center justify-between mt-5 gap-3">
            {step < 4 ? (
              <>
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 px-5 py-3 text-sm text-white/40 hover:text-white/70 transition-colors font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={goNext}
                  disabled={!canProceed()}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#FF6B35] hover:bg-[#ff7f4f] text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={handleFinish}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#FF6B35] hover:bg-[#ff7f4f] text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all hover:scale-[1.02]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Go to Dashboard <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
