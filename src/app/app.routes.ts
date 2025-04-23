import { Routes } from '@angular/router';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { SelectSubjectComponent } from './select-subject/select-subject.component';
import { quizCompletionGuard } from './shared/guard/quiz-completion.guard';
import { questionGuard } from './shared/guard/question-guard.guard';

export const routes: Routes = [
  {
    path:'',component:SelectSubjectComponent,pathMatch:'full'
  },
  {
    path:'quiz-questions' , component:QuizQuestionsComponent,canActivate:[questionGuard]
  },
  {
    path:'quiz-result',component:QuizResultComponent,canActivate:[quizCompletionGuard]
  }
];
