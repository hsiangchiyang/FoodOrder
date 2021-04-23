import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  items: any = [ 'Burger', 'Steak'];
  summary: any;

  constructor() { }

  ngOnInit(): void {
  }

  updateSummary(event: any): void{
    console.log(event.value);
    this.summary = event.value;
  }

}
