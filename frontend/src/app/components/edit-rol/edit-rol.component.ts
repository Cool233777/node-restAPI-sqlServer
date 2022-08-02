import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

import {MatSnackBar} from '@angular/material/snack-bar'
import { RolesService } from 'src/app/services/roles.service';


@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.css']
})
export class EditRolComponent implements OnInit {

  id: string = '';
  Rol: any = {};
  updateForm!: FormGroup;

  constructor(private rolesService: RolesService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
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
      this.id = params['idRol'];
      this.rolesService.getRolById(this.id).subscribe(res => {
        this.Rol = res;
        console.log(res)
        this.updateForm?.get('name')?.setValue(this.Rol[0].name)
        this.updateForm?.get('description')?.setValue(this.Rol[0].description)
        this.updateForm?.get('status')?.setValue(this.Rol[0].status)
      })
    })
  }

  updateRol(name: any, description: any, status: any){
    this.rolesService.updateRol(this.id, name, description, status).subscribe(()=>{
      this.snackBar.open('Rol actualizado', 'OK', {
        duration:3000
      });
    });
  }

}
