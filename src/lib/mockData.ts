import type { WorkoutExercise, DashboardStats } from "@/types";

export const mockStats: DashboardStats = {
  caloriesBurned: 2840,
  workoutsThisWeek: 4,
  streakDays: 12,
  goalProgress: 68,
};

export const mockExercises: WorkoutExercise[] = [
  { id: "1", name: "Barbell Squat", sets: 4, reps: 8, done: false },
  { id: "2", name: "Romanian Deadlift", sets: 3, reps: 10, done: false },
  { id: "3", name: "Leg Press", sets: 3, reps: 12, done: false },
  { id: "4", name: "Walking Lunges", sets: 3, reps: 16, done: false },
  { id: "5", name: "Calf Raises", sets: 4, reps: 20, done: false },
];

export const mockWeeklyActivity = [
  { day: "Mon", calories: 420, duration: 45, active: true },
  { day: "Tue", calories: 0, duration: 0, active: false },
  { day: "Wed", calories: 610, duration: 60, active: true },
  { day: "Thu", calories: 380, duration: 40, active: true },
  { day: "Fri", calories: 0, duration: 0, active: false },
  { day: "Sat", calories: 720, duration: 75, active: true },
  { day: "Sun", calories: 290, duration: 30, active: true },
];

export const mockRecentWorkouts = [
  {
    id: "1",
    name: "Upper Body Power",
    date: "Today",
    duration: "52 min",
    calories: 480,
    emoji: "💪",
  },
  {
    id: "2",
    name: "5K Morning Run",
    date: "Yesterday",
    duration: "28 min",
    calories: 310,
    emoji: "🏃",
  },
  {
    id: "3",
    name: "Yoga Flow",
    date: "2 days ago",
    duration: "45 min",
    calories: 180,
    emoji: "🧘",
  },
];

export const navItems = [
  { id: "dashboard", label: "Dashboard", emoji: "📊" },
  { id: "workouts", label: "Workouts", emoji: "💪" },
  { id: "nutrition", label: "Nutrition", emoji: "🥗" },
  { id: "progress", label: "Progress", emoji: "📈" },
  { id: "community", label: "Community", emoji: "👥" },
  { id: "settings", label: "Settings", emoji: "⚙️" },
];
