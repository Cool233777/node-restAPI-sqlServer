import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesFunctionsService } from 'src/app/services/roles-functions.service';

@Component({
  selector: 'app-edit-roles-functions',
  templateUrl: './edit-roles-functions.component.html',
  styleUrls: ['./edit-roles-functions.component.css']
})
export class EditRolesFunctionsComponent implements OnInit {

  id: string = '';
  RolFunction: any = {};
  updateForm!: FormGroup;

  constructor(private rolesFunctionsService: RolesFunctionsService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm()
  {
    this.updateForm = this.fb.group({
      idRol: ['', Validators.required],
      idFunction: ['', Validators.required],
      status: ''
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['idRolFunction'];
      this.rolesFunctionsService.getRolFunctionById(this.id).subscribe(res => {
        this.RolFunction = res;
        console.log(res)
        this.updateForm?.get('idRol')?.setValue(this.RolFunction[0].idRol)
        this.updateForm?.get('idFunction')?.setValue(this.RolFunction[0].idFunction)
        this.updateForm?.get('status')?.setValue(this.RolFunction[0].status)
      })
    })
  }

  updateRolFunction(idRol: any, idFunction: any, status: any){
     this.rolesFunctionsService.updateRolFunction(this.id, idRol, idFunction, status).subscribe(()=>{
       this.snackBar.open('Rol-Function actualizado', 'OK', {
         duration:3000
       });
     });
  }

}
