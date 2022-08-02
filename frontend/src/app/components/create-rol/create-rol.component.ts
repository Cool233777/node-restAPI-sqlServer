import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router, ActivatedRoute} from '@angular/router'
import { RolesService } from 'src/app/services/roles.service';


@Component({
  selector: 'app-create-rol',
  templateUrl: './create-rol.component.html',
  styleUrls: ['./create-rol.component.css']
})
export class CreateRolComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private rolesService: RolesService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      status: ''
    })
  }

  createRol(name: any, description: any, status: any){
    this.rolesService.createRol(name, description, status).subscribe(()=>{
      this.router.navigate(['roles/list'])
    });
  }

  ngOnInit(): void {
  }

}
