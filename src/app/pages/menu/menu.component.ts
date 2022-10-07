import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../general/http/menu/menu.service";
import {MenuInterface} from "../../general/interface/menu.interface";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public dishSaled: MenuInterface[] = [];
  public selected: MenuInterface = null;

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.menuService.get().subscribe(
      (res: {dishSaled: MenuInterface[]}) => {
        debugger
        this.dishSaled = res.dishSaled;
        this.selected = this.dishSaled[0]
      }
    )
  }

  changeSelectedDishes(item: MenuInterface) {
    this.selected = item;
  }

}

