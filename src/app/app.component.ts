import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import {LocalStorage} from './core/common/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService, private storage: LocalStorage) {
    translate.addLangs(['zh-CN', 'en']);
    translate.setDefaultLang('en');

    let broswerLang = translate.getBrowserLang();
    let currentLang = broswerLang.match(/en|zh-CN/) ? broswerLang : 'en';
    translate.use(currentLang);
    this.storage.setItem('lang', { lang: currentLang});
  }

  changeLang(lang) {
    console.log(lang);
    this.translate.use(lang);
    this.storage.setItem('lang',{ lang: lang});
  }
  getLang() {
    console.log(this.translate.getBrowserLang());
    console.log(this.translate.getBrowserCultureLang());
  }
}
