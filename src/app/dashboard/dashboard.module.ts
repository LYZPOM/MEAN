import { NgModule } from '@angular/core';

import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { DashboardTravelComponent } from './shared/dashboard-travel/dashboard-travel.component';
import { DashboardWikiComponent } from './shared/dashboard-wiki/dashboard-wiki.component';
import { DashboardEventsComponent } from './shared/dashboard-events/dashboard-events.component';
import { DashboardPeopleComponent } from './shared/dashboard-people/dashboard-people.component';

export function HttpLoaderFactory(http:Http){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    DashboardRoutingModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[Http]
      }
    }
    )
  ],
  providers: [],
  declarations: [DashboardTravelComponent,DashboardWikiComponent,DashboardEventsComponent, DashboardPeopleComponent, routedComponents]
})
export class DashboardModule { }
