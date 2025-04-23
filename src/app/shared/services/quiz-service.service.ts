import { environment } from './../../../environments/environment';
import { QuizResult } from './../models/answer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAnswer } from '../models/user-answer';
import { Observable } from 'rxjs';
import { Question } from '../models/quiz-model';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  private api_url = environment.apiUrl;
  readonly quiz = '/api/quiz'

  getQuestion(category:string):Observable<{quiz:Question[]}> {
    return this.http.get<{quiz:Question[]}>(`${this.api_url}${this.quiz}/random-questions/${category}`)
  }

  submitQuiz(answer:UserAnswer[]):Observable<{answer:QuizResult}> {
    return this.http.post<{answer:QuizResult}>(`${this.api_url}${this.quiz}/submit-quiz`,answer)
  }
}
