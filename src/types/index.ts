// ─── Auth / Onboarding ────────────────────────────────────────────────────────

export type FitnessGoal =
  | "lose_weight"
  | "build_muscle"
  | "stay_active"
  | "improve_flexibility"
  | "eat_healthier"
  | "reduce_stress";

export type ActivityLevel =
  | "sedentary"
  | "lightly_active"
  | "moderately_active"
  | "very_active"
  | "athlete";

export type Gender = "male" | "female" | "non_binary" | "prefer_not_to_say";

export interface OnboardingData {
  // Step 1
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  // Step 2
  dateOfBirth: string;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  weightUnit: "kg" | "lbs";
  // Step 3
  goals: FitnessGoal[];
  // Step 4
  activityLevel: ActivityLevel;
  // Step 5
  username: string;
  bio: string;
  avatarUrl: string;
  notifications: {
    workoutReminders: boolean;
    progressUpdates: boolean;
    weeklyReport: boolean;
  };
}

// ─── User ─────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  fullName: string;
  email: string;
  username: string;
  bio?: string;
  avatarUrl?: string;
  goals: FitnessGoal[];
  activityLevel: ActivityLevel;
  createdAt: string;
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export interface WorkoutExercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  done: boolean;
}

export interface DashboardStats {
  caloriesBurned: number;
  workoutsThisWeek: number;
  streakDays: number;
  goalProgress: number; // 0–100
}
