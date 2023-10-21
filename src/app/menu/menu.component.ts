import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{

  menuCategories: any;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(data => {
      this.menuCategories = data;
      console.log(this.menuCategories);
    });
  }

  // menuCategories = [
  //   {
  //     name: 'Starters',
  //     items: [
  //       {
  //         imgSrc: 'assets/img/menu/menu-item-1.png',
  //         title: 'Magnam Tiste',
  //         ingredients: 'Lorem, deren, trataro, filede, nerada',
  //         price: '$5.95',
  //       },
  //       {
  //         imgSrc: 'assets/img/menu/menu-item-2.png',
  //         title: 'Aut Luia',
  //         ingredients: 'Ingredient 1, Ingredient 2',
  //         price: '$7.95',
  //       },
  //       {
  //         imgSrc: 'assets/img/menu/menu-item-3.png',
  //         title: 'Aut Luia',
  //         ingredients: 'Ingredient 1, Ingredient 2',
  //         price: '$7.95',
  //       },
  //       {
  //         imgSrc: 'assets/img/menu/menu-item-4.png',
  //         title: 'Aut Luia',
  //         ingredients: 'Ingredient 1, Ingredient 2',
  //         price: '$7.95',
  //       },
  //       {
  //         imgSrc: 'assets/img/menu/menu-item-5.png',
  //         title: 'Aut Luia',
  //         ingredients: 'Ingredient 1, Ingredient 2',
  //         price: '$7.95',
  //       },
  //       {
  //         imgSrc: 'assets/img/menu/menu-item-6.png',
  //         title: 'Aut Luia',
  //         ingredients: 'Ingredient 1, Ingredient 2',
  //         price: '$7.95',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Breakfast',
  //     items: [
  //       {
  //         title: 'Breakfast Item 1',
  //         imgSrc: 'assets/img/menu/menu-item-2.png',
  //         ingredients: 'Ingredients for breakfast item 1',
  //         price: '$6.95',
  //       },
  //       // ...more items
  //     ],
  //   },
  //   {
  //     name: 'Lunch',
  //     items: [
  //       {
  //         title: 'Breakfast Item 1',
  //         imgSrc: 'assets/img/menu/menu-item-2.png',
  //         ingredients: 'Ingredients for breakfast item 1',
  //         price: '$6.95',
  //       },
  //       // ...more items
  //     ],
  //   },
  // ];
}
