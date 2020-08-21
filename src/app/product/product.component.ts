import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	constructor(public router: Router, public formBuilder: FormBuilder) { }

	addForm:FormGroup;
	updateForm:FormGroup;
	isSubmitted = false;
	product_name = '';
	product_image = '';
	product_description = '';
	price = '';
	category = '';
	ngOnInit() {
		this.addForm  =  new FormGroup({
			product_name:  new FormControl(''),
			product_image:  new FormControl(''),
			product_description:  new FormControl(''),
			price:  new FormControl(''),
			category:  new FormControl('')
		});

		this.updateForm  =  new FormGroup({
			id:  new FormControl(''),
			product_name:  new FormControl(''),
			product_image:  new FormControl(''),
			product_description:  new FormControl(''),
			price:  new FormControl(''),
			category:  new FormControl('')
		});
	}

}
