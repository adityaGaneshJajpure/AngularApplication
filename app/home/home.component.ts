import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { DrawerPage } from '../shared/drawer/drawer.page';
import * as platformModule from "tns-core-modules/platform";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent extends DrawerPage implements OnInit {


    screenWidth : number;
    screenHeight : number;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private changeDetectorRef:ChangeDetectorRef,
        @Inject('BaseURL') private BaseURL) {
          super(changeDetectorRef);
          console.log("Device model: " + platformModule.device.model);
          console.log("Device type: " + platformModule.device.deviceType);
        console.log("OS: " + platformModule.device.os);
        console.log("OS version: " + platformModule.device.osVersion);
        console.log("SDK Version: " + platformModule.device.sdkVersion);

        console.log("Screen width: " + platformModule.screen.mainScreen.widthPixels);
        console.log("Screen height: " + platformModule.screen.mainScreen.heightPixels);
        console.log("Screen scale: " + platformModule.screen.mainScreen.scale);
        this.screenWidth=platformModule.screen.mainScreen.widthPixels;
       this.screenHeight=platformModule.screen.mainScreen.heightPixels;
        }


    
    ngOnInit(): void {
        this.screenWidth=platformModule.screen.mainScreen.widthPixels;
       this.screenHeight=platformModule.screen.mainScreen.heightPixels; 
    }
}