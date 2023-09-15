import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.http.post('http://localhost:8080/register/generateToken', this.user).subscribe(
      (response: any) => {
        // Armazenar o token na localStorage e redirecionar para a página de informações pessoais
        localStorage.setItem('token', response.Token);
        this.router.navigate(['/info']);
      },
      (error) => {
        console.log('Erro ao fazer login:', error);
      }
    );
  }
}
