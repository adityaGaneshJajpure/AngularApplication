import { Component, OnInit,ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import { User } from "../shared/user.modal";
import { Toasty } from "nativescript-toasty";
//import { UserService } from "../services/studentlogin.service";
//import { BackendService } from "../shared/backend.service";
@Component({
    selector: "app-studentlogin",
    moduleId: module.id,
    templateUrl: "./studentLogin.component.html",
    styleUrls: ['./studentLogin.component.css']
})
export class StudentLoginComponent implements OnInit{
    isLoggingIn = true;
    user: User;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, /*private userService: UserService, */private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }

    ngOnInit():void{

    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
       /* if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }*/

        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.alert("SUCEESSFULLY LOGIN");
        this.router.navigate(["/home"]);
       /* this.userService.login(this.user)
            .then(() => {
                this.router.navigate(["/home"]);
            })
            .catch(() => {
                this.alert("Unfortunately we could not find your account.");
            });*/
    }

    register() {
        this.isLoggingIn = true;
       /* if (this.user.password != this.user.confirmPassword) {
            this.alert("Your passwords do not match.");
            return;
        }
        this.userService.register(this.user)
            .then(() => {
                this.alert("Your account was successfully created.");
                this.isLoggingIn = true;
            })
            .catch(() => {
                this.alert("Unfortunately we were unable to create your account.");
            });*/
    }

    /*forgotPassword() {
        prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for APP NAME to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) =>  {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                    }).catch(() => {
                        this.alert("Unfortunately, an error occurred resetting your password.");
                    });
            }
        });
    }
*/


forgotPassword() {
  prompt({
    title: "Forgot Password",
    message: "Enter the email address you used to register for COLLEGE MANAGER to reset your password.",
    defaultText: "",
    okButtonText: "Ok",
    cancelButtonText: "Cancel"
  }).then((data) => {
    if (data.result) {
      // Call the backend to reset the password
      alert({
        title: "COLLEGE MANAGER",
        message: "Your password was successfully reset. Please check your email for instructions on choosing a new password.",
        okButtonText: "Ok"
      })
    }
  });
}
    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "COLLEGE MANAGER",
            okButtonText: "OK",
            message: message
        });
    }
}

