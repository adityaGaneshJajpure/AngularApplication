"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_toasty_1 = require("nativescript-toasty");
var annoncom_service_1 = require("../services/annoncom.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var AnnonComComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function AnnonComComponent(changeDetectorRef, annoncomService, modalService, BaseURL) {
        this.changeDetectorRef = changeDetectorRef;
        this.annoncomService = annoncomService;
        this.modalService = modalService;
        this.BaseURL = BaseURL;
    }
    AnnonComComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.annoncomService.getAllComments().subscribe(function (commentsall) { return _this.commentsall = commentsall; }, function (errmess) { return _this.errmess = errmess; });
        console.log(this.commentsall);
        console.log(this.errmess);
    };
    AnnonComComponent.prototype.onBack = function () {
        var toast = new nativescript_toasty_1.Toasty("cancelled addition", "short", "bottom");
    };
    AnnonComComponent.prototype.handleError = function (error) {
        var toast = new nativescript_toasty_1.Toasty("cancelled addition", "short", "bottom");
    };
    AnnonComComponent.prototype.click = function () {
        var _this = this;
        var dialogs = require("ui/dialogs");
        // inputType property can be dialogs.inputType.password or dialogs.inputType.text.
        dialogs.prompt({
            title: "Add Comment",
            message: "Enter A comment which not be anti-social. Your identity will kept hide",
            okButtonText: "Add Comment",
            cancelButtonText: "Cancel",
            defaultText: "",
            inputType: dialogs.inputType.text
        }).then(function (result) {
            //if(result.comment.trim().length){
            result.date = ((new Date).getDate()).toString();
            //}
            //else{
            console.log("data : " + result.comment.toString());
            // }
            _this.commentsall.push(result);
            console.log(result);
        }).catch(function (error) { return _this.handleError(error); }),
            function () { return console.log("not done anything"); };
    };
    AnnonComComponent = __decorate([
        core_1.Component({
            selector: "ns-annoncom",
            moduleId: module.id,
            templateUrl: "./annoncom.component.html",
        }),
        __param(3, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, annoncom_service_1.AnnonComService, modal_dialog_1.ModalDialogService, Object])
    ], AnnonComComponent);
    return AnnonComComponent;
}());
exports.AnnonComComponent = AnnonComComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub25jb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ub25jb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBFO0FBQzFFLDJEQUE2QztBQUU3QyxpRUFBNkQ7QUFFN0Qsa0VBQTJGO0FBTTNGO0lBTUksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCwyQkFBb0IsaUJBQW1DLEVBQVMsZUFBaUMsRUFBUyxZQUFnQyxFQUMzRyxPQUFPO1FBRGxCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDM0csWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUVsQyxDQUFDO0lBRUwsb0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQzNDLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEVBQTlCLENBQThCLEVBQzdDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLEVBQTNCLENBQTJCLENBQUcsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBR0Qsa0NBQU0sR0FBTjtRQUVGLElBQU0sS0FBSyxHQUFHLElBQUksNEJBQU0sQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxLQUFXO1FBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksNEJBQU0sQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUdELGlDQUFLLEdBQUw7UUFBQSxpQkFzQkM7UUFwQkcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLGtGQUFrRjtRQUNsRixPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLGFBQWE7WUFDcEIsT0FBTyxFQUFFLHdFQUF3RTtZQUNqRixZQUFZLEVBQUUsYUFBYTtZQUMzQixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUNoQixtQ0FBbUM7WUFDL0IsTUFBTSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xELEdBQUc7WUFDSCxPQUFPO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUk7WUFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBVyxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSyxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQztZQUNuRCxjQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO0lBQ3pDLENBQUM7SUF0RFEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO1FBVU8sV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRGdCLHdCQUFpQixFQUEyQixrQ0FBZSxFQUF1QixpQ0FBa0I7T0FSakksaUJBQWlCLENBdUQ3QjtJQUFELHdCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3R5IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0eSc7XHJcbmltcG9ydCB7QW5ub25Db219IGZyb20gJy4uL3NoYXJlZC9hbm5vbmNvbSc7XHJcbmltcG9ydCB7QW5ub25Db21TZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9hbm5vbmNvbS5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgdGFiVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hbm5vbmNvbVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYW5ub25jb20uY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEFubm9uQ29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gICAgY29tbWVudHNhbGwgOiBBbm5vbkNvbVtdO1xyXG4gICAgZXJybWVzcyA6IHN0cmluZztcclxuXHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjpDaGFuZ2VEZXRlY3RvclJlZixwcml2YXRlIGFubm9uY29tU2VydmljZSA6IEFubm9uQ29tU2VydmljZSxwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwpe1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbm5vbmNvbVNlcnZpY2UuZ2V0QWxsQ29tbWVudHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGNvbW1lbnRzYWxsID0+IHRoaXMuY29tbWVudHNhbGwgPSBjb21tZW50c2FsbCxcclxuICAgICAgICAgICAgZXJybWVzcyA9PiB0aGlzLmVycm1lc3MgPSA8YW55PmVycm1lc3MgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tbWVudHNhbGwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVycm1lc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25CYWNrKClcclxuICAgIHsgICAgICAgICAgICAgICAgICBcclxuXHRcdGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcImNhbmNlbGxlZCBhZGRpdGlvblwiLCBcInNob3J0XCIsIFwiYm90dG9tXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9yKGVycm9yIDogYW55KXtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJjYW5jZWxsZWQgYWRkaXRpb25cIiwgXCJzaG9ydFwiLCBcImJvdHRvbVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xpY2soKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcbiAgICAgICAgLy8gaW5wdXRUeXBlIHByb3BlcnR5IGNhbiBiZSBkaWFsb2dzLmlucHV0VHlwZS5wYXNzd29yZCBvciBkaWFsb2dzLmlucHV0VHlwZS50ZXh0LlxyXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQWRkIENvbW1lbnRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciBBIGNvbW1lbnQgd2hpY2ggbm90IGJlIGFudGktc29jaWFsLiBZb3VyIGlkZW50aXR5IHdpbGwga2VwdCBoaWRlXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBZGQgQ29tbWVudFwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy9pZihyZXN1bHQuY29tbWVudC50cmltKCkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRlPSgobmV3IERhdGUpLmdldERhdGUoKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIC8vZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSA6IFwiICsgcmVzdWx0LmNvbW1lbnQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzYWxsLnB1c2goPEFubm9uQ29tPnJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge3JldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKX0pLFxyXG4gICAgICAgICgpPT5jb25zb2xlLmxvZyhcIm5vdCBkb25lIGFueXRoaW5nXCIpOyAgICBcclxuICAgIH1cclxufSJdfQ==