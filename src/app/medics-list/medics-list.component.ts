import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-medics-list',
  templateUrl: './medics-list.component.html',
  styleUrls: ['./medics-list.component.css']
})
export class MedicsListComponent implements OnInit {
  medics: any[] = [];
  apiUrl: string = 'http://localhost:8080/medics/list';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadMedics();
    
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(this.apiUrl, { headers }).subscribe(data => {
      this.medics = data;
    });
  }

  removeMedic(id: number): void {
    const apiUrl = 'http://localhost:8080/medics/remove';
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
      this.loadMedics();
    }, error => {
      // Exibir o erro como um alerta, se houver
      alert('Erro ao excluir o médico: ' + error.message);
    });
  }


  loadMedics(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(this.apiUrl, { headers }).subscribe(data => {
      this.medics = data;
    });
  }

}

