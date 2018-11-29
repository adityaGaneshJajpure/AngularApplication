import {Component} from "@angular/core";
import {TakeAttendenceComponent} from "./takeattendence.component";
@Component({
    selector : "presentstatus-btn",
    template : `
    <StackLayout class="presentstatus-btn" orientation="horizontal">
    <Button class="btn btn-rounded-sm btn-outline no-border fa" text="&#xf0c7;" (tap)="savefn()"></Button>
</StackLayout>
    `,
    styles:[`.presentstatus-btn{
        background-color : #30bcff;
    }
    
    .float-btn-text{
        color : #ffffff;
        font-size : 20;
        margin-top : -4;
    }`]
})

export class PresentStatusComponent {
}