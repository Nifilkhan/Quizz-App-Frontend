import { Component, Input, OnInit, Pipe } from '@angular/core';
import { QuizResult } from '../shared/models/answer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css'
})
export class QuizResultComponent implements OnInit {
   result: QuizResult | null = null;

  ngOnInit(): void {
      const state = history.state;
      this.result = state.result;
      console.log('result...', this.result);
  }
}
