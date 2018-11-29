"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news_service_1 = require("../services/news.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_toasty_1 = require("nativescript-toasty");
var NewsdetailComponent = /** @class */ (function () {
    function NewsdetailComponent(newsservice, route, routerExtensions, favoriteservice, fonticon, BaseURL) {
        this.newsservice = newsservice;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.BaseURL = BaseURL;
        this.favorite = false;
    }
    NewsdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.newsservice.getNews(+params['id']); })
            .subscribe(function (news) {
            _this.news = news;
            _this.favorite = _this.favoriteservice.isFavorite(_this.news.id);
            _this.numcomments = _this.news.comments.length;
            var total = 0;
            _this.news.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        }, function (errmess) { _this.news = null; _this.errMess = errmess; });
        console.log("The news is :" + this.news);
    };
    NewsdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    NewsdetailComponent.prototype.addToFavorites = function () {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.news.id);
            this.favorite = this.favoriteservice.addFavorite(this.news.id);
            var toast = new nativescript_toasty_1.Toasty("Added Dish " + this.news.id, "short", "bottom");
            toast.show();
        }
    };
    NewsdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-newsdetail',
            moduleId: module.id,
            templateUrl: './newsdetail.component.html'
        }),
        __param(5, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [news_service_1.NewsService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            favorite_service_1.FavoriteService,
            nativescript_ngx_fonticon_1.TNSFontIconService, Object])
    ], NewsdetailComponent);
    return NewsdetailComponent;
}());
exports.NewsdetailComponent = NewsdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2RldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCx5REFBdUQ7QUFDdkQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCx1Q0FBcUM7QUFDckMsaUVBQStEO0FBQy9ELHVFQUErRDtBQUMvRCwyREFBNkM7QUFPN0M7SUFTRSw2QkFBb0IsV0FBd0IsRUFDbEMsS0FBcUIsRUFDckIsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLFFBQTRCLEVBQ1QsT0FBTztRQUxoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUNULFlBQU8sR0FBUCxPQUFPLENBQUE7UUFQcEMsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU9jLENBQUM7SUFFekMsc0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBWkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsU0FBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQzthQUN0RSxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzdDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxFQUF2QixDQUF1QixDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssR0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFDRyxVQUFBLE9BQU8sSUFBTSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw0Q0FBYyxHQUFkO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9ELElBQU0sS0FBSyxHQUFHLElBQUksNEJBQU0sQ0FBQyxhQUFhLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBM0NVLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO1FBZUcsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBTGEsMEJBQVc7WUFDM0IsdUJBQWM7WUFDSCx5QkFBZ0I7WUFDakIsa0NBQWU7WUFDdEIsOENBQWtCO09BYjNCLG1CQUFtQixDQTRDL0I7SUFBRCwwQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gJy4uL3NoYXJlZC9uZXdzJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21tZW50JztcclxuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9uZXdzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtbmV3c2RldGFpbCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25ld3NkZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdzZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbmV3czogTmV3cztcclxuICBjb21tZW50OiBDb21tZW50O1xyXG4gIGVyck1lc3M6IHN0cmluZztcclxuICBhdmdzdGFyczogc3RyaW5nO1xyXG4gIG51bWNvbW1lbnRzOiBudW1iZXI7XHJcbiAgZmF2b3JpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV3c3NlcnZpY2U6IE5ld3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxyXG4gICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLm5ld3NzZXJ2aWNlLmdldE5ld3MoK3BhcmFtc1snaWQnXSkpXHJcbiAgICAgIC5zdWJzY3JpYmUobmV3cyA9PiB7IFxyXG4gICAgICAgIHRoaXMubmV3cyA9IG5ld3M7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmlzRmF2b3JpdGUodGhpcy5uZXdzLmlkKTtcclxuICAgICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLm5ld3MuY29tbWVudHMubGVuZ3RoO1xyXG4gICAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICAgIHRoaXMubmV3cy5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xyXG4gICAgICB9LFxyXG4gICAgICAgICAgZXJybWVzcyA9PiB7IHRoaXMubmV3cyA9IG51bGw7IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzczsgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBuZXdzIGlzIDpcIiArIHRoaXMubmV3cyk7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9GYXZvcml0ZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuZmF2b3JpdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0FkZGluZyB0byBGYXZvcml0ZXMnLCB0aGlzLm5ld3MuaWQpO1xyXG4gICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuYWRkRmF2b3JpdGUodGhpcy5uZXdzLmlkKTtcclxuICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiQWRkZWQgRGlzaCBcIisgdGhpcy5uZXdzLmlkLCBcInNob3J0XCIsIFwiYm90dG9tXCIpO1xyXG4gICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19