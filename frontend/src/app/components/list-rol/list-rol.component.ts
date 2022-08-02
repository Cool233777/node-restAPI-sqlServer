import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MatTableDataSource} from '@angular/material/table'
import { Roles } from 'src/app/interfaces/Roles';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-list-rol',
  templateUrl: './list-rol.component.html',
  styleUrls: ['./list-rol.component.css']
})
export class ListRolComponent implements OnInit {

  roles: Roles[] = [];
  displayedColumns = ['name', 'description', 'date_created', 'date_update' , 'status', 'actions'];

  constructor(private rolesService: RolesService, private router: Router) { }

  ngOnInit(): void {
    this.fetchRoles();
  }

  fetchRoles(){
    this.rolesService
    .getAllRoles()
    .subscribe((data: any) => {
      this.roles = data[0]
      console.log('data requested....')
      console.log(this.roles)
    });
  }

  updateRol(id: string){
    this.router.navigate([`roles/edit/${id}`]);
  }

  deleteRol(idRol: any){
    console.log(idRol)
    this.rolesService.deleteRol(idRol).subscribe(()=> {
      this.fetchRoles();
    });
  }
}
