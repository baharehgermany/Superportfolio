import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { EmailComponent } from './email/email.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { StartComponent } from './start/start.component';
import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorkComponent,
    ProjectsComponent,
    AboutComponent,
    EmailComponent,
    FooterComponent,
    ImprintComponent,
    StartComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 0]);
    router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: any) => {
        //a good solve but it still does not scroll to anchor element after second click on the same anchor
        //one fix should be to set routing config option onSameUrlNavigation: 'reload',
        if (e.anchor) {
          // anchor navigation
          /* setTimeout is the core line to solve the solution */
          setTimeout(() => {
            viewportScroller.scrollToAnchor(e.anchor);
          });
        } else if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
 }
