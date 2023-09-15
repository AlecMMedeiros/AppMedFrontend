import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamsListComponent implements OnInit {
  exams: any[] = [];
  apiUrl: string = 'http://localhost:8080/exams/list';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadExams();
    
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(this.apiUrl, { headers }).subscribe(data => {
      this.exams = data;
    });
  }

  removeExams(id: number): void {
    const apiUrl = 'http://localhost:8080/exams/remove';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');
    this.http.request('DELETE', apiUrl, {
      headers: headers,
      body: { id: id },
      responseType: 'text'
    }).subscribe(response => {
      // Exibir o response como um alerta
      alert(response);
      // Recarregar a lista de médicos após a exclusão
      this.loadExams();
    }, error => {
      // Exibir o erro como um alerta, se houver
      alert('Erro ao excluir a exame: ' + error.message);
    });
  }


  loadExams(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(this.apiUrl, { headers }).subscribe(data => {
      this.exams = data;
    });
  }

}
