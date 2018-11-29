import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import * as dialogs from "ui/dialogs";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { Kinvey, KinveyError, KinveyInternalErrorRetry } from "kinvey-nativescript-sdk";
import { User } from "./shared/user.modal";
//import {BackendService} from "./shared/backend.service";

import { AppComponent } from "./app.component";
import { DrawerComponent } from "./shared/drawer/drawer.component";
import {HomeComponent} from "./home/home.component";
import {NewsFeedComponent} from "./NewsFeed/newsfeed.component";
import { NewsdetailComponent } from "./NewsDetail/newsdetail.component";
import {ChatComponent} from "./chat/chat.component";
import {AnnonComComponent} from "./AnnonComment/annoncom.component";
import {AssignmentComponent} from "./Assignment/assignment.component";
import {AttendenceComponent} from "./Attendence/attendence.component";
import { FavoritesComponent } from './favorites/favorites.component';
import {FloatBtnComponent} from './Attendence/floatBtn.component';
import {FloatBtnStComponent} from './Attendence/floatBtnSt.component';
import {FarjiBtnComponent} from './Assignment/farji.component';
import {FarjisubBtnComponent} from './Assignment/farjisub.component';
import {PresentStatusComponent} from './TakeAttendence/presentstatus.component';
import {AnnonComBtnComponent} from './AnnonComment/annoncombtn.component';
import {AddClassModalComponent} from './AddClass/addclass.component';
import {AddClassComponent} from './AddInClass/addinclass.component';
import {TakeAttendenceComponent} from './TakeAttendence/takeattendence.component';
import {NewsService} from "./services/news.service";
import {ClassesService} from "./services/classes.service";
import {FavoriteService} from "./services/favorite.service";
import {AnnonComService} from "./services/annoncom.service";
import {ProcessHTTPMsgService} from "./services/process-httpmsg.service";
import {baseURL} from './shared/baseurl';
import {StudentLoginComponent} from './studentLogin/studentLogin.component';
import {TeacherLoginComponent} from './teacherLogin/teacherLogin.component';
import {StartPageComponent} from './startPage/startpage.component';
//import { UserService } from "./services/studentlogin.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpModule,
        NativeScriptUIListViewModule,
        ReactiveFormsModule,
        ////KinveyError,
        //KinveyInternalErrorRetry,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'
        })
    ],
    declarations: [
        AppComponent, 
        StartPageComponent,
        TeacherLoginComponent,
        StudentLoginComponent,
        FloatBtnComponent,
        FloatBtnStComponent,
        PresentStatusComponent,
        FarjiBtnComponent,
        FarjisubBtnComponent,
        NewsdetailComponent,
        DrawerComponent,
        HomeComponent,
        NewsFeedComponent,
        ChatComponent,
        AnnonComComponent,
        AssignmentComponent,
        AttendenceComponent,
        FavoritesComponent,
        AddClassModalComponent,
        AddClassComponent,
        TakeAttendenceComponent,
        AnnonComBtnComponent
    ],
    entryComponents : [AddClassModalComponent],
    providers: [
        NewsService,
        //BackendService,
        ProcessHTTPMsgService,
        {provide : 'BaseURL', useValue : baseURL},
        FavoriteService,
        ClassesService,
        AnnonComService
        //UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
