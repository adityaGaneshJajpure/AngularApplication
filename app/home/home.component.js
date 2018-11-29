"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var platformModule = require("tns-core-modules/platform");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function HomeComponent(changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        console.log("Device model: " + platformModule.device.model);
        console.log("Device type: " + platformModule.device.deviceType);
        console.log("OS: " + platformModule.device.os);
        console.log("OS version: " + platformModule.device.osVersion);
        console.log("SDK Version: " + platformModule.device.sdkVersion);
        console.log("Screen width: " + platformModule.screen.mainScreen.widthPixels);
        console.log("Screen height: " + platformModule.screen.mainScreen.heightPixels);
        console.log("Screen scale: " + platformModule.screen.mainScreen.scale);
        _this.screenWidth = platformModule.screen.mainScreen.widthPixels;
        _this.screenHeight = platformModule.screen.mainScreen.heightPixels;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.screenWidth = platformModule.screen.mainScreen.widthPixels;
        this.screenHeight = platformModule.screen.mainScreen.heightPixels;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Object])
    ], HomeComponent);
    return HomeComponent;
}(drawer_page_1.DrawerPage));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSw0REFBMEQ7QUFDMUQsMERBQTREO0FBTzVEO0lBQW1DLGlDQUFVO0lBS3pDLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsdUJBQW9CLGlCQUFtQyxFQUN4QixPQUFPO1FBRHRDLFlBRU0sa0JBQU0saUJBQWlCLENBQUMsU0FZekI7UUFkZSx1QkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ3hCLGFBQU8sR0FBUCxPQUFPLENBQUE7UUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsS0FBSSxDQUFDLFdBQVcsR0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDL0QsS0FBSSxDQUFDLFlBQVksR0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7O0lBQy9ELENBQUM7SUFJTCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7SUFDbkUsQ0FBQztJQTVCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO1FBU08sV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRGdCLHdCQUFpQjtPQVA5QyxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsQ0FBbUMsd0JBQVUsR0E2QjVDO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIHNjcmVlbldpZHRoIDogbnVtYmVyO1xyXG4gICAgc2NyZWVuSGVpZ2h0IDogbnVtYmVyO1xyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6Q2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkge1xyXG4gICAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJEZXZpY2UgbW9kZWw6IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm1vZGVsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGV2aWNlIHR5cGU6IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT1M6IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9TIHZlcnNpb246IFwiICsgcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLm9zVmVyc2lvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTREsgVmVyc2lvbjogXCIgKyBwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uuc2RrVmVyc2lvbik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NyZWVuIHdpZHRoOiBcIiArIHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNjcmVlbiBoZWlnaHQ6IFwiICsgcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNjcmVlbiBzY2FsZTogXCIgKyBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5zY2FsZSk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aD1wbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcclxuICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0PXBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aD1wbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcclxuICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0PXBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVsczsgXHJcbiAgICB9XHJcbn0iXX0=