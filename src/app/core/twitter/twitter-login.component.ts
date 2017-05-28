import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../common/local-storage';

@Component({
  selector: 'expats-twitter-login',
  templateUrl: './twitter-login.component.html'
})
export class TwitterLoginComponent implements OnInit {
  localLang : string ;

  ngOnInit() {
    this.storage.langUpdated.subscribe(
      (lang) => {
        this.localLang = this.storage.getItem('lang')['lang'];
        }
    );
  }

  constructor(private storage: LocalStorage) {
      this.localLang = this.storage.getItem('lang')['lang'];
  }

}
