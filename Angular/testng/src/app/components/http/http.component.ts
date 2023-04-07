import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  private url : string = "https://jsonplaceholder.typicode.com/todos";
  private data : any; //every http request in angular is asynchronous -xhr
                      //basically every http request on web is sunchronous whereas in angular every http request is asynchronous

constructor(private http : HttpClient){

}

//http methods get,post,put,delete
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.http.get(this.url).subscribe((resData)=>{

      this.data = resData;
      console.log(this.data);
    })
  }
          
}
