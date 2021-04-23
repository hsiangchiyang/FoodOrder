import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {potatoValidator} from '../../validators/potato-number.directive';
import {donenessValidator} from '../../validators/steak-doneness.directive';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {
  @Input() itemType: any = '';
  @Output() private onFormGroupChange = new EventEmitter<any>();

  // Hard coded food options reference
  major_list: {[index: string]: any}  = {
    "Burger": {
      'condimentsOptions': [ 'ketchup', 'mustard', 'lettuce', 'tomato'],
      'sides' : ['Fries', 'Salads']
    },
    "Steak": {
      'doneness' : ['rare', 'median', 'well-done'],
      'sides' : ['Salads', 'Baked Potato']
    }
  };
  side_list:  {[index: string]: any}  = {
    'Salads': { 'options': ['caesar', 'balsamic']},
    'Baked Potato': { 'options': 'number'},
    'Fries': { 'options': ['small', 'large']}
  };

  // Local variable
  cur_item: any;
  selectoptions: any;

  // Initialize Reactive Form
  foodForm = this.fb.group({
    itemtype: ['', Validators.required],
    doneness: [''],
    condiments: this.fb.array([
    ]),
    side: this.fb.group({
      sideType: ['', Validators.required],
      option: ['', Validators.required]
    }),
    specialRequest: ['']
  },
    { validators: [potatoValidator, donenessValidator]
    });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Get Reference by itemType name
    this.cur_item = this.major_list[this.itemType];
    this.foodForm.get('itemtype')?.patchValue( this.itemType);
  }

  // Conventions
  get condiments(){
    return this.foodForm.get('condiments') as FormArray;
  }
  get side(){
    return this.foodForm.get('side') as FormGroup;
  }
  // Add and Remove condiments items when Changes occur
  condimentsChange( event: any){
    if (event.target.checked){
      this.condiments.push(new FormControl(event.target.value));
    }else{
      this.condiments.removeAt(this.condiments.value.findIndex((condiment: FormControl) => condiment === event.target.value));
    }
  }

  updateOptions(){
    this.selectoptions = this.side_list[this.side.get('sideType')?.value].options;
    this.side.get('option')?.reset();
  }

  onSubmit(){
    if (this.foodForm.valid){
      console.log("Food Form Added");
      this.onFormGroupChange.emit(this.foodForm);
    }else{
      console.log("Food Form Invalid");
    }
  }

}
