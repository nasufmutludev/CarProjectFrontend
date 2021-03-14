import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [   
    { path: '/car', title: 'Car',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/brand', title: 'Brand',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/color', title: 'Color',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/customer', title: 'Customer',  icon:'ni-bullet-list-67 text-red', class: '' },   
    { path: '/rentals', title: 'Rentals',  icon:'ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
