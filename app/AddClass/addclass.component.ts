import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { ListPicker } from 'ui/list-picker';
import { Page } from 'ui/page';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TextField } from "tns-core-modules/ui/text-field";
import {Classes} from "../shared/classes";
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
    moduleId: module.id,
    templateUrl: './addclass.component.html',
    selector:'app-addmodal'
})
export class AddClassModalComponent {
 
    formComment: FormGroup;

    constructor(private params: ModalDialogParams,
        private page: Page,private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private formBuilder: FormBuilder) {

            this.formComment = this.formBuilder.group({
                name: '',
                enrollment : ''
            });
    }

    onNameChange(args) {  
        let textField = <TextField>args.object;

        this.formComment.patchValue({
            name: textField.text
        });
    }

    onEnrollmentChange(args) {
        let textField = <TextField>args.object;

        this.formComment.patchValue({
            enrollment: textField.text
        
        });
    }

    onSubmit() {
        let submitForm : Classes;
        submitForm = this.formComment.value;
        this.params.closeCallback(submitForm);
    }

    onCancel(){
        this.params.closeCallback(null);
    }
    
}