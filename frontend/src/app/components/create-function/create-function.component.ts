import { Component, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router, ActivatedRoute} from '@angular/router'
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-create-function',
  templateUrl: './create-function.component.html',
  styleUrls: ['./create-function.component.css']
})
export class CreateFunctionComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private functionsService: FunctionsService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      status: ''
    })
  }

  createFunction(name: any, description: any, status: any){
    this.functionsService.createFunction(name, description, status).subscribe(()=>{
      this.router.navigate(['functions/list'])
    });
  }

  ngOnInit(): void {
  }

}
