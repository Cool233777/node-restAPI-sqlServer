import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${this.url}/users`);
  }

  getUserById() {
    return this.http.get(`${this.url}/users/:id`);
  }

  createUser(username: string, firstName: string, lastName: string, status: string){
    const User = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      status: status
    };
    return this.http.post(`${this.url}/usesrs`, User)
  }

  updateUser(id: string, username: string, firstName: string, lastName: string, status: string){
    const User = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      status: status
    };
    return this.http.post(`${this.url}/usesrs/${id}`, User)
  }

  deleteUser(id: string){
    return this.http.delete(`${this.url}/usesrs/${id}`)
  }

}
