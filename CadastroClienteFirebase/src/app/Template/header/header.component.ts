import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Models/Usuario/Usuario';
import { AuthService } from 'src/app/Services/Usuario/auth/auth.service';
import { UserServiceService } from 'src/app/Services/Usuario/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$ : Observable<Usuario>;
  authenticated$: Observable<boolean>;

  constructor(
    private auth: AuthService,
    private userService: UserServiceService,
    private router: Router
  ) { 
    this.user$ = this.userService.getUser();
    this.authenticated$ = this.userService.authenticated();
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logoutUser();
    this.router.navigateByUrl('');
  }

}
