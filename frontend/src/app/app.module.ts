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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './components/list-user/list.component';
import { CreateUserComponent } from './components/create-user/create.component';
import { EditUserComponent } from './components/edit-user/edit-user.component'; 

import {UsersService} from './services/users.service';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
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
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
