"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var http_1 = require("nativescript-angular/http");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var forms_1 = require("@angular/forms");
//import {BackendService} from "./shared/backend.service";
var app_component_1 = require("./app.component");
var drawer_component_1 = require("./shared/drawer/drawer.component");
var home_component_1 = require("./home/home.component");
var newsfeed_component_1 = require("./NewsFeed/newsfeed.component");
var newsdetail_component_1 = require("./NewsDetail/newsdetail.component");
var chat_component_1 = require("./chat/chat.component");
var annoncom_component_1 = require("./AnnonComment/annoncom.component");
var assignment_component_1 = require("./Assignment/assignment.component");
var attendence_component_1 = require("./Attendence/attendence.component");
var favorites_component_1 = require("./favorites/favorites.component");
var floatBtn_component_1 = require("./Attendence/floatBtn.component");
var floatBtnSt_component_1 = require("./Attendence/floatBtnSt.component");
var farji_component_1 = require("./Assignment/farji.component");
var farjisub_component_1 = require("./Assignment/farjisub.component");
var presentstatus_component_1 = require("./TakeAttendence/presentstatus.component");
var annoncombtn_component_1 = require("./AnnonComment/annoncombtn.component");
var addclass_component_1 = require("./AddClass/addclass.component");
var addinclass_component_1 = require("./AddInClass/addinclass.component");
var takeattendence_component_1 = require("./TakeAttendence/takeattendence.component");
var news_service_1 = require("./services/news.service");
var classes_service_1 = require("./services/classes.service");
var favorite_service_1 = require("./services/favorite.service");
var annoncom_service_1 = require("./services/annoncom.service");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
var baseurl_1 = require("./shared/baseurl");
var studentLogin_component_1 = require("./studentLogin/studentLogin.component");
var teacherLogin_component_1 = require("./teacherLogin/teacherLogin.component");
var startpage_component_1 = require("./startPage/startpage.component");
//import { UserService } from "./services/studentlogin.service";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_1.NativeScriptUISideDrawerModule,
                http_1.NativeScriptHttpModule,
                angular_2.NativeScriptUIListViewModule,
                forms_1.ReactiveFormsModule,
                ////KinveyError,
                //KinveyInternalErrorRetry,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.min.css'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                startpage_component_1.StartPageComponent,
                teacherLogin_component_1.TeacherLoginComponent,
                studentLogin_component_1.StudentLoginComponent,
                floatBtn_component_1.FloatBtnComponent,
                floatBtnSt_component_1.FloatBtnStComponent,
                presentstatus_component_1.PresentStatusComponent,
                farji_component_1.FarjiBtnComponent,
                farjisub_component_1.FarjisubBtnComponent,
                newsdetail_component_1.NewsdetailComponent,
                drawer_component_1.DrawerComponent,
                home_component_1.HomeComponent,
                newsfeed_component_1.NewsFeedComponent,
                chat_component_1.ChatComponent,
                annoncom_component_1.AnnonComComponent,
                assignment_component_1.AssignmentComponent,
                attendence_component_1.AttendenceComponent,
                favorites_component_1.FavoritesComponent,
                addclass_component_1.AddClassModalComponent,
                addinclass_component_1.AddClassComponent,
                takeattendence_component_1.TakeAttendenceComponent,
                annoncombtn_component_1.AnnonComBtnComponent
            ],
            entryComponents: [addclass_component_1.AddClassModalComponent],
            providers: [
                news_service_1.NewsService,
                //BackendService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                { provide: 'BaseURL', useValue: baseurl_1.baseURL },
                favorite_service_1.FavoriteService,
                classes_service_1.ClassesService,
                annoncom_service_1.AnnonComService
                //UserService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxzRUFBNEY7QUFDNUYsa0RBQW1FO0FBQ25FLHVFQUE4RDtBQUM5RCxvRUFBd0Y7QUFHeEYsd0NBQWtFO0FBR2xFLDBEQUEwRDtBQUUxRCxpREFBK0M7QUFDL0MscUVBQW1FO0FBQ25FLHdEQUFvRDtBQUNwRCxvRUFBZ0U7QUFDaEUsMEVBQXdFO0FBQ3hFLHdEQUFvRDtBQUNwRCx3RUFBb0U7QUFDcEUsMEVBQXNFO0FBQ3RFLDBFQUFzRTtBQUN0RSx1RUFBcUU7QUFDckUsc0VBQWtFO0FBQ2xFLDBFQUFzRTtBQUN0RSxnRUFBK0Q7QUFDL0Qsc0VBQXFFO0FBQ3JFLG9GQUFnRjtBQUNoRiw4RUFBMEU7QUFDMUUsb0VBQXFFO0FBQ3JFLDBFQUFvRTtBQUNwRSxzRkFBa0Y7QUFDbEYsd0RBQW9EO0FBQ3BELDhEQUEwRDtBQUMxRCxnRUFBNEQ7QUFDNUQsZ0VBQTREO0FBQzVELDhFQUF5RTtBQUN6RSw0Q0FBeUM7QUFDekMsZ0ZBQTRFO0FBQzVFLGdGQUE0RTtBQUM1RSx1RUFBbUU7QUFDbkUsZ0VBQWdFO0FBRWhFLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQTZEdEU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBM0RyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsd0NBQThCO2dCQUM5Qiw2QkFBc0I7Z0JBQ3RCLHNDQUE0QjtnQkFDNUIsMkJBQW1CO2dCQUNuQixnQkFBZ0I7Z0JBQ2hCLDJCQUEyQjtnQkFDM0IsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixJQUFJLEVBQUUsOEJBQThCO2lCQUN2QyxDQUFDO2FBQ0w7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osd0NBQWtCO2dCQUNsQiw4Q0FBcUI7Z0JBQ3JCLDhDQUFxQjtnQkFDckIsc0NBQWlCO2dCQUNqQiwwQ0FBbUI7Z0JBQ25CLGdEQUFzQjtnQkFDdEIsbUNBQWlCO2dCQUNqQix5Q0FBb0I7Z0JBQ3BCLDBDQUFtQjtnQkFDbkIsa0NBQWU7Z0JBQ2YsOEJBQWE7Z0JBQ2Isc0NBQWlCO2dCQUNqQiw4QkFBYTtnQkFDYixzQ0FBaUI7Z0JBQ2pCLDBDQUFtQjtnQkFDbkIsMENBQW1CO2dCQUNuQix3Q0FBa0I7Z0JBQ2xCLDJDQUFzQjtnQkFDdEIsd0NBQWlCO2dCQUNqQixrREFBdUI7Z0JBQ3ZCLDRDQUFvQjthQUN2QjtZQUNELGVBQWUsRUFBRyxDQUFDLDJDQUFzQixDQUFDO1lBQzFDLFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLCtDQUFxQjtnQkFDckIsRUFBQyxPQUFPLEVBQUcsU0FBUyxFQUFFLFFBQVEsRUFBRyxpQkFBTyxFQUFDO2dCQUN6QyxrQ0FBZTtnQkFDZixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZixhQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgdGFiVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vL2ltcG9ydCB7IEtpbnZleSwgS2ludmV5RXJyb3IsIEtpbnZleUludGVybmFsRXJyb3JSZXRyeSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3NoYXJlZC91c2VyLm1vZGFsXCI7XG4vL2ltcG9ydCB7QmFja2VuZFNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC9iYWNrZW5kLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TmV3c0ZlZWRDb21wb25lbnR9IGZyb20gXCIuL05ld3NGZWVkL25ld3NmZWVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmV3c2RldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL05ld3NEZXRhaWwvbmV3c2RldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhdENvbXBvbmVudH0gZnJvbSBcIi4vY2hhdC9jaGF0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbm5vbkNvbUNvbXBvbmVudH0gZnJvbSBcIi4vQW5ub25Db21tZW50L2Fubm9uY29tLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBc3NpZ25tZW50Q29tcG9uZW50fSBmcm9tIFwiLi9Bc3NpZ25tZW50L2Fzc2lnbm1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge0F0dGVuZGVuY2VDb21wb25lbnR9IGZyb20gXCIuL0F0dGVuZGVuY2UvYXR0ZW5kZW5jZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZhdm9yaXRlc0NvbXBvbmVudCB9IGZyb20gJy4vZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtGbG9hdEJ0bkNvbXBvbmVudH0gZnJvbSAnLi9BdHRlbmRlbmNlL2Zsb2F0QnRuLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zsb2F0QnRuU3RDb21wb25lbnR9IGZyb20gJy4vQXR0ZW5kZW5jZS9mbG9hdEJ0blN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0ZhcmppQnRuQ29tcG9uZW50fSBmcm9tICcuL0Fzc2lnbm1lbnQvZmFyamkuY29tcG9uZW50JztcbmltcG9ydCB7RmFyamlzdWJCdG5Db21wb25lbnR9IGZyb20gJy4vQXNzaWdubWVudC9mYXJqaXN1Yi5jb21wb25lbnQnO1xuaW1wb3J0IHtQcmVzZW50U3RhdHVzQ29tcG9uZW50fSBmcm9tICcuL1Rha2VBdHRlbmRlbmNlL3ByZXNlbnRzdGF0dXMuY29tcG9uZW50JztcbmltcG9ydCB7QW5ub25Db21CdG5Db21wb25lbnR9IGZyb20gJy4vQW5ub25Db21tZW50L2Fubm9uY29tYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQge0FkZENsYXNzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vQWRkQ2xhc3MvYWRkY2xhc3MuY29tcG9uZW50JztcbmltcG9ydCB7QWRkQ2xhc3NDb21wb25lbnR9IGZyb20gJy4vQWRkSW5DbGFzcy9hZGRpbmNsYXNzLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rha2VBdHRlbmRlbmNlQ29tcG9uZW50fSBmcm9tICcuL1Rha2VBdHRlbmRlbmNlL3Rha2VhdHRlbmRlbmNlLmNvbXBvbmVudCc7XG5pbXBvcnQge05ld3NTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9uZXdzLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2xhc3Nlc1NlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2NsYXNzZXMuc2VydmljZVwiO1xuaW1wb3J0IHtGYXZvcml0ZVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2Zhdm9yaXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7QW5ub25Db21TZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hbm5vbmNvbS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Byb2Nlc3NIVFRQTXNnU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2VcIjtcbmltcG9ydCB7YmFzZVVSTH0gZnJvbSAnLi9zaGFyZWQvYmFzZXVybCc7XG5pbXBvcnQge1N0dWRlbnRMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9zdHVkZW50TG9naW4vc3R1ZGVudExvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQge1RlYWNoZXJMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi90ZWFjaGVyTG9naW4vdGVhY2hlckxvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0YXJ0UGFnZUNvbXBvbmVudH0gZnJvbSAnLi9zdGFydFBhZ2Uvc3RhcnRwYWdlLmNvbXBvbmVudCc7XG4vL2ltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc3R1ZGVudGxvZ2luLnNlcnZpY2VcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgLy8vL0tpbnZleUVycm9yLFxuICAgICAgICAvL0tpbnZleUludGVybmFsRXJyb3JSZXRyeSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAnZmEnOiAnLi9mb250cy9mb250LWF3ZXNvbWUubWluLmNzcydcbiAgICAgICAgfSlcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsIFxuICAgICAgICBTdGFydFBhZ2VDb21wb25lbnQsXG4gICAgICAgIFRlYWNoZXJMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgU3R1ZGVudExvZ2luQ29tcG9uZW50LFxuICAgICAgICBGbG9hdEJ0bkNvbXBvbmVudCxcbiAgICAgICAgRmxvYXRCdG5TdENvbXBvbmVudCxcbiAgICAgICAgUHJlc2VudFN0YXR1c0NvbXBvbmVudCxcbiAgICAgICAgRmFyamlCdG5Db21wb25lbnQsXG4gICAgICAgIEZhcmppc3ViQnRuQ29tcG9uZW50LFxuICAgICAgICBOZXdzZGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBEcmF3ZXJDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIE5ld3NGZWVkQ29tcG9uZW50LFxuICAgICAgICBDaGF0Q29tcG9uZW50LFxuICAgICAgICBBbm5vbkNvbUNvbXBvbmVudCxcbiAgICAgICAgQXNzaWdubWVudENvbXBvbmVudCxcbiAgICAgICAgQXR0ZW5kZW5jZUNvbXBvbmVudCxcbiAgICAgICAgRmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBBZGRDbGFzc01vZGFsQ29tcG9uZW50LFxuICAgICAgICBBZGRDbGFzc0NvbXBvbmVudCxcbiAgICAgICAgVGFrZUF0dGVuZGVuY2VDb21wb25lbnQsXG4gICAgICAgIEFubm9uQ29tQnRuQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHMgOiBbQWRkQ2xhc3NNb2RhbENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5ld3NTZXJ2aWNlLFxuICAgICAgICAvL0JhY2tlbmRTZXJ2aWNlLFxuICAgICAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlIDogJ0Jhc2VVUkwnLCB1c2VWYWx1ZSA6IGJhc2VVUkx9LFxuICAgICAgICBGYXZvcml0ZVNlcnZpY2UsXG4gICAgICAgIENsYXNzZXNTZXJ2aWNlLFxuICAgICAgICBBbm5vbkNvbVNlcnZpY2VcbiAgICAgICAgLy9Vc2VyU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==