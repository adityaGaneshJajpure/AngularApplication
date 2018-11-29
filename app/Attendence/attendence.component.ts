import {Component, OnInit, Inject,ChangeDetectorRef,ViewContainerRef} from '@angular/core';
//import {DrawerPage} from '../shared/drawer/drawer.page';
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import { Toasty } from 'nativescript-toasty';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Classes } from "../shared/classes";
import { ClassesService } from '../services/classes.service';
import * as dialogs from "ui/dialogs";
import {AddClassComponent} from '../AddInClass/addinclass.component';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
    selector: "ns-attendence",
    moduleId: module.id,
    templateUrl: "./attendence.component.html",
})
export class AttendenceComponent implements OnInit {

    classall : Classes[];
    errMess : string;
    
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private changeDetectorRef:ChangeDetectorRef,private classesService : ClassesService,
        @Inject('BaseURL') private BaseURL,
        private modalService: ModalDialogService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private vcRef: ViewContainerRef){
        }

    ngOnInit(): void {
        this.classesService.getAllClasses().subscribe(
            classall => this.classall = classall,
            errmess => this.errMess = <any>errmess  );
            console.log(this.classall);
            console.log(this.errMess);
    }

    onBack()
    {                  
		const toast = new Toasty("cancelled addition", "short", "bottom");
    }

    handleError(error : any){
        const toast = new Toasty("cancelled addition", "short", "bottom");
    }

    click()
    {
        var dialogs = require("ui/dialogs");
        // inputType property can be dialogs.inputType.password or dialogs.inputType.text.
        dialogs.prompt({
            title: "Add Class",
            message: "Enter A unique class name (Suggested format classname_year ie. CS1_3)",
            okButtonText: "Add Class",
            cancelButtonText: "Cancel",
            defaultText: "",
            inputType: dialogs.inputType.text
        }).then((result: Classes) => {
            this.classall.push(<Classes>result);
            console.log(result);
        }).catch(error => {return this.handleError(error)}),
        ()=>console.log("not done anything");
    }
} 