import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
//import {MatOption} from '@angular/material/select';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { RolesService } from './services/roles.service';
import { FunctionsService } from './services/functions.service';
import {UsersService} from './services/users.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';

import { ListUserComponent } from './components/list-user/list.component';
import { CreateUserComponent } from './components/create-user/create.component';
import { EditUserComponent } from './components/edit-user/edit-user.component'; 

import { CreateRolComponent } from './components/create-rol/create-rol.component';
import { EditRolComponent } from './components/edit-rol/edit-rol.component';
import { ListRolComponent } from './components/list-rol/list-rol.component';

import { ListFunctionComponent } from './components/list-function/list-function.component';
import { EditFunctionComponent } from './components/edit-function/edit-function.component';
import { CreateFunctionComponent } from './components/create-function/create-function.component';

import { CreateRolesFunctionsComponent } from './components/create-roles-functions/create-roles-functions.component';
import { EditRolesFunctionsComponent } from './components/edit-roles-functions/edit-roles-functions.component';
import { ListRolesFunctionsComponent } from './components/list-roles-functions/list-roles-functions.component';


const routes: Routes = [
  {path: 'rolesfunctions/create', component: CreateRolesFunctionsComponent},
  {path: 'rolesfunctions/edit/:idRolFunction', component: EditRolesFunctionsComponent},
  {path: 'rolesfunctions/list', component: ListRolesFunctionsComponent},
  {path: 'functions/create', component: CreateFunctionComponent},
  {path: 'functions/edit/:idFunction', component: EditFunctionComponent},
  {path: 'functions/list', component: ListFunctionComponent},
  {path: 'roles/create', component: CreateRolComponent},
  {path: 'roles/edit/:idRol', component: EditRolComponent},
  {path: 'roles/list', component: ListRolComponent},
  {path: 'users/create', component: CreateUserComponent},
  {path: 'users/edit/:idUser', component: EditUserComponent},
  {path: 'users/list', component: ListUserComponent},
  {path: 'menu', component: MenuComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    CreateUserComponent,
    EditUserComponent,
    MenuComponent,
    CreateRolComponent,
    EditRolComponent,
    ListRolComponent,
    ListFunctionComponent,
    EditFunctionComponent,
    CreateFunctionComponent,
    CreateRolesFunctionsComponent,
    EditRolesFunctionsComponent,
    ListRolesFunctionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [UsersService,RolesService,FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
