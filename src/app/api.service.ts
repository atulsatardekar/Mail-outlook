import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public contactList:any=[
    {id:1,name:"Atul",age:23},
    {id:2, name:"sachin",age:24},
    {id:3,name:"suraj",age:25}
  ];



  constructor(private http:HttpClient) {


   }

   getContactlist(){
 return this.contactList;

   }

}
