"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var dialogs_1 = require("tns-core-modules/ui/dialogs/dialogs");
var AssignmentComponent = /** @class */ (function (_super) {
    __extends(AssignmentComponent, _super);
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function AssignmentComponent(changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    AssignmentComponent.prototype.ngOnInit = function () {
    };
    AssignmentComponent.prototype.click = function () {
        dialogs_1.alert({
            title: "COLLEGE MANAGER",
            message: "Contact Admin!!!!",
            okButtonText: "Ok"
        });
    };
    AssignmentComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "COLLEGE MANAGER",
            okButtonText: "OK",
            message: message
        });
    };
    AssignmentComponent = __decorate([
        core_1.Component({
            selector: "ns-assignment",
            moduleId: module.id,
            templateUrl: "./assignment.component.html",
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Object])
    ], AssignmentComponent);
    return AssignmentComponent;
}(drawer_page_1.DrawerPage));
exports.AssignmentComponent = AssignmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaWdubWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3NpZ25tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSw0REFBd0Q7QUFDeEQsK0RBQTREO0FBTzVEO0lBQXlDLHVDQUFVO0lBRy9DLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsNkJBQW9CLGlCQUFtQyxFQUN4QixPQUFPO1FBRHRDLFlBRVEsa0JBQU0saUJBQWlCLENBQUMsU0FDM0I7UUFIZSx1QkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ3hCLGFBQU8sR0FBUCxPQUFPLENBQUE7O0lBRWxDLENBQUM7SUFFTCxzQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELG1DQUFLLEdBQUw7UUFDSSxlQUFLLENBQUM7WUFDRixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztJQUdELG1DQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3QlEsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO1FBT08sV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRGdCLHdCQUFpQjtPQUw5QyxtQkFBbUIsQ0E4Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTlCRCxDQUF5Qyx3QkFBVSxHQThCbEQ7QUE5Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmF3ZXJQYWdlfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFzc2lnbm1lbnRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Fzc2lnbm1lbnQuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6Q2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCl7XHJcbiAgICAgICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrKCl7XHJcbiAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJDT0xMRUdFIE1BTkFHRVJcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDb250YWN0IEFkbWluISEhIVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNPTExFR0UgTUFOQUdFUlwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19