import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/services/quiz-service.service';
import { Question } from '../shared/models/quiz-model';
import { CommonModule } from '@angular/common';
import { UserAnswer } from '../shared/models/user-answer';
import { FormsModule } from '@angular/forms';
import { QuizResult } from '../shared/models/answer';
import { Router } from '@angular/router';
import { QuizResultComponent } from "../quiz-result/quiz-result.component";
import { SelectSubjectComponent } from "../select-subject/select-subject.component";
import { LoaderComponentComponent } from "../loader-component/loader-component.component";

@Component({
  selector: 'app-quiz-questions',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectSubjectComponent, LoaderComponentComponent],
  templateUrl: './quiz-questions.component.html',
  styleUrl: './quiz-questions.component.css',
})
export class QuizQuestionsComponent implements OnInit {
  questions: Question[] = [];
  question:UserAnswer [] = [];
  result:QuizResult | null = null;
  timer:number = 250;
  interval:any;
  // isTimerRunning:boolean = false;
  isLoading:boolean = false;
  isSubject:boolean = false;

  isDarkMode: boolean = false;

  constructor(private questionService: QuizService,private router:Router) {}

  ngOnInit() {
    const state = history.state;
    const selectedSubject = state.subject;
    console.log('slected subject',selectedSubject)
    if(selectedSubject) {
      this.getQuestion(selectedSubject)
    }
    this.startTimer();

    console.log('current state...',state)
  }

  back() {
    this.router.navigate(['/'])
  }

  startTimer() {
    // this.isTimerRunning = true;
    this.interval = setInterval(() => {
      if(this.timer > 0) {
        this.timer--;
      }else {
        clearInterval(this.interval);
        this.submitQuiz();
        // this.isTimerRunning = false;
      }
    },1000)
  }

  get displayTime() {
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }



  getQuestion(category:string) {
    this.isLoading = true;
    this.questionService.getQuestion(category).subscribe({
      next: (response) => {
        this.questions = response.quiz;
        this.isLoading = false;
        console.log(response);
      },error:(err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }

  selectedAnswer(index: number, selected: string) {
    this.question[index] = {questionId: this.questions[index]._id, selectedAnswer:selected};
    console.log('selected...', index, selected);
  }

  submitQuiz() {
    clearInterval(this.interval);
    this.isLoading = true;
    const finalPayload = this.question.map((q,index) => ({
      ...q,
      selectedAnswer:this.question[index].selectedAnswer
    }))

    console.log('final payload....',finalPayload)
    this.questionService.submitQuiz(finalPayload).subscribe({
      next:(value) => {
        console.log(value.answer);
        sessionStorage.setItem('quizCompleted','true');
        this.result = value.answer;
        this.isLoading = false;
        this.router.navigate(['/quiz-result'],{state:{result:value.answer}})
        console.log('result...', value.answer);
      },error:(err) => {
        this.isLoading=false;
        console.log('error...', err);
      },
    })
  }
}
