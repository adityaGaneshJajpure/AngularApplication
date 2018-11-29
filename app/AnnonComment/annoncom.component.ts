import {Component, OnInit, Inject,ChangeDetectorRef} from '@angular/core';
import { Toasty } from 'nativescript-toasty';
import {AnnonCom} from '../shared/annoncom';
import {AnnonComService} from '../services/annoncom.service';
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
@Component({
    selector: "ns-annoncom",
    moduleId: module.id,
    templateUrl: "./annoncom.component.html",
})
export class AnnonComComponent implements OnInit {


    commentsall : AnnonCom[];
    errmess : string;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private changeDetectorRef:ChangeDetectorRef,private annoncomService : AnnonComService,private modalService: ModalDialogService,
        @Inject('BaseURL') private BaseURL){

        }

    ngOnInit(): void {
        this.annoncomService.getAllComments().subscribe(
            commentsall => this.commentsall = commentsall,
            errmess => this.errmess = <any>errmess  );
            console.log(this.commentsall);
            console.log(this.errmess);
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
        console.log("data : ");
        var dialogs = require("ui/dialogs");
        // inputType property can be dialogs.inputType.password or dialogs.inputType.text.
        dialogs.prompt({
            title: "Add Comment",
            message: "Enter A comment which not be anti-social. Your identity will kept hide",
            okButtonText: "Add Comment",
            cancelButtonText: "Cancel",
            defaultText: "",
            inputType: dialogs.inputType.text
        }).then((result: AnnonCom) => {
            //if(result.comment.trim().length){
                result.date=((new Date).getDate()).toString();
            //}
            //else{
                console.log("data : " + result.comment.toString());
           // }
            this.commentsall.push(<AnnonCom>result);
            console.log(result);
        }).catch(error => {return this.handleError(error)}),
        ()=>console.log("not done anything");    
    }
}