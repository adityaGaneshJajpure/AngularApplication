"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_toasty_1 = require("nativescript-toasty");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var classes_service_1 = require("../services/classes.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var AttendenceComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function AttendenceComponent(changeDetectorRef, classesService, BaseURL, modalService, route, routerExtensions, vcRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.classesService = classesService;
        this.BaseURL = BaseURL;
        this.modalService = modalService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.vcRef = vcRef;
    }
    AttendenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classesService.getAllClasses().subscribe(function (classall) { return _this.classall = classall; }, function (errmess) { return _this.errMess = errmess; });
        console.log(this.classall);
        console.log(this.errMess);
    };
    AttendenceComponent.prototype.onBack = function () {
        var toast = new nativescript_toasty_1.Toasty("cancelled addition", "short", "bottom");
    };
    AttendenceComponent.prototype.handleError = function (error) {
        var toast = new nativescript_toasty_1.Toasty("cancelled addition", "short", "bottom");
    };
    AttendenceComponent.prototype.click = function () {
        var _this = this;
        var dialogs = require("ui/dialogs");
        // inputType property can be dialogs.inputType.password or dialogs.inputType.text.
        dialogs.prompt({
            title: "Add Class",
            message: "Enter A unique class name (Suggested format classname_year ie. CS1_3)",
            okButtonText: "Add Class",
            cancelButtonText: "Cancel",
            defaultText: "",
            inputType: dialogs.inputType.text
        }).then(function (result) {
            if (result != null)
                _this.classall.push(result);
            console.log(result);
        }).catch(function (error) { return _this.handleError(error); }),
            function () { return console.log("not done anything"); };
    };
    AttendenceComponent = __decorate([
        core_1.Component({
            selector: "ns-attendence",
            moduleId: module.id,
            templateUrl: "./attendence.component.html",
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, classes_service_1.ClassesService, Object, modal_dialog_1.ModalDialogService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            core_1.ViewContainerRef])
    ], AttendenceComponent);
    return AttendenceComponent;
}());
exports.AttendenceComponent = AttendenceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ZW5kZW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdHRlbmRlbmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRjtBQUczRiwyREFBNkM7QUFDN0Msa0VBQTJGO0FBRTNGLCtEQUE2RDtBQUc3RCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBTS9EO0lBS0ksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCw2QkFBb0IsaUJBQW1DLEVBQVMsY0FBK0IsRUFDaEUsT0FBTyxFQUMxQixZQUFnQyxFQUNoQyxLQUFxQixFQUNyQixnQkFBa0MsRUFDbEMsS0FBdUI7UUFMZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQ2hFLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7SUFDL0IsQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUN6QyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxFQUEzQixDQUEyQixDQUFHLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFFRixJQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFNLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksS0FBVztRQUNuQixJQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFNLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxtQ0FBSyxHQUFMO1FBQUEsaUJBaUJDO1FBZkcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLGtGQUFrRjtRQUNsRixPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLFdBQVc7WUFDbEIsT0FBTyxFQUFFLHVFQUF1RTtZQUNoRixZQUFZLEVBQUUsV0FBVztZQUN6QixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBZTtZQUNwQixFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUUsSUFBSSxDQUFDO2dCQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBVSxNQUFNLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSyxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQztZQUNuRCxjQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO0lBQ3pDLENBQUM7SUFqRFEsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO1FBU08sV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRGdCLHdCQUFpQixFQUEwQixnQ0FBYyxVQUVyRSxpQ0FBa0I7WUFDekIsdUJBQWM7WUFDSCx5QkFBZ0I7WUFDM0IsdUJBQWdCO09BWjFCLG1CQUFtQixDQWtEL0I7SUFBRCwwQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdCxDaGFuZ2VEZXRlY3RvclJlZixWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQge0RyYXdlclBhZ2V9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgQ2xhc3NlcyB9IGZyb20gXCIuLi9zaGFyZWQvY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyBDbGFzc2VzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NsYXNzZXMuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHtBZGRDbGFzc0NvbXBvbmVudH0gZnJvbSAnLi4vQWRkSW5DbGFzcy9hZGRpbmNsYXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hdHRlbmRlbmNlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hdHRlbmRlbmNlLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdHRlbmRlbmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjbGFzc2FsbCA6IENsYXNzZXNbXTtcclxuICAgIGVyck1lc3MgOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLHByaXZhdGUgY2xhc3Nlc1NlcnZpY2UgOiBDbGFzc2VzU2VydmljZSxcclxuICAgICAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpe1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsYXNzZXNTZXJ2aWNlLmdldEFsbENsYXNzZXMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGNsYXNzYWxsID0+IHRoaXMuY2xhc3NhbGwgPSBjbGFzc2FsbCxcclxuICAgICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3MgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xhc3NhbGwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVyck1lc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFjaygpXHJcbiAgICB7ICAgICAgICAgICAgICAgICAgXHJcblx0XHRjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJjYW5jZWxsZWQgYWRkaXRpb25cIiwgXCJzaG9ydFwiLCBcImJvdHRvbVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcihlcnJvciA6IGFueSl7XHJcbiAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiY2FuY2VsbGVkIGFkZGl0aW9uXCIsIFwic2hvcnRcIiwgXCJib3R0b21cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2soKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcbiAgICAgICAgLy8gaW5wdXRUeXBlIHByb3BlcnR5IGNhbiBiZSBkaWFsb2dzLmlucHV0VHlwZS5wYXNzd29yZCBvciBkaWFsb2dzLmlucHV0VHlwZS50ZXh0LlxyXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQWRkIENsYXNzXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRW50ZXIgQSB1bmlxdWUgY2xhc3MgbmFtZSAoU3VnZ2VzdGVkIGZvcm1hdCBjbGFzc25hbWVfeWVhciBpZS4gQ1MxXzMpXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBZGQgQ2xhc3NcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdDogQ2xhc3NlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQhPW51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NhbGwucHVzaCg8Q2xhc3Nlcz5yZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtyZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcil9KSxcclxuICAgICAgICAoKT0+Y29uc29sZS5sb2coXCJub3QgZG9uZSBhbnl0aGluZ1wiKTtcclxuICAgIH1cclxufSAiXX0=