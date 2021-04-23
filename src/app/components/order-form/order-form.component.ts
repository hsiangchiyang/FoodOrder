import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray  } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Output() private onFormGroupChange = new EventEmitter<any>();
  // Item list
  items = ['Burger', 'Steak'];
  itemselected = '';

  orderForm = this.fb.group({
    cart: this.fb.array([
    ], Validators.required)
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get cart(){
    return this.orderForm.get('cart') as FormArray;
  }
  openItem(item: string){
    this.itemselected = item;
  }
  addItem(event: any) {
    console.log(event.value);
    this.cart.push(this.fb.control(event.value));
    this.itemselected = '';
  }
  onSubmit() {
    console.warn(this.orderForm.value);
    if (this.orderForm.valid){
      console.log("Order Form Submitted");
      this.onFormGroupChange.emit(this.orderForm);
    }else{
      console.log("Order Form Invalid");
    }
  }
}
