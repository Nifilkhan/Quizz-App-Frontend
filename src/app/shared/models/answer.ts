export interface QuizResult {
  score: number;
  totalLength: number;
  finalResult: QuestionResult[];
}

export interface QuestionResult {
  question: string;
  options: { [key: string]: string };
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}
