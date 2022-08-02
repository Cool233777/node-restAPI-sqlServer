import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesFunctionsService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllRolesFunctions() {
    return this.http.get(`${this.url}/rolfunctions`);
  }

  getRolFunctionById(idRolFunction: any) {
    return this.http.get(`${this.url}/rolfunctions/${idRolFunction}`);
  }

  createRolFunction(idRol: string, idFunction: string, status: string){
    const RolFunction = {
      idRol: idRol,
      idFunction: idFunction,
      status: status
    };
    return this.http.post(`${this.url}/rolfunctions`, RolFunction)
  }

  updateRolFunction(idRolFunction: string, idRol: string, idFunction: string, status: string){
    const RolFunction = {
      idRol: idRol,
      idFunction: idFunction,
      status: status
    };
    return this.http.put(`${this.url}/rolfunctions/${idRolFunction}`, RolFunction)
  }

  deleteRolFunction(idRolFunction: any){
    return this.http.delete(`${this.url}/rolfunctions/${idRolFunction}`)
  }
}
