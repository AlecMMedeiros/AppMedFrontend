import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    displayName: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.http.post('http://localhost:8080/register', this.user, {responseType: 'text'}).subscribe(
      (response: any) => {
        alert(response); 
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('Erro ao registrar:', error);
      }
    );
  }
}


