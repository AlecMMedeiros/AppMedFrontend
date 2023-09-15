import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;
  showMedicSubmenu: boolean = false;
  showConsultationSubmenu: boolean = false;
  showExamSubmenu: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkAuthentication(event.urlAfterRedirects);
      }
    });
  }

  checkAuthentication(url: string) {
    const guardedRoutes = [
      '/medics-register', 
      '/info', 
      '/medics-list', 
      '/consultation-register', 
      '/consultation-list', 
      '/exam-register', 
      '/exam-list'
    ];
  
    // Verificar se a URL atual está em guardedRoutes
    this.isAuthenticated = guardedRoutes.includes(url);
  }
  logout() {
    localStorage.removeItem('token'); // Remove o token do localStorage
    this.router.navigate(['/login']); // Redireciona para a tela de login
  }
}
