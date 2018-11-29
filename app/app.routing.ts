import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


import { NewsdetailComponent } from "./NewsDetail/newsdetail.component";
import { DrawerComponent } from "./shared/drawer/drawer.component";
import {HomeComponent} from "./home/home.component";
import {NewsFeedComponent} from "./NewsFeed/newsfeed.component";
import {ChatComponent} from "./chat/chat.component";
import {AnnonComComponent} from "./AnnonComment/annoncom.component";
import {AssignmentComponent} from "./Assignment/assignment.component";
import {AttendenceComponent} from "./Attendence/attendence.component";
import { FavoritesComponent } from './favorites/favorites.component';
import {AddClassModalComponent} from './AddClass/addclass.component';
import {AddClassComponent} from './AddInClass/addinclass.component';
import {TakeAttendenceComponent} from './TakeAttendence/takeattendence.component';
import {StudentLoginComponent} from './studentLogin/studentLogin.component';
import {TeacherLoginComponent} from './teacherLogin/teacherLogin.component';
import {StartPageComponent} from './startPage/startpage.component';
//import { Kinvey } from "kinvey-nativescript-sdk";
const routes: Routes = [
    { path: "", redirectTo: "/startpage", pathMatch: "full" },
    { path: "startpage", component: StartPageComponent },
    { path: "teacherlogin", component: TeacherLoginComponent },
    { path: "studentlogin", component: StudentLoginComponent },
    { path: "home", component: HomeComponent },
    { path: "news", component: NewsFeedComponent },
    { path: "newsdetail/:id", component: NewsdetailComponent },
    { path: "favorites", component: FavoritesComponent },
    { path: "chat", component: ChatComponent },
    { path: "assignment", component: AssignmentComponent },
    { path: "annoncom", component: AnnonComComponent },
    { path: "attendence", component: AttendenceComponent },
    { path: "addinclass", component: AddClassComponent },
    { path: "addmodal/:id", component: AddClassModalComponent },
    
    { path: "takeattendence/:id", component: TakeAttendenceComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }