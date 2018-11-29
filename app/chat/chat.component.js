"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var dialogs_1 = require("tns-core-modules/ui/dialogs/dialogs");
var ChatComponent = /** @class */ (function (_super) {
    __extends(ChatComponent, _super);
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ChatComponent(changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.click = function () {
        dialogs_1.alert({
            title: "COLLEGE MANAGER",
            message: "Contact Admin!!!!",
            okButtonText: "Ok"
        });
    };
    ChatComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "COLLEGE MANAGER",
            okButtonText: "OK",
            message: message
        });
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: "ns-chat",
            moduleId: module.id,
            templateUrl: "./chat.component.html",
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Object])
    ], ChatComponent);
    return ChatComponent;
}(drawer_page_1.DrawerPage));
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRTtBQUMxRSw0REFBd0Q7QUFDeEQsK0RBQTREO0FBTzVEO0lBQW1DLGlDQUFVO0lBR3pDLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsdUJBQW9CLGlCQUFtQyxFQUN4QixPQUFPO1FBRHRDLFlBRVEsa0JBQU0saUJBQWlCLENBQUMsU0FDM0I7UUFIZSx1QkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ3hCLGFBQU8sR0FBUCxPQUFPLENBQUE7O0lBRWxDLENBQUM7SUFFTCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxlQUFLLENBQUM7WUFDRixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztJQUdELDZCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2pCLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3QlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQztRQU9PLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQURnQix3QkFBaUI7T0FMOUMsYUFBYSxDQThCekI7SUFBRCxvQkFBQztDQUFBLEFBOUJELENBQW1DLHdCQUFVLEdBOEI1QztBQTlCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEluamVjdCxDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RHJhd2VyUGFnZX0gZnJvbSAnLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZSc7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1jaGF0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jaGF0LmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwpe1xyXG4gICAgICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGljaygpe1xyXG4gICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ09MTEVHRSBNQU5BR0VSXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ29udGFjdCBBZG1pbiEhISFcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJDT0xMRUdFIE1BTkFHRVJcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==