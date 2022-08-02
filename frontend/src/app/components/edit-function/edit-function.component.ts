import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

import {MatSnackBar} from '@angular/material/snack-bar'
import { FunctionsService } from 'src/app/services/functions.service';
@Component({
  selector: 'app-edit-function',
  templateUrl: './edit-function.component.html',
  styleUrls: ['./edit-function.component.css']
})
export class EditFunctionComponent implements OnInit {

  id: string = '';
  Function: any = {};
  updateForm!: FormGroup;

  constructor(private functionsService: FunctionsService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }


  createForm()
  {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      status: ''
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['idFunction'];
      this.functionsService.getFunctionById(this.id).subscribe(res => {
        this.Function = res;
        console.log(res)
        this.updateForm?.get('name')?.setValue(this.Function[0].name)
        this.updateForm?.get('description')?.setValue(this.Function[0].description)
        this.updateForm?.get('status')?.setValue(this.Function[0].status)
      })
    })
  }

  updateFunction(name: any, description: any, status: any){
    this.functionsService.updateFunction(this.id, name, description, status).subscribe(()=>{
      this.snackBar.open('Funcion actualizada', 'OK', {
        duration:3000
      });
    });
  }

}
