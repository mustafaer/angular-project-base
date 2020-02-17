import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  public _opened = true;

  constructor() {
  }

  public _toggleSidebar() {
    this._opened = !this._opened;
    localStorage.setItem('sidebarIsOpen', String(this._opened));
  }

  ngOnInit(): void {
    const isOpened = localStorage.getItem('sidebarIsOpen');
    const isTrueSet = (isOpened === 'true');
    if (isOpened && [true, false].includes(isTrueSet)) {
      this._opened = isTrueSet;
    } else {
      this._opened = true;
    }
  }

}
