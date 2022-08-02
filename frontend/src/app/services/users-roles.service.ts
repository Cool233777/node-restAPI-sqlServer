import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersRolesService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllUsersRol() {
    return this.http.get(`${this.url}/usersrol`);
  }

  getUsersRolById(idUserRol: any) {
    return this.http.get(`${this.url}/usersrol/${idUserRol}`);
  }

  createUsersRol(idUser: string, idRol: string, status: string){
    const UserRol = {
      idUser: idUser,
      idRol: idRol,
      status: status
    };
    return this.http.post(`${this.url}/usersrol`, UserRol)
  }

  updateUsersRol(idUserRol: string, idUser: string, idRol: string, status: string){
    const UserRol = {
      idUser: idUser,
      idRol: idRol,
      status: status
    };
    return this.http.put(`${this.url}/usersrol/${idUserRol}`, UserRol)
  }

  deleteUsersRol(idUserRol: any){
    return this.http.delete(`${this.url}/usersrol/${idUserRol}`)
  }
}
