import { Component, OnInit, Inject } from '@angular/core';
import { Classes } from '../shared/classes';
import { ClassesService } from '../services/classes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/switchMap';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Toasty } from 'nativescript-toasty';

@Component({
  selector: 'app-addinclass',
    moduleId: module.id,
  templateUrl: './addinclass.component.html'
})
export class AddClassComponent implements OnInit {

  classes: Classes;
  errMess: string;

  constructor(private classesservice: ClassesService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private fonticon: TNSFontIconService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params) => this.classesservice.getClass(+params['id']))
      .subscribe(classes => this.classes ,
          errmess => { this.classes = null; this.errMess = <any>errmess; });
  }

  goBack(): void {
    this.routerExtensions.back();
  }

}