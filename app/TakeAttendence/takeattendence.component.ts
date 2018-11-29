//dish detail jesa hi
import {Component, OnInit, Inject,ChangeDetectorRef,ViewContainerRef} from '@angular/core';
//import {DrawerPage} from '../shared/drawer/drawer.page';
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import { Toasty } from 'nativescript-toasty';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { Classes } from "../shared/classes";
import { ClassesService } from '../services/classes.service';
import * as dialogs from "ui/dialogs";
import {AddClassModalComponent} from "../AddClass/addclass.component";

import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Students } from '../shared/students';
import {Attendence} from '../shared/attendence';
@Component({
    selector: "ns-takeattendence",
    moduleId: module.id,
    templateUrl: "./takeattendence.component.html",
})
export class TakeAttendenceComponent implements OnInit {

    studentsall : Students[];
    classes : Classes;
    errMess : string;
    attendence : Attendence;
    date :number;
    absent  : string[];
    leave : string[];
    presentno : number;
    absentno : number;
    leaveno : number;
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
        this.route.params
      .switchMap((params: Params) => this.classesService.getClass(+params['id']))
      .subscribe(classes => {classes = this.classes;},
          errmess => { this.classes = null; this.errMess = <any>errmess; });
          let currentdate: Date = new Date();
            console.log("This is students data : " + this.classes);
          this.date=currentdate.getDate();
          this.attendence.date = this.date.toString();
          this.leaveno = 0;
          this.presentno=0;
          this.absentno=0;
    }

    presentFn(enrollment : string){
        this.attendence.enrollment.push(enrollment);
    }

    absentfn(enrollment : string){
        this.absent.push(enrollment);
    }

    leavefn(enrollment : string){
        this.leave.push(enrollment);
    }

    
}