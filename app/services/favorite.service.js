"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news_service_1 = require("../services/news.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(newsservice) {
        this.newsservice = newsservice;
        this.favorites = [];
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.newsservice.getAllNews()
            .map(function (news) { return news.filter(function (news) { return _this.favorites.some(function (el) { return el === news.id; }); }); });
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            return this.getFavorites();
        }
        else {
            return Observable_1.Observable.throw('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [news_service_1.NewsService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFHL0I7SUFJSSx5QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxFQUFFLEVBQVQsQ0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ2xCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFBQSxpQkFHQztRQUZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTthQUMvQixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxFQUE5RCxDQUE4RCxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNMLENBQUM7SUFqQ1EsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUt3QiwwQkFBVztPQUpuQyxlQUFlLENBa0MzQjtJQUFELHNCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5ld3MgfSBmcm9tICcuLi9zaGFyZWQvbmV3cyc7XHJcbmltcG9ydCB7IE5ld3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmV3cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlU2VydmljZSB7XHJcblxyXG4gICAgZmF2b3JpdGVzOiBBcnJheTxudW1iZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV3c3NlcnZpY2U6IE5ld3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Zhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZighdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmF2b3JpdGVzKCk6IE9ic2VydmFibGU8TmV3c1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3c3NlcnZpY2UuZ2V0QWxsTmV3cygpXHJcbiAgICAgICAgICAgIC5tYXAobmV3cyA9PiBuZXdzLmZpbHRlcihuZXdzID0+IHRoaXMuZmF2b3JpdGVzLnNvbWUoZWwgPT4gZWwgPT09IG5ld3MuaWQpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmF2b3JpdGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8TmV3c1tdPiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdEZWxldGluZyBub24tZXhpc3RhbnQgZmF2b3JpdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=