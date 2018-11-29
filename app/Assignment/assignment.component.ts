import {Component, OnInit, Inject,ChangeDetectorRef} from '@angular/core';
import {DrawerPage} from '../shared/drawer/drawer.page';
import { alert } from 'tns-core-modules/ui/dialogs/dialogs';

@Component({
    selector: "ns-assignment",
    moduleId: module.id,
    templateUrl: "./assignment.component.html",
})
export class AssignmentComponent extends DrawerPage implements OnInit {


    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private changeDetectorRef:ChangeDetectorRef,
        @Inject('BaseURL') private BaseURL){
            super(changeDetectorRef);
        }

    ngOnInit(): void {

    }

    click(){
        alert({
            title: "COLLEGE MANAGER",
            message: "Contact Admin!!!!",
            okButtonText: "Ok"
          })
    }

    
    alert(message: string) {
        return alert({
            title: "COLLEGE MANAGER",
            okButtonText: "OK",
            message: message
        });
    }
}