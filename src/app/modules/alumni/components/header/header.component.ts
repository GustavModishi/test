import { AuthService } from './../../../../services/auth.service';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }

}
