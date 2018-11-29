"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var news_service_1 = require("../services/news.service");
var NewsFeedComponent = /** @class */ (function (_super) {
    __extends(NewsFeedComponent, _super);
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function NewsFeedComponent(changeDetectorRef, newsService, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.newsService = newsService;
        _this.BaseURL = BaseURL;
        return _this;
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getAllNews().subscribe(function (newsall) { return _this.newsall = newsall; }, function (errmess) { return _this.errMess = errmess; });
    };
    NewsFeedComponent = __decorate([
        core_1.Component({
            selector: "ns-news",
            moduleId: module.id,
            templateUrl: "./newsfeed.component.html",
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, news_service_1.NewsService, Object])
    ], NewsFeedComponent);
    return NewsFeedComponent;
}(drawer_page_1.DrawerPage));
exports.NewsFeedComponent = NewsFeedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2ZlZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3c2ZlZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBFO0FBQzFFLDREQUF3RDtBQUV4RCx5REFBcUQ7QUFPckQ7SUFBdUMscUNBQVU7SUFLN0MsNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCwyQkFBb0IsaUJBQW1DLEVBQVMsV0FBeUIsRUFDMUQsT0FBTztRQUR0QyxZQUVRLGtCQUFNLGlCQUFpQixDQUFDLFNBQzNCO1FBSGUsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFTLGlCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQzFELGFBQU8sR0FBUCxPQUFPLENBQUE7O0lBRWxDLENBQUM7SUFDTCxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FDbkMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsRUFDakMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFRLE9BQU8sRUFBM0IsQ0FBMkIsQ0FDekMsQ0FBQztJQUNOLENBQUM7SUFoQlEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO1FBU08sV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRGdCLHdCQUFpQixFQUF1QiwwQkFBVztPQVBoRixpQkFBaUIsQ0FpQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWpCRCxDQUF1Qyx3QkFBVSxHQWlCaEQ7QUFqQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmF3ZXJQYWdlfSBmcm9tICcuLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlJztcclxuaW1wb3J0IHtOZXdzfSBmcm9tICcuLi9zaGFyZWQvbmV3cyc7XHJcbmltcG9ydCB7TmV3c1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL25ld3Muc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW5ld3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL25ld3NmZWVkLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdzRmVlZENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG5ld3NhbGwgOiBOZXdzW107XHJcbiAgICBlcnJNZXNzIDogc3RyaW5nO1xyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLHByaXZhdGUgbmV3c1NlcnZpY2UgOiBOZXdzU2VydmljZSxcclxuICAgICAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKXtcclxuICAgICAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmV3c1NlcnZpY2UuZ2V0QWxsTmV3cygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgbmV3c2FsbCA9PiB0aGlzLm5ld3NhbGwgPSBuZXdzYWxsLFxyXG4gICAgICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=