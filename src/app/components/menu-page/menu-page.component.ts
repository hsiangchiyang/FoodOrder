import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  // Tracking steps in menu page
  state: string = 'ordering';
  summary: any;

  constructor() { }

  ngOnInit(): void {
  }

  updateSummary(event: any): void{
    console.log(event.value);
    this.summary = event.value;
    this.state = 'summary';
  }
}
