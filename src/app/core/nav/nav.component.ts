import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../common/local-storage';

class MenuItem {
  constructor(public caption: string, public link: any[]) {
  }
}

@Component({
  selector: 'expats-nav',
   templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];
  localLang : string ;

  ngOnInit() {
    this.storage.langUpdated.subscribe(
      (lang) => {
        this.localLang = this.storage.getItem('lang')['lang'];
        this.updateMenuItemsLang(this.localLang);
        }
    );
    this.updateMenuItemsLang(this.localLang);
  }

  updateMenuItemsLang(currLang) {
    if (currLang=='en')
      {
        this.menuItems = [
          { caption: 'Overview', link: ['/dashboard'] },
          { caption: 'Events', link: ['/events'] },
          { caption: 'Expats', link: ['/expats'] },
          { caption: 'Food', link: ['/food'] },
          { caption: 'Bars', link: ['/bars'] },
        ];
      }
    else if (currLang=='zh-CN')
        {
          this.menuItems = [
            { caption: '简介', link: ['/dashboard'] },
            { caption: '活动', link: ['/events'] },
            { caption: '人群', link: ['/expats'] },
            { caption: '饭店', link: ['/food'] },
            { caption: '酒吧', link: ['/bars'] },
          ];
        }
  }

  constructor(private storage: LocalStorage) {
      this.localLang = this.storage.getItem('lang')['lang'];
  }

}
