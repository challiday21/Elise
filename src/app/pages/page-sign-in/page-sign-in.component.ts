import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.css']
})
export class PageSignInComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    
  }
   onSubmitSignIn(form: NgForm){
    console.log(form.value);
    const username = form.value.username;
    const password = form.value.password;

    this.authService.logUser(username, password).subscribe((resp: any) => {
      console.log(resp);
      console.log(resp.accessToken);
    })
   }

}