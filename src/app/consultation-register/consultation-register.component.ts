import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultations-register',
  templateUrl: './consultation-register.component.html',
  styleUrls: ['./consultation-register.component.css']
})
export class ConsultationsRegisterComponent implements OnInit {
  consultation = {
    name: '',
    description: '',
    medic: null,
    specialty: '',
    schedule: ""
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
     this.http.post('http://localhost:8080/consultations/register', this.consultation, { ...httpOptions, responseType: 'text' })
     .subscribe(
       (response: any) => {
         alert(response);  // Exibe a mensagem de sucesso
         this.router.navigate(['/consultation-list']);
       },
       (error) => {
         console.log('Erro ao cadastrar a consulta:', error);
       }
     );
   
  }
}

