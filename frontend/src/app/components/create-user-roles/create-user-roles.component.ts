import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router, ActivatedRoute} from '@angular/router'
import { UsersRolesService } from 'src/app/services/users-roles.service';

@Component({
  selector: 'app-create-user-roles',
  templateUrl: './create-user-roles.component.html',
  styleUrls: ['./create-user-roles.component.css']
})
export class CreateUserRolesComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private usersRolesService: UsersRolesService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      idUser: ['', Validators.required],
      idRol: ['', Validators.required],
      status: ''
    })
  }

  createUserRol(idUser: any, idRol: any, status: any){
    this.usersRolesService.createUsersRol(idUser, idRol, status).subscribe(()=>{
      this.router.navigate(['usersroles/list'])
    });
  }

  ngOnInit(): void {
  }

}
