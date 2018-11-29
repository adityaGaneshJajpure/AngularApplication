"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var user_modal_1 = require("../shared/user.modal");
//import { UserService } from "../services/studentlogin.service";
//import { BackendService } from "../shared/backend.service";
var StudentLoginComponent = /** @class */ (function () {
    function StudentLoginComponent(page, /*private userService: UserService, */ router) {
        this.page = page;
        this.router = router;
        this.isLoggingIn = true;
        this.page.actionBarHidden = true;
        this.user = new user_modal_1.User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }
    StudentLoginComponent.prototype.ngOnInit = function () {
    };
    StudentLoginComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    StudentLoginComponent.prototype.submit = function () {
        /* if (!this.user.email || !this.user.password) {
             this.alert("Please provide both an email address and password.");
             return;
         }*/
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.register();
        }
    };
    StudentLoginComponent.prototype.login = function () {
        this.alert("SUCEESSFULLY LOGIN");
        this.router.navigate(["/home"]);
        /* this.userService.login(this.user)
             .then(() => {
                 this.router.navigate(["/home"]);
             })
             .catch(() => {
                 this.alert("Unfortunately we could not find your account.");
             });*/
    };
    StudentLoginComponent.prototype.register = function () {
        this.isLoggingIn = true;
        /* if (this.user.password != this.user.confirmPassword) {
             this.alert("Your passwords do not match.");
             return;
         }
         this.userService.register(this.user)
             .then(() => {
                 this.alert("Your account was successfully created.");
                 this.isLoggingIn = true;
             })
             .catch(() => {
                 this.alert("Unfortunately we were unable to create your account.");
             });*/
    };
    /*forgotPassword() {
        prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for APP NAME to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) =>  {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                    }).catch(() => {
                        this.alert("Unfortunately, an error occurred resetting your password.");
                    });
            }
        });
    }
*/
    StudentLoginComponent.prototype.forgotPassword = function () {
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for COLLEGE MANAGER to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                // Call the backend to reset the password
                dialogs_1.alert({
                    title: "COLLEGE MANAGER",
                    message: "Your password was successfully reset. Please check your email for instructions on choosing a new password.",
                    okButtonText: "Ok"
                });
            }
        });
    };
    StudentLoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    StudentLoginComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    StudentLoginComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "COLLEGE MANAGER",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], StudentLoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("confirmPassword"),
        __metadata("design:type", core_1.ElementRef)
    ], StudentLoginComponent.prototype, "confirmPassword", void 0);
    StudentLoginComponent = __decorate([
        core_1.Component({
            selector: "app-studentlogin",
            moduleId: module.id,
            templateUrl: "./studentLogin.component.html",
            styleUrls: ['./studentLogin.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], StudentLoginComponent);
    return StudentLoginComponent;
}());
exports.StudentLoginComponent = StudentLoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudExvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0dWRlbnRMb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsMENBQXlDO0FBQ3pDLHVEQUE0RDtBQUM1RCxpREFBZ0Q7QUFFaEQsbURBQTRDO0FBRTVDLGlFQUFpRTtBQUNqRSw2REFBNkQ7QUFPN0Q7SUFNSSwrQkFBb0IsSUFBVSxFQUFFLHNDQUFzQyxDQUFRLE1BQWM7UUFBeEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFnRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTDVGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBTWYsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsb0NBQW9DO1FBQ3BDLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCwwQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELHNDQUFNLEdBQU47UUFDRzs7O1lBR0k7UUFFSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakM7Ozs7OztrQkFNVTtJQUNiLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDekI7Ozs7Ozs7Ozs7O2tCQVdVO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUJGO0lBR0YsOENBQWMsR0FBZDtRQUNFLGdCQUFNLENBQUM7WUFDTCxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSwwRkFBMEY7WUFDbkcsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLHlDQUF5QztnQkFDekMsZUFBSyxDQUFDO29CQUNKLEtBQUssRUFBRSxpQkFBaUI7b0JBQ3hCLE9BQU8sRUFBRSw0R0FBNEc7b0JBQ3JILFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUE7WUFDSixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0csNkNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQUssR0FBTCxVQUFNLE9BQWU7UUFDakIsTUFBTSxDQUFDLGVBQUssQ0FBQztZQUNULEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxIc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7MkRBQUM7SUFDZDtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUFrQixpQkFBVTtrRUFBQztJQUpqRCxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzt5Q0FPNEIsV0FBSSxFQUF3RCxlQUFNO09BTm5GLHFCQUFxQixDQXNIakM7SUFBRCw0QkFBQztDQUFBLEFBdEhELElBc0hDO0FBdEhZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHtWYWxpZGF0b3JzLEZvcm1CdWlsZGVyLEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLm1vZGFsXCI7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3R5XCI7XHJcbi8vaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R1ZGVudGxvZ2luLnNlcnZpY2VcIjtcclxuLy9pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXN0dWRlbnRsb2dpblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3R1ZGVudExvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zdHVkZW50TG9naW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgQFZpZXdDaGlsZChcInBhc3N3b3JkXCIpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiKSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCAvKnByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCAqL3ByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIC8vIHRoaXMudXNlci5lbWFpbCA9IFwiZm9vMkBmb28uY29tXCI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyLnBhc3N3b3JkID0gXCJmb29cIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOnZvaWR7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgIC8qIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuYWxlcnQoXCJTVUNFRVNTRlVMTFkgTE9HSU5cIik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xyXG4gICAgICAgLyogdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XHJcbiAgICAgICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICAgICAvKiBpZiAodGhpcy51c2VyLnBhc3N3b3JkICE9IHRoaXMudXNlci5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XHJcbiAgICAgICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG4gICAgLypmb3Jnb3RQYXNzd29yZCgpIHtcclxuICAgICAgICBwcm9tcHQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJGb3Jnb3QgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQVBQIE5BTUUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxyXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+ICB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuKi9cclxuXHJcblxyXG5mb3Jnb3RQYXNzd29yZCgpIHtcclxuICBwcm9tcHQoe1xyXG4gICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXHJcbiAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBDT0xMRUdFIE1BTkFHRVIgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcclxuICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxyXG4gICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEucmVzdWx0KSB7XHJcbiAgICAgIC8vIENhbGwgdGhlIGJhY2tlbmQgdG8gcmVzZXQgdGhlIHBhc3N3b3JkXHJcbiAgICAgIGFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJDT0xMRUdFIE1BTkFHRVJcIixcclxuICAgICAgICBtZXNzYWdlOiBcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ09MTEVHRSBNQU5BR0VSXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==