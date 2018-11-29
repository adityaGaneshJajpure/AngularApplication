"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
//import { UserService } from "../services/studentlogin.service";
//import { BackendService } from "../shared/backend.service";
var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(page, /*private userService: UserService, */ router) {
        this.page = page;
        this.router = router;
        this.page.actionBarHidden = true;
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }
    StartPageComponent.prototype.ngOnInit = function () {
    };
    StartPageComponent = __decorate([
        core_1.Component({
            selector: "app-startpage",
            moduleId: module.id,
            templateUrl: "./startpage.component.html",
            styleUrls: ['./startpage.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], StartPageComponent);
    return StartPageComponent;
}());
exports.StartPageComponent = StartPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnRwYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXJ0cGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsMENBQXlDO0FBRXpDLGlEQUFnRDtBQUloRCxpRUFBaUU7QUFDakUsNkRBQTZEO0FBTzdEO0lBRUksNEJBQW9CLElBQVUsRUFBRSxzQ0FBc0MsQ0FBUSxNQUFjO1FBQXhFLFNBQUksR0FBSixJQUFJLENBQU07UUFBZ0QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN4RixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsb0NBQW9DO1FBQ3BDLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtJQUVBLENBQUM7SUFWUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBRzRCLFdBQUksRUFBd0QsZUFBTTtPQUZuRixrQkFBa0IsQ0FhOUI7SUFBRCx5QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kYWxcIjtcclxuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdHlcIjtcclxuLy9pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHVkZW50bG9naW4uc2VydmljZVwiO1xyXG4vL2ltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9iYWNrZW5kLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtc3RhcnRwYWdlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdGFydHBhZ2UuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL3N0YXJ0cGFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXJ0UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIC8qcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsICovcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5lbWFpbCA9IFwiZm9vMkBmb28uY29tXCI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLnBhc3N3b3JkID0gXCJmb29cIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOnZvaWR7XHJcblxyXG4gICAgfVxyXG5cclxuICBcclxufVxyXG5cclxuIl19