import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  appName = "My First App in Angular";
  userName:string="Rakesh Srivastaw";
  myCSSClass="red";
  applyCSSClass=false;
  showData($event:any){
    console.log("button is clicked");
    if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
