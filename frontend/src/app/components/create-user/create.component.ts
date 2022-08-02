import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateUserComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
      this.createForm = this.fb.group({
        username: ['', Validators.required],
        lastName: '',
        firstName: '',
        status: ''
      })
    
  }

  createUser(username: any, firstName: any, lastName: any, status: any){
    this.usersService.createUser(username, firstName, lastName, status).subscribe(()=>{
      this.router.navigate(['/list'])
    });
  }

  ngOnInit(): void {

  }

}
