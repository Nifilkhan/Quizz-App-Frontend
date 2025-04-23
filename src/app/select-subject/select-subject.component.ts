import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-subject',
  standalone: true,
  imports: [],
  templateUrl: './select-subject.component.html',
  styleUrl: './select-subject.component.css'
})
export class SelectSubjectComponent implements OnInit {

  @Output() selectSubject = new EventEmitter<string>();

  constructor(private router:Router) {}

  ngOnInit(): void {
      sessionStorage.removeItem('quizCompleted')
      console.log('session removed succesfully...',sessionStorage.removeItem('quizCompleted'))
  }

  onselect(subject:string) {
    this.selectSubject.emit(subject);
    sessionStorage.setItem('subjectSelected',subject)
    this.router.navigate(['/quiz-questions'],{state:{subject:subject}})
  }
}
