import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medics-register',
  templateUrl: './medics-register.component.html',
  styleUrls: ['./medics-register.component.css']
})
export class MedicsRegisterComponent implements OnInit {
  medic = {
    name: '',
    local: '',
    crm: null,
    specialty: ''
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
     this.http.post('http://localhost:8080/medics/register', this.medic, { ...httpOptions, responseType: 'text' })
     .subscribe(
       (response: any) => {
         alert(response);  // Exibe a mensagem de sucesso
         this.router.navigate(['/medics-list']);
       },
       (error) => {
         console.log('Erro ao cadastrar o médico:', error);
       }
     );
   
  }
}

