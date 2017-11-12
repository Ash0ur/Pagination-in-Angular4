import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  p:number =1;
  Posts:Array<object>;

  constructor(private _Http:HttpClient){}
  
  ngOnInit(){
    this.getPosts();
  }
   getPosts(){
    this._Http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (data:Array<object>)=>{
        console.log(data);
        this.Posts = data;
      },
      err=>{
          console.log(err);
      }
    )
  }
  

  


}
