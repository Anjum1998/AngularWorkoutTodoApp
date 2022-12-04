import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
id=""
userid=""
title=""
status=""

readValue=()=>
{
 let data:any={"id":this.id,"userid":this.userid,"title":this.title,"status":this.status}
 console.log(data)
}



}
