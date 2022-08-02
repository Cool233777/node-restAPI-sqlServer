import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

import {MatSnackBar} from '@angular/material/snack-bar'

import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: string = '';
  user: any = {};
  updateForm!: FormGroup;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm()
  {
    this.updateForm = this.fb.group({
      username: ['', Validators.required],
      firstName: '',
      lastName: '',
      status: ''
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['idUser'];
      this.usersService.getUserById(this.id).subscribe(res => {
        this.user = res;
        console.log(res)
        this.updateForm?.get('username')?.setValue(this.user[0].username)
        this.updateForm?.get('firstName')?.setValue(this.user[0].firstName)
        this.updateForm?.get('lastName')?.setValue(this.user[0].lastName)
        this.updateForm?.get('status')?.setValue(this.user[0].status)
      })
    })
  }

  updateUser(username: any, firstName: any, lastName: any, status: any){
    this.usersService.updateUser(this.id, username, firstName, lastName, status).subscribe(()=>{
      this.snackBar.open('Usuario actualizado', 'OK', {
        duration:3000
      });
    });
  }

}
