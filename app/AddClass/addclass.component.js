"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var AddClassModalComponent = /** @class */ (function () {
    function AddClassModalComponent(params, page, formBuilder) {
        this.params = params;
        this.page = page;
        this.formBuilder = formBuilder;
        this.formComment = this.formBuilder.group({
            name: '',
            enrollment: ''
        });
    }
    AddClassModalComponent.prototype.onNameChange = function (args) {
        var textField = args.object;
        this.formComment.patchValue({
            name: textField.text
        });
    };
    AddClassModalComponent.prototype.onEnrollmentChange = function (args) {
        var textField = args.object;
        this.formComment.patchValue({
            enrollment: textField.text
        });
    };
    AddClassModalComponent.prototype.onSubmit = function () {
        var submitForm;
        submitForm = this.formComment.value;
        this.params.closeCallback(submitForm);
    };
    AddClassModalComponent.prototype.onCancel = function () {
        this.params.closeCallback(null);
    };
    AddClassModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './addclass.component.html',
            selector: 'app-addmodal'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page,
            forms_1.FormBuilder])
    ], AddClassModalComponent);
    return AddClassModalComponent;
}());
exports.AddClassModalComponent = AddClassModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkY2xhc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkY2xhc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtFQUFzRTtBQUV0RSxnQ0FBK0I7QUFDL0Isd0NBQXdEO0FBUXhEO0lBSUksZ0NBQW9CLE1BQXlCLEVBQ2pDLElBQVUsRUFDVixXQUF3QjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRyxFQUFFO1NBQ2xCLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw2Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3ZCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtREFBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQ3hCLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFBSTtTQUU3QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksVUFBb0IsQ0FBQztRQUN6QixVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBdkNRLHNCQUFzQjtRQUxsQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsUUFBUSxFQUFDLGNBQWM7U0FDMUIsQ0FBQzt5Q0FLOEIsZ0NBQWlCO1lBQzNCLFdBQUk7WUFDRyxtQkFBVztPQU4zQixzQkFBc0IsQ0F5Q2xDO0lBQUQsNkJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tICd1aS9saXN0LXBpY2tlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7Q2xhc3Nlc30gZnJvbSBcIi4uL3NoYXJlZC9jbGFzc2VzXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZGRjbGFzcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzZWxlY3RvcjonYXBwLWFkZG1vZGFsJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkQ2xhc3NNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgZm9ybUNvbW1lbnQ6IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm1Db21tZW50ID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGVucm9sbG1lbnQgOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5hbWVDaGFuZ2UoYXJncykgeyAgXHJcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybUNvbW1lbnQucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHRleHRGaWVsZC50ZXh0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbnJvbGxtZW50Q2hhbmdlKGFyZ3MpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtQ29tbWVudC5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgICAgZW5yb2xsbWVudDogdGV4dEZpZWxkLnRleHRcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBsZXQgc3VibWl0Rm9ybSA6IENsYXNzZXM7XHJcbiAgICAgICAgc3VibWl0Rm9ybSA9IHRoaXMuZm9ybUNvbW1lbnQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhzdWJtaXRGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbCgpe1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sobnVsbCk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==