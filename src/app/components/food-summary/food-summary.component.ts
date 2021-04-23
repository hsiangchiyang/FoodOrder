import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-summary',
  templateUrl: './food-summary.component.html',
  styleUrls: ['./food-summary.component.css']
})
export class FoodSummaryComponent implements OnInit {
  @Input() items: any;
  constructor() { }

  ngOnInit(): void {
  }

}
