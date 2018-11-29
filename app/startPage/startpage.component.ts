import { Component, OnInit,ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.modal";
import { Toasty } from "nativescript-toasty";
//import { UserService } from "../services/studentlogin.service";
//import { BackendService } from "../shared/backend.service";
@Component({
    selector: "app-startpage",
    moduleId: module.id,
    templateUrl: "./startpage.component.html",
    styleUrls: ['./startpage.component.css']
})
export class StartPageComponent implements OnInit{

    constructor(private page: Page, /*private userService: UserService, */private router: Router) {
        this.page.actionBarHidden = true;
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }

    ngOnInit():void{

    }
}
