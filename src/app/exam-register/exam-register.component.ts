import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams-register',
  templateUrl: './exam-register.component.html',
  styleUrls: ['./exam-register.component.css']
})
export class ExamsRegisterComponent implements OnInit {
  exam = {
    name: '',
    description: '',
    medicId: null,
    consultationId: '',
    scheduled: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const token = localStorage.getItem('token');  // Pega o token da localStorage
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      }),
      withCredentials: true
     };
     this.http.post('http://localhost:8080/exams/register', this.exam, { ...httpOptions, responseType: 'text' })
     .subscribe(
       (response: any) => {
         alert(response);  // Exibe a mensagem de sucesso
         this.router.navigate(['/exam-list']);
       },
       (error) => {
         console.log('Erro ao cadastrar a exane:', error);
       }
     );
   
  }
}

