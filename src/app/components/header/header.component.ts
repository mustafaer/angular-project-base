import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  public toggleSidebar() {
    document.getElementById('toggle_sidebar_button').click();
  }

  ngOnInit(): void {
  }

  logOut() {
    // clear sessionsStorage, localeStorage and go login page
    this.authService.ServerLogout();
  }
}
