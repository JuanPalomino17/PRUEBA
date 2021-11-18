import { MenuService } from './../../../service/menu.service';
import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/interface/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _menuService: MenuService) { }
  menu: menu [] =[];

  ngOnInit(): void {
    this.cargarMenu();
  }
  cargarMenu(){
    this._menuService.getMenu().subscribe(data =>{
      this.menu = data;
    })
  }

}
