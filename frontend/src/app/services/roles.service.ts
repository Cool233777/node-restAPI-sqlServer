import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${this.url}/users`);
  }

  getUserById(idUser: any) {
    return this.http.get(`${this.url}/users/${idUser}`);
  }

  createUser(username: string, firstName: string, lastName: string, status: string){
    const User = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      status: status
    };
    return this.http.post(`${this.url}/users`, User)
  }

  updateUser(idUser: string, username: string, firstName: string, lastName: string, status: string){
    const User = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      status: status
    };
    return this.http.put(`${this.url}/users/${idUser}`, User)
  }

  deleteUser(idUser: any){
    return this.http.delete(`${this.url}/users/${idUser}`)
  }
}
