import { Component, OnInit } from '@angular/core';
import{User} from "../user"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
appName:string="This is my first Angular App 8"
userName:string="Preeti";
strColorClass:string="strColor";
isClass:boolean=true;
myColor:string="orange";
isShow:boolean=true;
isLoggedIn:boolean=true;
isLoggedOff:boolean=false;
itemsList=[1,2,3,4,5];
user:User[]=[{
  id:1,
  name:'Hemant'
},
{
  id:2,
  name:'Preeti'
}]
studentArr: any[] = [ { 
  "id": 1, 
  "name": "student1" 
}, 
{ 
  "id": 2,
  "name": "student2" 
}, 
{ 
  "id": 3, "name": "student3"
},
{ 
  "id": 4, 
  "name": "student4" 
} 
]; 
trackByData(index:number, studentArr:any): number { 
  return studentArr.id; 
}
  ngOnInit(): void {
  }
showData($event:any)
{
  console.log("Button Event Clicked")
  if($event)
  {
    console.log($event.target);
    console.log($event.target.value);
    this.appName="Jai Shri Krishna";
  }
}
}
