import {Component} from "@angular/core";

@Component({
    selector : "float-btn-st",
    template: `<StackLayout class="float-btn">
        <Label class="float-btn-text" text="E"></Label>
    </StackLayout>`,
    styles: [
        `
            .float-btn{
                background-color : #30bcff;
                border-radius : 28;
                width : 56;
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

export class FloatBtnStComponent{
}