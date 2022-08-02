import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users_Roles } from 'src/app/interfaces/Users.Roles';
import { UsersRolesService } from 'src/app/services/users-roles.service';

@Component({
  selector: 'app-list-user-roles',
  templateUrl: './list-user-roles.component.html',
  styleUrls: ['./list-user-roles.component.css']
})
export class ListUserRolesComponent implements OnInit {

  usersRoles: Users_Roles[] = [];
  displayedColumns = ['idUserRol', 'idUser','idRol' ,'date_created', 'date_update' , 'status', 'actions'];

  constructor(private usersRolesService: UsersRolesService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsersRoles();
  }

  fetchUsersRoles(){
    this.usersRolesService
    .getAllUsersRol()
    .subscribe((data: any) => {
      this.usersRoles = data[0]
      console.log('data requested....')
      console.log(this.usersRoles)
    });
  }

  updateUsersRol(id: string){
    this.router.navigate([`usersroles/edit/${id}`]);
  }

  deleteUsersRol(idUserRol: any){
    this.usersRolesService.deleteUsersRol(idUserRol).subscribe(()=> {
      this.fetchUsersRoles();
    });
  }

}
