"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var classes_service_1 = require("../services/classes.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var AddClassComponent = /** @class */ (function () {
    function AddClassComponent(classesservice, route, routerExtensions, fonticon, BaseURL) {
        this.classesservice = classesservice;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.fonticon = fonticon;
        this.BaseURL = BaseURL;
    }
    AddClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.classesservice.getClass(+params['id']); })
            .subscribe(function (classes) { return _this.classes; }, function (errmess) { _this.classes = null; _this.errMess = errmess; });
    };
    AddClassComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    AddClassComponent = __decorate([
        core_1.Component({
            selector: 'app-addinclass',
            moduleId: module.id,
            templateUrl: './addinclass.component.html'
        }),
        __param(4, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [classes_service_1.ClassesService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            nativescript_ngx_fonticon_1.TNSFontIconService, Object])
    ], AddClassComponent);
    return AddClassComponent;
}());
exports.AddClassComponent = AddClassComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaW5jbGFzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRpbmNsYXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCwrREFBNkQ7QUFDN0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCx1Q0FBcUM7QUFDckMsdUVBQStEO0FBUS9EO0lBS0UsMkJBQW9CLGNBQThCLEVBQ3hDLEtBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxRQUE0QixFQUNULE9BQU87UUFKaEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3hDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDVCxZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQUksQ0FBQztJQUV6QyxvQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFKQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO2FBQzFFLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxFQUM5QixVQUFBLE9BQU8sSUFBTSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQXJCVSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLFdBQVcsRUFBRSw2QkFBNkI7U0FDM0MsQ0FBQztRQVVHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUpnQixnQ0FBYztZQUNqQyx1QkFBYztZQUNILHlCQUFnQjtZQUN4Qiw4Q0FBa0I7T0FSM0IsaUJBQWlCLENBdUI3QjtJQUFELHdCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGFzc2VzIH0gZnJvbSAnLi4vc2hhcmVkL2NsYXNzZXMnO1xyXG5pbXBvcnQgeyBDbGFzc2VzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NsYXNzZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hZGRpbmNsYXNzJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGluY2xhc3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRDbGFzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNsYXNzZXM6IENsYXNzZXM7XHJcbiAgZXJyTWVzczogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsYXNzZXNzZXJ2aWNlOiBDbGFzc2VzU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxyXG4gICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmNsYXNzZXNzZXJ2aWNlLmdldENsYXNzKCtwYXJhbXNbJ2lkJ10pKVxyXG4gICAgICAuc3Vic2NyaWJlKGNsYXNzZXMgPT4gdGhpcy5jbGFzc2VzICxcclxuICAgICAgICAgIGVycm1lc3MgPT4geyB0aGlzLmNsYXNzZXMgPSBudWxsOyB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3M7IH0pO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICB9XHJcblxyXG59Il19