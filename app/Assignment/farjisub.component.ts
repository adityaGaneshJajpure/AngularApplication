import {Component} from "@angular/core";

@Component({
    selector : "farjisub-btn",
    template: `<StackLayout class="float-btn">
        <Label class="float-btn-text" text="Submit Due"></Label>
    </StackLayout>`,
    styles: [
        `
            .float-btn{
                background-color : #30bcff;
                width : 300;
                height : 56;
                text-align : center;
                vertical-align : middle;
            }

            .float-btn-text{
                color : #ffffff;
                font-size : 36;
                margin-top : -4;
            }
        `
    ]
})

export class FarjisubBtnComponent{
}