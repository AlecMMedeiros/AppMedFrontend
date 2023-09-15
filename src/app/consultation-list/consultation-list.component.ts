import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-consultations-list',
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.css']
})
export class ConsultationsListComponent implements OnInit {
  consultations: any[] = [];
  apiUrl: string = 'http://localhost:8080/consultations/list';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadConsultations();
    
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(this.apiUrl, { headers }).subscribe(data => {
      this.consultations = data;
    });
  }

  removeConsultation(id: number): void {
    const apiUrl = 'http://localhost:8080/consultations/remove';
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
      this.loadConsultations();
    }, error => {
      // Exibir o erro como um alerta, se houver
      alert('Erro ao excluir a consulta: ' + error.message);
    });
  }


  loadConsultations(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(this.apiUrl, { headers }).subscribe(data => {
      this.consultations = data;
    });
  }

}

