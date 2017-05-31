import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'
import {LocalStorage} from '../core/common/local-storage';

@Component({
  selector: 'expats-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent  implements OnInit {

  constructor(private translate: TranslateService,private storage: LocalStorage) {
    translate.addLangs(['zh-CN', 'en']);
    translate.setDefaultLang('en');

    let broswerLang = translate.getBrowserLang();
    let currentLang = broswerLang.match(/en|zh-CN/) ? broswerLang : 'en';
    console.log( " dashboard " + this.storage.getItem('lang')['lang']);
    translate.use(this.storage.getItem('lang')['lang'] ? this.storage.getItem('lang')['lang'] : currentLang);

  }

  ngOnInit() {
    this.storage.langUpdated.subscribe(
      (lang) => {
        console.log( "change dashboard " + this.storage.getItem('lang')['lang']);
        this.translate.use(this.storage.getItem('lang')['lang']);
      }
    );
  }

}
