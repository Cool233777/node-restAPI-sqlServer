import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router, ActivatedRoute} from '@angular/router'
import { RolesFunctionsService } from 'src/app/services/roles-functions.service';
@Component({
  selector: 'app-create-roles-functions',
  templateUrl: './create-roles-functions.component.html',
  styleUrls: ['./create-roles-functions.component.css']
})
export class CreateRolesFunctionsComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private rolesFunctionsService: RolesFunctionsService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      idRol: ['', Validators.required],
      idFunction: ['', Validators.required],
      status: ''
    })
  }

  createRolFunction(idRol: any, idFunction: any, status: any){
    this.rolesFunctionsService.createRolFunction(idRol, idFunction, status).subscribe(()=>{
      this.router.navigate(['rolesfunctions/list'])
    });
  }

  ngOnInit(): void {
  }

}
