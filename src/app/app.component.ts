import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizQuestionsComponent } from "./quiz-questions/quiz-questions.component";
import { QuizResultComponent } from "./quiz-result/quiz-result.component";
import { LoaderComponentComponent } from "./loader-component/loader-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizApp';
}
