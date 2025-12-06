// Types for the Recomeço application

export interface User {
  id: string
  pseudonym: string
  createdAt: Date
  currentDay: number
  currentWeek: number
}

export interface OnboardingData {
  pseudonym: string
  age: number
  mainGoal: string
  triggers: string[]
  motivation: string
  privacyConsent: boolean
}

export interface DailyCheckIn {
  id: string
  userId: string
  date: Date
  mood: 1 | 2 | 3 | 4 | 5
  hadUrge: boolean
  hadRelapse: boolean
  triggers: string[]
  notes: string
  victories: string[]
}

export interface WeekModule {
  week: number
  title: string
  description: string
  focus: string
  days: DayContent[]
}

export interface DayContent {
  day: number
  title: string
  videoScript: string
  exercises: Exercise[]
  checkInPrompts: string[]
}

export interface Exercise {
  id: string
  title: string
  description: string
  type: 'reflection' | 'breathing' | 'journaling' | 'action'
  duration: number
  instructions: string[]
}

export interface ProgressStats {
  totalDays: number
  currentStreak: number
  longestStreak: number
  totalCheckIns: number
  urgesResisted: number
  relapses: number
  moodAverage: number
}

export interface AIMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}
