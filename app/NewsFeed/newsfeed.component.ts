import {Component, OnInit, Inject,ChangeDetectorRef} from '@angular/core';
import {DrawerPage} from '../shared/drawer/drawer.page';
import {News} from '../shared/news';
import {NewsService} from '../services/news.service';

@Component({
    selector: "ns-news",
    moduleId: module.id,
    templateUrl: "./newsfeed.component.html",
})
export class NewsFeedComponent extends DrawerPage implements OnInit {

    newsall : News[];
    errMess : string;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private changeDetectorRef:ChangeDetectorRef,private newsService : NewsService,
        @Inject('BaseURL') private BaseURL){
            super(changeDetectorRef);
        }
    ngOnInit(): void {
        this.newsService.getAllNews().subscribe(
            newsall => this.newsall = newsall,
            errmess => this.errMess = <any>errmess
        );
    }
}