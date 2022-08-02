import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles_Functions } from 'src/app/interfaces/Roles.Functions';
import { RolesFunctionsService } from 'src/app/services/roles-functions.service';

@Component({
  selector: 'app-list-roles-functions',
  templateUrl: './list-roles-functions.component.html',
  styleUrls: ['./list-roles-functions.component.css']
})
export class ListRolesFunctionsComponent implements OnInit {

  rolesFunctions: Roles_Functions[] = [];
  displayedColumns = ['idRolFunction', 'idRol','idFunction' ,'date_created', 'date_update' , 'status', 'actions'];

  constructor(private rolesFunctionsService: RolesFunctionsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchRolesFunctions();
  }

  fetchRolesFunctions(){
    this.rolesFunctionsService
    .getAllRolesFunctions()
    .subscribe((data: any) => {
      this.rolesFunctions = data[0]
      console.log('data requested....')
      console.log(this.rolesFunctions)
    });
  }

  updateRolFunction(id: string){
    this.router.navigate([`rolesfunctions/edit/${id}`]);
  }

  deleteRolFunction(idRolFunction: any){
    this.rolesFunctionsService.deleteRolFunction(idRolFunction).subscribe(()=> {
      this.fetchRolesFunctions();
    });
  }

}
