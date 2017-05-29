import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../common/local-storage';
import { Http, Headers} from '@angular/http';

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

  constructor(private storage: LocalStorage, private http: Http) {
      this.localLang = this.storage.getItem('lang')['lang'];
  }

}
