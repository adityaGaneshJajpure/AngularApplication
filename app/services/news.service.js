"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/catch");
var NewsService = /** @class */ (function () {
    function NewsService(http, processHttpmsgService) {
        this.http = http;
        this.processHttpmsgService = processHttpmsgService;
    }
    NewsService.prototype.getAllNews = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'news').map(function (res) { return _this.processHttpmsgService.extractData(res); })._catch(function (error) { return _this.processHttpmsgService.handleError(error); });
        ;
    };
    NewsService.prototype.getNews = function (id) {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'news/' + id).map(function (res) { return _this.processHttpmsgService.extractData(res); })._catch(function (error) { return _this.processHttpmsgService.handleError(error); });
        ;
    };
    NewsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, process_httpmsg_service_1.ProcessHTTPMsgService])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBR3pDLHNDQUE2QztBQUM3Qyw2Q0FBMEM7QUFDMUMscUVBQWlFO0FBQ2pFLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMsbUNBQWlDO0FBS2pDO0lBQ0kscUJBQW1CLElBQVUsRUFBUyxxQkFBNEM7UUFBL0QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDaEYsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFHQztRQUZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSyxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSyxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ2hMLENBQUM7SUFDSCxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVM7UUFBakIsaUJBR0M7UUFGQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxPQUFPLEdBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFLLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFLLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7UUFDcEwsQ0FBQztJQUNILENBQUM7SUFaTSxXQUFXO1FBRnZCLGlCQUFVLEVBQUU7eUNBR2dCLFdBQUksRUFBZ0MsK0NBQXFCO09BRHpFLFdBQVcsQ0FhdkI7SUFBRCxrQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZXdzfSBmcm9tICcuLi9zaGFyZWQvbmV3cyc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7YmFzZVVSTH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xyXG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2V9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3c1NlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCxwcml2YXRlIHByb2Nlc3NIdHRwbXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBnZXRBbGxOZXdzKCk6T2JzZXJ2YWJsZTxOZXdzW10+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAnbmV3cycpLm1hcChyZXMgPT4ge3JldHVybiB0aGlzLnByb2Nlc3NIdHRwbXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpfSkuX2NhdGNoKGVycm9yID0+IHtyZXR1cm4gdGhpcy5wcm9jZXNzSHR0cG1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpfSk7XHJcbiAgICAgICAgO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgZ2V0TmV3cyhpZDpudW1iZXIpOk9ic2VydmFibGU8TmV3cz57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICduZXdzLycraWQpLm1hcChyZXMgPT4ge3JldHVybiB0aGlzLnByb2Nlc3NIdHRwbXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpfSkuX2NhdGNoKGVycm9yID0+IHtyZXR1cm4gdGhpcy5wcm9jZXNzSHR0cG1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpfSk7XHJcbiAgICAgICAgO1xyXG4gICAgICB9XHJcbn0iXX0=