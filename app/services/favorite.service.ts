import { Injectable } from '@angular/core';
import { News } from '../shared/news';
import { NewsService } from '../services/news.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FavoriteService {

    favorites: Array<number>;

    constructor(private newsservice: NewsService) {
        this.favorites = [];
    }

    isFavorite(id: number): boolean {
        return this.favorites.some(el => el === id);
    }

    addFavorite(id: number): boolean {
        if(!this.isFavorite(id)) {
            this.favorites.push(id);
        }
        return true;
    }

    getFavorites(): Observable<News[]> {
        return this.newsservice.getAllNews()
            .map(news => news.filter(news => this.favorites.some(el => el === news.id)));
    }

    deleteFavorite(id: number): Observable<News[]> {
        let index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index,1);
            return this.getFavorites();
        }
        else {
            return Observable.throw('Deleting non-existant favorite');
        }
    }
}