import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersRolesService } from 'src/app/services/users-roles.service';

@Component({
  selector: 'app-edit-user-roles',
  templateUrl: './edit-user-roles.component.html',
  styleUrls: ['./edit-user-roles.component.css']
})
export class EditUserRolesComponent implements OnInit {

  id: string = '';
  UserRol: any = {};
  updateForm!: FormGroup;

  constructor(private usersRolesService: UsersRolesService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm()
  {
    this.updateForm = this.fb.group({
      idUser: ['', Validators.required],
      idRol: ['', Validators.required],
      status: ''
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['idUserRol'];
      this.usersRolesService.getUsersRolById(this.id).subscribe(res => {
        this.UserRol = res;
        console.log(res)
        this.updateForm?.get('idUser')?.setValue(this.UserRol[0].idUser)
        this.updateForm?.get('idRol')?.setValue(this.UserRol[0].idRol)
        this.updateForm?.get('status')?.setValue(this.UserRol[0].status)
      })
    })
  }

  updateUsersRol(idUser: any, idRol: any, status: any){
     this.usersRolesService.updateUsersRol(this.id, idUser, idRol, status).subscribe(()=>{
       this.snackBar.open('Rol-Function actualizado', 'OK', {
         duration:3000
       });
     });
  }

}
