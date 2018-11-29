import { Component, OnInit, Inject } from '@angular/core';
import { News } from '../shared/news';
import { Comment } from '../shared/comment';
import { NewsService } from '../services/news.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/switchMap';
import { FavoriteService } from '../services/favorite.service';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Toasty } from 'nativescript-toasty';

@Component({
    selector: 'app-newsdetail',
    moduleId: module.id,
    templateUrl: './newsdetail.component.html'
})
export class NewsdetailComponent implements OnInit {

  news: News;
  comment: Comment;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean = false;
 
  constructor(private newsservice: NewsService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private favoriteservice: FavoriteService,
    private fonticon: TNSFontIconService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params) => this.newsservice.getNews(+params['id']))
      .subscribe(news => { 
        this.news = news;
        this.favorite = this.favoriteservice.isFavorite(this.news.id);
          this.numcomments = this.news.comments.length;
          let total = 0;
          this.news.comments.forEach(comment => total += comment.rating);
          this.avgstars = (total/this.numcomments).toFixed(2);
      },
          errmess => { this.news = null; this.errMess = <any>errmess; });
          console.log("The news is :" + this.news);
  }

  goBack(): void {
    this.routerExtensions.back();
  }

  addToFavorites() {
    if (!this.favorite) {
      console.log('Adding to Favorites', this.news.id);
      this.favorite = this.favoriteservice.addFavorite(this.news.id);
      const toast = new Toasty("Added Dish "+ this.news.id, "short", "bottom");
      toast.show();
    }
  }
}