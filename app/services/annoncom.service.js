"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
var AnnonComService = /** @class */ (function () {
    function AnnonComService(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
    }
    AnnonComService.prototype.getAllComments = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'annoncom').map(function (res) { return _this.processHttpmsgService.extractData(res); })._catch(function (error) { return _this.processHttpmsgService.handleError(error); });
        ;
    };
    AnnonComService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, process_httpmsg_service_1.ProcessHTTPMsgService])
    ], AnnonComService);
    return AnnonComService;
}());
exports.AnnonComService = AnnonComService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub25jb20uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFubm9uY29tLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMsc0NBQTZDO0FBQzdDLDZDQUEwQztBQUMxQyxxRUFBaUU7QUFDakUsaUNBQStCO0FBQy9CLG1DQUFpQztBQUNqQyxtQ0FBaUM7QUFLakM7SUFDSSx5QkFBbUIsSUFBVSxFQUFTLHFCQUE0QztRQUEvRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNoRixDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUFBLGlCQUdDO1FBRkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFLLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFLLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7UUFDcEwsQ0FBQztJQUNILENBQUM7SUFQTSxlQUFlO1FBRjNCLGlCQUFVLEVBQUU7eUNBR2dCLFdBQUksRUFBZ0MsK0NBQXFCO09BRHpFLGVBQWUsQ0FTM0I7SUFBRCxzQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbm5vbkNvbX0gZnJvbSAnLi4vc2hhcmVkL2Fubm9uY29tJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtiYXNlVVJMfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XHJcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZX0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBBbm5vbkNvbVNlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCxwcml2YXRlIHByb2Nlc3NIdHRwbXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBnZXRBbGxDb21tZW50cygpOk9ic2VydmFibGU8QW5ub25Db21bXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdhbm5vbmNvbScpLm1hcChyZXMgPT4ge3JldHVybiB0aGlzLnByb2Nlc3NIdHRwbXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpfSkuX2NhdGNoKGVycm9yID0+IHtyZXR1cm4gdGhpcy5wcm9jZXNzSHR0cG1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpfSk7XHJcbiAgICAgICAgO1xyXG4gICAgICB9XHJcbiAgICBcclxufSJdfQ==