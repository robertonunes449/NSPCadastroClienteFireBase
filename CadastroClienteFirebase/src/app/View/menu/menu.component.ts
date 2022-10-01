import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Usuario/auth/auth.service';
import { UserServiceService } from 'src/app/Services/Usuario/user-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private userService: UserServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logoutUser();
    this.router.navigateByUrl('/');
  }

}
