import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {


  public contactList:any=[
    {id:1,name:"Atul",age:23},
    {id:2, name:"sachin",age:24},
    {id:3,name:"suraj",age:25},
    {id:2, name:"Nilesh",age:24},
    {id:3,name:"Hritik",age:25},

  ];



  constructor(private http:HttpClient) {


   }

   getContactlist(){
 return this.contactList;

   }

}
