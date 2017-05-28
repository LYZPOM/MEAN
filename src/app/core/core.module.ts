import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { TwitterLoginComponent } from './twitter/twitter-login.component';

import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {LocalStorage} from './common/local-storage';

// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use

export function HttpLoaderFactory(http:Http){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[Http]
      }
    }
    )
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,[NavComponent,TwitterLoginComponent]
  ],
  declarations: [NavComponent,TwitterLoginComponent],
  providers: [LocalStorage]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
  }
}
