import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {Router} from '@angular/router'
import {MatTableDataSource} from '@angular/material/table'
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];
  users2: User[] = [];
  displayedColumns = ['username', 'firstName', 'lastName', 'status', 'actions'];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    this.usersService
    .getAllUsers()
    .subscribe((data: any) => {
      this.users = data[0]
      console.log('data requested....')
      console.log(this.users)
    });
  }

  updateUser(id: string){
    this.router.navigate([`/edit/${id}`]);
  }

  deleteUser(idUser: any){
    console.log(idUser)
    this.usersService.deleteUser(idUser).subscribe(()=> {
      this.fetchUsers();
    });
  }

}
