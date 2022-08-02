import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MatTableDataSource} from '@angular/material/table'
import { Functions } from 'src/app/interfaces/Functions';
import { FunctionsService } from 'src/app/services/functions.service';
@Component({
  selector: 'app-list-function',
  templateUrl: './list-function.component.html',
  styleUrls: ['./list-function.component.css']
})
export class ListFunctionComponent implements OnInit {

  functions: Functions[] = [];
  displayedColumns = ['name', 'description', 'date_created', 'date_update' , 'status', 'actions'];

  constructor(private functionsService: FunctionsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchFunctions();
  }

  fetchFunctions(){
    this.functionsService
    .getAllFunctions()
    .subscribe((data: any) => {
      this.functions = data[0]
      console.log('data requested....')
      console.log(this.functions)
    });
  }

  updateFunction(id: string){
    this.router.navigate([`functions/edit/${id}`]);
  }

  deleteFunction(idFunction: any){
    console.log(idFunction)
    this.functionsService.deleteFunction(idFunction).subscribe(()=> {
      this.fetchFunctions();
    });
  }
}
