export type ViewType = 'landing' | 'dashboard' | 'courses' | 'subjects' | 'quiz' | 'results';

export interface Question {
  id: number;
  text: string;
  choices: {
    key: string; // 'ก' | 'ข' | 'ค' | 'ง'
    text: string;
  }[];
  correctChoice: string; // 'ก' | 'ข' | 'ค' | 'ง'
  explanation: string;
  category: string;
}

export interface Quiz {
  id: string;
  title: string;
  category: string;
  durationMinutes: number;
  questions: Question[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string; // 'Ethics' | 'Law' | 'Competencies'
  progress: number; // 0 to 100
  imageUrl: string;
  rating?: number;
  durationHours: number;
  price: number;
  description: string;
}

export interface SuccessStory {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}

export interface ScheduleItem {
  day: string;
  month: string;
  title: string;
  time: string;
  instructor: string;
  opacity?: boolean;
}

export interface UserProgress {
  overallProgressPercentage: number;
  gardenLevelName: string;
  weeklyGrowthPercentage: number;
  completedExams: {
    [quizId: string]: {
      score: number;
      total: number;
      dateString: string;
      completed: boolean;
    };
  };
}
